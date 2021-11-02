import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import React from "react";
import Homepage from './Homepage';
import CategoryProduct from './CategoryProduct';


const AppRouter = () => {

    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/category-product" component={CategoryProduct}/>
                 
                    <Route path="*" component={Homepage} />
                    
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default AppRouter;