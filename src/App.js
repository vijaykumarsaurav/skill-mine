import React from 'react'; 
import './App.css';
import AppRouter from "./components/RouterComponent";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <AppRouter/>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
