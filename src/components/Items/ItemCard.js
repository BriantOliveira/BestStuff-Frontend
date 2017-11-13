import React, { Component } from 'react'
import axios from 'axios';
import paths from '../../paths'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod


export default class ItemCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      voted: false
    }
  }

  toggleVote() {
    if (this.props.toggled) {
      this.props.voteDown(this.props.index)
    } else {
      this.props.voteUp(this.props.index)
    }
    this.setState({ voted: !this.state.voted })
  }

  voteApiCal() {
    var url;
    if (this.state.voted) {
      url = `${serverPath}/items/${this.props.id}/vote-down`
    } else {
      url = `${serverPath}/items/${this.props.id}/vote-up`
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

      if (!this.props.toggled) {
        return <button type="button" onClick={this.toggleVote.bind(this)} className="btn btn-outline-info btn-just-icon align-middle"><i className="fa fa-heart"></i></button>
      } else {
        return <button type="button" onClick={this.toggleVote.bind(this)} className="btn btn-danger btn-just-icon align-middle"><i className="nc-icon nc-check-2"></i></button>
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
            <div className="col-1 align-middle d-flex flex-column justify-content-center">
              <h5>{this.props.voteCount}</h5>
            </div>
            <div className="col-2 align-middle d-flex flex-column justify-content-center">
              {this.voteButton()}
            </div>

          </div>
        </div>
      )
    }
  }
