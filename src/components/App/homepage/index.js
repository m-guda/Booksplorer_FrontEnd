import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Example from "./example/index";
import Searchbar from "./searchbar/index";
import NavBar from './navbar/index';


class Homepage extends React.Component{


    render(){
       return(
      
                <div>
                    <NavBar /><br/>
                    <Searchbar/><br/>
                    
                    <Example/>
                    </div>
 
       );
    }
}

export default Homepage; 
