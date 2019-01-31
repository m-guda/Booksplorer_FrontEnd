import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Homepage from './homepage/index';


class App extends React.Component {
    render() {
      return (
        <div><Homepage/></div>
      )
    }
  }
  export default App;