import React, { Component } from 'react';
import HeaderNavbar from './HeaderNavbar'
import UserService from './service/UserService'
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Paper } from '@mui/material';

import Button from '@mui/material/Button';

import { resolveResponse } from "./utils/ResponseHandler";
class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryProduct: [], 
            waitingFlag: true,
            categoryName: ''
        }
    }


    componentDidMount() {
        
       let queryStr =  window.location.href.split('?')[1] && window.location.href.split('?')[1].split('=')[1]; 
       this.setState({categoryName: decodeURIComponent(queryStr)})
        UserService.getCategoryProduct(queryStr)
            .then((res) => {
                //   let data = resolveResponse(res); //common response handler
                if (res && res.data) {
                    this.setState({ categoryProduct: res.data , waitingFlag:false})
                }
            });
    }

    handleClick =(row)=>{
        console.log(row)
        this.props.history.push('/category-product?q='+row);
    }
    
    render() {
        return (
            <React.Fragment>
                <HeaderNavbar />

                <Grid direction="row" container spacing={5} style={{ padding: "20px" }}>

                    <Grid item xs={12} sm={12} >
                        <Typography variant="h5" component="p" >
                           {this.state.categoryName.toLocaleUpperCase()} 
                        </Typography>
                    </Grid>

                    {this.state.categoryProduct && this.state.categoryProduct.map(row => (
                        <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
                            <Paper onClick={()=> this.handleClick(row)} style={{ textAlign: "center", cursor:'pointer', padding:"10px" }} > 
                                <img style={{width:"50%", height:"400px"}} src={row.image} /> <br />
                                {row.title} <br /> &#8377; {row.price} <br /> Ratings {row.rating.rate}({row.rating.count})
                            </Paper>
                        </Grid>
                    ))}  

                    {this.state.waitingFlag ? <CircularProgress  /> : ""}
                </Grid>

            </React.Fragment>
        );
    }
}

export default Homepage;