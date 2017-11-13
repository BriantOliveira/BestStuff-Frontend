import React, { Component } from 'react';
import axios from 'axios';
import paths from '../../paths'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod


export default class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      isError: false
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

  clearAll() {
    this.setState({username: "", password: ""})
  }

  submitNewUser(e) {
    e.preventDefault
    console.log("Here is the event....", e.target)

    const name = this.state.username
    const pass = this.state.password
    const data = { username: name, password: pass }
    if (name && pass) {
      axios.post(serverPath + '/login', data)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.props.setLoggedIn(true)
          this.props.history.goBack()
          this.setState({error: "", isError: false})

        }
      })
      .catch(err => {
        console.log("Got an Error from submitNewUser() ", err)
        this.setState({error: err.message, isError: true})
      })
    }
  }

  render() {
    return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="loginModalLabel">LogIn</h4>
            </div>
            <div className="modal-body">
              <div className="col-md-12">
                <p>{this.state.error}</p>
                <div className="form-group label-floating">
                  <label className="control-label">Username</label>
                  <input name="username" type="username" onChange={this.updateUsername.bind(this)} className="form-control border-input" value={this.state.username} placeholder="Username"/>
                </div>
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <input name="password" type="password" onChange={this.updatePassword.bind(this)} className="form-control border-input" value={this.state.password} placeholder="Password"/>
                  {/*name="place_name"  type="text"  placeholder="Place Name" */}
                </div>



              </div>
            </div>
            <div className="modal-footer">
              <div className="left-side">
                <button type="button" onClick={this.clearAll.bind(this)} className="btn btn-default btn-link">Clear Data</button>
              </div>
              <div className="divider"></div>
              <div className="right-side">
                <button type="button" onClick={(e) => this.submitNewUser(e)} className="btn btn-success btn-link" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
