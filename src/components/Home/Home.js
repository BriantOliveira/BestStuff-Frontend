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
              <div className="col-md-5 col-sm-5">
                <div className="container">
                  <div className="card card-plain">
                    <h3>Add a new contest...</h3>
                    <form role="form" action="http://localhost:8000/contests/create" method="post">
                      <div className="form-group">
                        <h6> Name </h6>
                        <input name="name" className="form-control border-input" placeholder="Enter the item name"/>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

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
