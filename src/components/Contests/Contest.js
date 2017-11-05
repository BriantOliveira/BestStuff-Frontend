import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import testData from '../../testData.js';
import MapContainer from '../Misc/MapContainer';

const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";
const PLACES = "AIzaSyCh4He2DUJ9cCgC6kl31vAmpSH2cqGq0r4";

class ItemCard extends Component {
  render() {
    return(
      <div className="card" style={{paddingLeft:40, paddingBottom:20}}>
        <h2 className="card-title"> {this.props.name} </h2>
        <p> {this.props.loc} </p>
      </div>
    );
  }
}

export default class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    console.log(this.props.params.contestId)
  }

  findContestById(contests, id) {
    for (let i = 0; i < contests.length; i++) {
      console.log(contests[i]);
      if (contests[i].id === id) {
        return contests[i];
      }
    }
  }

  getItemsInContest(items) {
    return items.map((item, index) => {
      return <ItemCard key={index} loc={item.loc} name={item.name}/>
    })
  }

  render() {
    var contestId = this.props.params.id;
    console.log(this.props.params.id)
    var contest = this.findContestById(testData.contests, contestId);
    return (
      <div className="features-3">
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <h2 className="title">{contest.name}</h2>
              {this.getItemsInContest(contest.items)}
              <a href="/items/new" className="btn btn-primary btn-lg active" role="button"><i className="fa fa-heart"></i> Add New Item</a>

            </div>

          </div>
          <div className="col-md-5 ml-auto">

            <MapContainer lng={contest.lng} lat={contest.lat}/>
          </div>
        </div>
      </div>


    )
  }
}
