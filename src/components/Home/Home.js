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
    console.log('Loading stuff at home page thing Tassos...');
    fetch('/category').then((res)=>{
      return res.text();
    }).then((text)=>{
      console.log(text);
    }).catch((err)=>{
      console.log(err.message);
    })
  }

  getAllContests() {
    // TODO: replace local test variable w/ fetch call to backend
    return testData.contests.map((contest, index) => {
      return <ContestCard key={index} name={contest.name} id={contest.id}/>
    })
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className="page-title">BestStuff</h1>
        {this.getAllContests()}
      </div>
    );
  }
};

export default Home
