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

    fetch('https://localhost:8000/contests').then((res) => {
      console.log(res);
      return res.json();
    }).then((text) => {
      console.log(text);
      return testData.contests.map((contest, index) => {
        return <ContestCard key={index} name={contest.name} id={contest.id}/>
      }).catch((err) => {
        console.error(err);
      })
    });
  }

  render() {
    return (
      <div className={"main"}>
      <div className={"container"} >
        <h1 style={{padding:20}}> Best Stuff </h1>
        <div className={"row"}>
          <div className={"col-md-7 col-sm-7"}>
            <div className={"container"}>
              {this.getAllContests()}
            </div>
          </div>
          <div className={"col-md-5 col-sm-5"}>
            <div className={"container"}>
              <form>
                <div className={"form-group"}>
                  <h6> Name </h6>
                  <input className={"form-control border-input"} placeholder="Enter the item name"/>
                </div>
                <div className={"form-group"}>
                  <h6> Location Name </h6>
                  <input className={"form-control border-input"} placeholder="Search for a restaurant"/>
                </div>
                <div className={"form-group"}>
                  <h6> Latitude </h6>
                  <input className={"form-control border-input"} placeholder="Enter Longitude (temporary)"/>
                </div>
                <div className={"form-group"}>
                  <h6> Longitude </h6>
                  <input className={"form-control border-input"} placeholder="Enter Longitude (temporary)"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

  export default Home
