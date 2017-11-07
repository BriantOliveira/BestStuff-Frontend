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
    this.setLoggedIn = this.setLoggedIn.bind(this)
  }

  setLoggedIn(isLoggedIn) {
    console.log("set logged in running")
    this.setState({
      loggedIn: isLoggedIn
    })
  }

  render() {

    const RenderHome = (props) => {
      return(
        <Home loggedIn = {this.state.loggedIn} setLoggedIn = {this.setLoggedIn} {...props} />
      )
    }

    const RenderLogIn = (props) => {
      return(
        <LogIn setLoggedIn = {this.setLoggedIn} {...props} />
      )
    }

    const RenderSignUp = (props) => {
      return(
        <SignUp setLoggedIn = {this.setLoggedIn} {...props} />
      )
    }

    return (
      <Router>
        <div>
          <Route exact path="/" render={RenderHome}/>
          <Route path="/contests/:id" component={Contest}/>
          <Route path="/items/new" component={ItemNew}/>
          <Route path="/signup"  render={RenderSignUp} />
          <Route path="/login" render={RenderLogIn} />
        </div>
      </Router>
    )
  }
}

export default App;
