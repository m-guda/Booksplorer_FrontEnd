import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link,Redirect,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from "../App/homepage/navbar/login";
import Homepage from './homepage/index';
import Register from './homepage/navbar/register';
import Sellbook from './homepage/navbar/sellbook';

class App extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
          
          <Route exact path="/login" component={Login}/>
          <Route exact path="/homepage" component={Homepage}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/sellbook" component={Sellbook}/>
          <Redirect to="/homepage" component={Homepage}/>
        </Switch>
        </Router>
      );
    }
  }
  export default App;