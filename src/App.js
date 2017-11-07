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

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  setLoggedIn(isLoggedIn) {
    this.setState({
      loggedIn: isLoggedIn
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" isLoggedIn = {this.state.loggedIn} component={Home}/>
          <Route path="/contests/:id" component={Contest}/>
          <Route path="/items/new" component={ItemNew}/>
          <Route path="/signup" setLoggedIn = {this.setLoggedIn.bind(this)} component={SignUp} />
          <Route path="/login" setLoggedIn = {this.setLoggedIn.bind(this)} component={LogIn} />
        </div>
      </Router>
    )
  }
}

export default App;
