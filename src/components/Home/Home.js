import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import testData from '../../testData.js';
import ContestCard from '../Contests/ContestCard';
import LoginBar from '../Misc/LoginBar'
import axios from 'axios';
import paths from '../../paths'
import Fuse from 'fuse.js'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      newContestName: "",
      updatedContests: false
    };
  }

  componentWillMount() {
    axios.get(serverPath + '/contests')
    .then(response => {
      if (response.status === 200) {
        this.setState({contests: response.data, updatedContests: true})
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  drawContests() {
    if (this.state.updatedContests) {
      if (this.state.newContestName === ""){
        return this.state.contests.map((contest, index) => {
          return <ContestCard key={index} name={contest.name} id={contest.id}/>
        })
      } else {
        var options = {
          shouldSort: true,
          tokenize: true,
          findAllMatches: true,
          threshold: 0,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            "name"
          ]
        };
        var fuse = new Fuse(this.state.contests, options); // "list" is the item array
        var result = fuse.search(this.state.newContestName)
        return result.map((contest, index) => {
          return <ContestCard key={index} name={contest.name} id={contest.id}/>
        })
      }
    } else {
      return <a href="#" className="btn btn-round"><div className='uil-reload-css reload-small'><div></div></div> Getting Your Contests</a>
    }
  }

  updateContestName(e) {
    const text = e.target.value
    this.setState({ newContestName: text })
  }

  submitContest() {
    const newName = this.state.newContestName
    const data = { name: newName }
    if (newName) {
      axios.post(serverPath + '/contests/create', data)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.setState({
            contests: [...this.state.contests, response.data.contest],
            newContestName: ""
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }


  render() {

    return (
      <div>

        <LoginBar loggedIn={this.props.loggedIn} {...this.props}/>
        <div className={"main"}>
          <div className={"container"} >
            <div className={"row"}>
              <div className={"col-lg-7"}>
                <div className={"container"}>
                  {this.drawContests()}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="container">
                  <h3>Search/add a new contest...</h3>
                  <div className="form-group">
                    <h6> Name </h6>
                    <input name="name" onChange={this.updateContestName.bind(this)} className="form-control border-input" value={this.state.newContestName} placeholder="Enter the contest name"/>
                  </div>
                  <button onClick={this.submitContest.bind(this)} className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home
