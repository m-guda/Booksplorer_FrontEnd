import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from "../HomePage/example/index";
import axios from "axios";
import "../HomePage/Book.css"


class BookCards extends React.Component{
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
                <Example books={this.state.books} />
            </div>
             );
            }
        }
        export default BookCards; 