import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from "./example/index";
import Searchbar from "./searchbar/index";
import Navbar from './navbar/index';
import Sellbook from "./navbar/sellbook";
import Latestnews from "./carousel/index";


class Homepage extends React.Component{


    render(){
       return(
      
                <div>
                    <Navbar /><br/><br/>
                    <Searchbar/><br/><br/>
                    <Latestnews/>
                    <Example/>
                  
                  
                    </div>
 
       );
    }
}

export default Homepage; 
