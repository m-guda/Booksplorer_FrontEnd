// import React from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Example from "./example/index";
// import Searchbar from "./searchbar/index";
// import NavBar from './navbar/index';
// import axios from "axios";
// import "./Book.css"


// class Homepage extends React.Component{
//     state = {
//         books: []
//       };
    
//     componentDidMount() {
//         axios
//           .get("http://localhost:9000/books")
//           .then(response => {
//             console.log(response)
//             // create an array of contacts only with relevant data
      
//             this.setState({books: response.data});
    
//             // store the new state object in the component's state
            
//           })
//           .catch(error => console.log(error));
//      }
    


//     render(){
//       console.log(this.state.books)
        
//        return(
      
//                 <div>
//                     <NavBar /><br/>
//                     <Searchbar/><br/>                                
//                     <Example books={this.state.books} />
//                     </div>
 
//        );
//     }
// }

// export default Homepage; 

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import Example from "./example/index";
import Searchbar from "./searchbar/index";
import NavBar from './navbar/index';
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
                    <NavBar /><br/><br/><br/>                      
                    <div class="container">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
          <form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="h4 text-center mb-4">Search Your Book</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Book Title
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Author
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Address
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
          
            <div className="text-center mt-4">
              <MDBBtn color="success"  type="submit">
                Search
                
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>                         
   <Example books={this.state.books} />
   </div>
 
       );
    }
}

export default Homepage; 

