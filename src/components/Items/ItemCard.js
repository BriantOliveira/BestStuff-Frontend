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
    if (this.props.loggedIn){
      if (!this.props.toggled) {
        return <button type="button" onClick={this.toggleVote.bind(this)} className="btn btn-outline-info btn-just-icon align-middle"><i className="fa fa-heart"></i></button>
      } else {
        return <button type="button" onClick={this.toggleVote.bind(this)} className="btn btn-danger btn-just-icon align-middle"><i className="nc-icon nc-check-2"></i></button>
      }
    } else {
      return <button type="button" className="btn btn-outline-default btn-just-icon align-middle" data-toggle="tooltip" data-placement="bottom" title="Please login to vote"><i className="fa fa-heart"></i></button>
    }
  }

  render() {

    const progressNum = (this.props.voteCount/this.props.highestVote)*10

    if (this.props.champion) {
      console.log("progressNum: ", progressNum)
      return (
        <div className="card card-just-text champion" data-background="color" data-color="yellow" >
          <div className="row">
            <div className="col-8">
              <div className="champion card-body" style={{padding:10}}>
                <div className="champion description">
                  <h6 className="card-category champion">Current Champion</h6>
                  <h3 className="card-title champion">
                    <i className="nc-icon nc-trophy champion"></i> {this.props.name}
                    </h3>
                    <p className="author" style={{color: `#000`}}>{this.props.loc}</p>

                  </div>
                </div>
              </div>

              <div className="col-2 align-middle d-flex flex-column justify-content-center">
                <h6 style={{textAlign: 'center'}}>Votes</h6><br/>


                <h5 style={{textAlign: 'center'}}>{this.props.voteCount}</h5>


              </div>
              <div className="col-1 align-middle d-flex flex-column justify-content-center" >
                {this.voteButton()}
              </div>
              {console.log(`highestVote for item ${this.props.id} :`,this.props.highestVote)}
              <div className="col-12">
                <div className="progress">
                  <div className="progress-bar progress-bar-primary" role="progressbar" style={{width: `${(this.props.voteCount/this.props.highestVote)*100}%`}} aria-valuenow={(this.props.voteCount/this.props.highestVote)*100} aria-valuemin="0" aria-valuemax="100"></div>
                </div><br/>
              </div>

            </div>
          </div>
        )
      } else {
        return (
          <div className="card no-transition">
            <div className="row">
              <div className="col-8">
                <div className="card-body" style={{padding:10}}>

                  <h3 className="card-title">
                    {this.props.name}
                  </h3>
                  <p className="author">{this.props.loc}</p></div>
                </div>
                <div className="col-2 align-middle d-flex flex-column justify-content-center">
                  <h6 style={{textAlign: 'center'}}>Votes</h6><br/>


                  <h5 style={{textAlign: 'center'}}>{this.props.voteCount}</h5>

                </div>
                <div className="col-2 align-middle d-flex flex-column justify-content-center" >
                  {this.voteButton()}
                </div>
                <div className="col-12">
                  <div className="progress">
                    <div className="progress-bar progress-bar-primary" role="progressbar" style={{width: `${(this.props.voteCount/this.props.highestVote)*100}%`}} aria-valuenow={(this.props.voteCount/this.props.highestVote)*100} aria-valuemin="0" aria-valuemax="100"></div>
                  </div><br/>
                </div>

              </div>
            </div>
          )
        }
      }
    }
