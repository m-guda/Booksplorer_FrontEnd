import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Example from "./example/index";
import Searchbar from "./searchbar/index";
import NavBar from './navbar/index';
import Carousal from './Carousal'
import axios from "axios";
import "./Book.css"


class Homepage extends React.Component{
    state = {
        books: []
      };
    
    componentDidMount() {
        axios
          .get("http://localhost:9000/books")
          .then(response => {
            console.log(response)
            // create an array of contacts only with relevant data
      
            this.setState({books: response.data});
    
            // store the new state object in the component's state
            
          })
          .catch(error => console.log(error));
     }
    


    render(){
      console.log(this.state.books)
        
       return(
      
                <div>
                    <NavBar /><br/>
                    <br/>
                    <br/>
                    <br/>
                    <Carousal/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Searchbar/><br/>                                
                    <Example books={this.state.books} />
                    </div>
 
       );
    }
}

export default Homepage; 
