import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import testData from '../../testData.js';
import ContestCard from '../Contests/ContestCard';
import LoginBar from '../Misc/LoginBar'
import axios from 'axios';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      newContestName: "",
    };
  }

  componentWillMount() {
    axios.get('http://localhost:8000/contests')
    .then(response => {
      if (response.status === 200) {
        console.log(response)
        this.setState({contests: response.data})
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  drawContests() {
    return this.state.contests.map((contest, index) => {
      return <ContestCard key={index} name={contest.name} id={contest.id}/>
    })
  }

  updateContestName(e) {
    const text = e.target.value
    this.setState({ newContestName: text })
  }

  submitContest() {
    const newName = this.state.newContestName
    const data = { name: newName }
    if (newName) {
      axios.post('http://localhost:8000/contests/create', data)
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
                <h3>Add a new contest...</h3>
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
