import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import paths from '../../paths'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod

export default class LoginBar extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    axios.get(serverPath + '/logout');
    this.props.history.goBack();
    this.props.setLoggedIn(false)
  }


  render() {

    let loginLogout = null;
    let signUp = null;
    if (this.props.loggedIn) {
      loginLogout = <button className={"btn btn-primary btn-sm"} data-toggle="modal" data-target="#loginModal" onClick={this.logout.bind(this)}> Logout </button>
    } else {
      loginLogout = <button className={"btn btn-primary btn-sm"} data-toggle="modal" data-target="#loginModal" onClick={() => {this.props.history.push('/login')}}> Login </button>
      signUp = <button className={"btn btn-primary btn-sm"} onClick={() => {this.props.history.push('/signup')}}> Sign Up </button>
    }

    return(
      <div className={"navbar"} style={{marginBottom:20, paddingBottom:20}}>
        <div className={"container"}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Link to="/" >
            <h1> Best Stuff </h1>
            </Link>
            <div style={{display:'flex', justifyContent:'center'}}>
              {loginLogout}
              {signUp}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
