import React, { Component } from 'react'
import axios from 'axios';


export default class ItemCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      voted: false
    }
  }

  toggleVote() {
    this.setState({ voted: !this.state.voted })
    var url;
    if (this.state.voted) {
      url = `http://localhost:8000/items/${this.props.id}/vote-down`
    } else {
      url = `http://localhost:8000/items/${this.props.id}/vote-up`
    }
    axios.post(url)
    .then(response => {
      if (response.status === 200) {
        console.log('Successfully voted!');
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  voteButton() {
    switch (this.state.voted) {
      case true:
      return <button type="button" disabled={!this.props.loggedIn} onClick={this.toggleVote.bind(this)} className="btn btn-danger btn-just-icon align-middle"><i className="nc-icon nc-check-2"></i></button>
      case false:
      return <button type="button" disabled={!this.props.loggedIn} onClick={this.toggleVote.bind(this)} className="btn btn-outline-info btn-just-icon align-middle"><i className="fa fa-heart"></i></button>
    }
  }

  render() {
    return(

      <div className="card no-transition">
        <div className="row">
          <div className="col-9">
            <div className="card-body" style={{padding:10}}>

              <h3 className="card-title">
                {this.props.name}
              </h3>
              <p className="author">{this.props.loc}</p></div>
            </div>
            <div className="col-2 align-middle d-flex flex-column justify-content-center">
              {this.voteButton()}
            </div>
          </div>
        </div>



      )
    }
  }
