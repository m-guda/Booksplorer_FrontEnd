import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';


import Homepage from './homepage/index';
import Background from './Background';




class App extends React.Component {
  // default state object
 
    render() {
      return (
        <div>
          <Background/>
        </div>
        
      )
    }
  }
  export default App;