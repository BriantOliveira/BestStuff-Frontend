import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home/Home'
import Contest from './components/Contests/Contest'
import ItemNew from './components/Items/ItemNew'
import LogIn from './components/Misc/LogIn'
import SignUp from './components/Misc/SignUp'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/contests/:id" component={Contest}/>
          <Route path="/items/new" component={ItemNew}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </div>
      </Router>
    )
  }
}

export default App;
