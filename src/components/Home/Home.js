import React, { Component } from 'react'
import styles from "./home.css";
import { Link } from 'react-router';
import testData from '../../testData.js';
import ContestCard from '../Contests/ContestCard';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
{ /*
    fetch('https://localhost:8000/contests').then((res)=>{
      return res.text();
    }).then((text)=>{
      console.log(text);
    }).catch((err)=>{
      console.log(err.message);
    })
*/}
  }

  getAllContests() {
    // TODO: replace local test variable w/ fetch call to backend
    return testData.contests.map((contest, index) => {
      console.log()
      return <ContestCard key={index} name={contest.name} id={contest.id}/>
    })
  }

  render() {
    return (
      <div className={"container"} >
        <div className={"row"}>
          <div className={"col-md-5 col-sm-5"}>
            {this.getAllContests()}
          </div>
          <div className={"col-md-7 col-sm-7"}>
            <form>
              <div className={"form-group"}>
                <input />
              </div>
              <div className={"form-group"}>
                <input />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Home
