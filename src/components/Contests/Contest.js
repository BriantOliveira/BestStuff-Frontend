import React, { Component } from 'react'
import testData from '../../testData.js';
import MapContainer from '../Misc/MapContainer';
import ItemCard from '../Items/ItemCard';
import ItemNew from '../Items/ItemNew';
import LoginBar from '../Misc/LoginBar';
import axios from 'axios';

const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";
const PLACES = "AIzaSyCh4He2DUJ9cCgC6kl31vAmpSH2cqGq0r4";


export default class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {
      contest: {
        name: "",
        id: this.props.match.params.id,
        items: []
      }
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    const url = `http://localhost:8000/contests/${this.props.match.params.id}`
    axios.get(url)
    .then(response => {
      if (response.status === 200) {
        this.setState({contest: response.data})
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  findContestById(contests, id) {
    const result = contests.filter(contest => {
      return contest.id === id
    })

    // Should only return 1 result
    return result[0]
  }

  drawContests(items) {
    return items.map((item, index) => {
      return <ItemCard key={index} loc={item.place_name} name={item.name}/>
    })
  }


  displayModal() {
    return (
      <ItemNew contestId={this.props.match.params.id} dismissAction={() => {this.fetchData()}}/>
    )
  }

  render() {
    var contestId = this.props.match.params.id;
    var contest = this.state.contest
    return (
      <div>
        <LoginBar loggedIn={this.props.loggedIn} />
        <div className="container">
          {this.displayModal()}
          <h1 className="title">{contest.name}</h1>
          <div className="row" >
            <div className="col-lg-7">

              <button className="btn btn-primary btn-lg btn-sm" data-toggle="modal" data-target="#myModal"><i className="nc-icon nc-simple-add"></i>Enroll/Add New Item to this Contest</button>
              <br />
              {this.drawContests(this.state.contest.items)}

            </div>
            <div className="col-lg-5 mr-auto" style={{height:'600px'}} >
              <MapContainer lng={contest.lng} lat={contest.lat}/>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
