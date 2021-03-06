import React, { Component } from 'react';
import axios from 'axios';
import paths from '../../paths'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }

  updateUsername(e) {
    const text = e.target.value
    this.setState({ username: text })
  }

  updatePassword(e) {
    const text = e.target.value
    this.setState({ password: text })
  }

  submitNewUser() {
    const name = this.state.username
    const pass = this.state.password
    const data = { username: name, password: pass }
    if (name && pass) {
      axios.post(serverPath + '/users/create', data)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.setState({
            loggedIn: true
          })
          this.props.setLoggedIn(true)
        }
      })
      .catch(err => {
        console.log(err)
      }).then(() => {
        this.props.history.push('/')
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Sign Up</h3>
        <div className="form-group">
          <h6> Name </h6>
          <input name="name" onChange={this.updateUsername.bind(this)} className="form-control border-input" value={this.state.username} placeholder="Username"/>
          <h6> Password </h6>
          <input name="password" type="password" onChange={this.updatePassword.bind(this)} className="form-control border-input" value={this.state.password} placeholder="Password"/>
        </div>
        <button onClick={this.submitNewUser.bind(this)} className="btn btn-primary">Submit</button>
      </div>
    );
  }
}
