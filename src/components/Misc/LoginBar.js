import React, { Component } from 'react';
import axios from 'axios';

export default class LoginBar extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    axios.get('http://localhost:8000/logout');
    this.props.history.push('/');
    this.props.setLoggedIn(false)
  }


  render() {

    let loginLogout = null;
    let signUp = null;
    if (this.props.loggedIn) {
      loginLogout = <button className={"btn btn-primary"} onClick={this.logout.bind(this)}> Logout </button>
    } else {
      loginLogout = <button className={"btn btn-primary"} onClick={() => {this.props.history.push('/login')}}> Login </button>
      signUp = <button className={"btn btn-primary"} onClick={() => {this.props.history.push('/signup')}}> Sign Up </button>
    }

    return(
      <div className={"navbar"}>
        <div className={"container"}>
          {loginLogout}
          {signUp}
        </div>
      </div>
    );
  }
}
