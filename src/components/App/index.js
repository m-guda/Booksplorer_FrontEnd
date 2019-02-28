import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

import Homepage from './homepage/index';
import Background1 from './Background1';
import BookCards from './BookCards';

class App extends React.Component {
    render() {
        return (
          <div>
            <Background1/>
          </div>
          
        )
      }
  
  }
  export default App;