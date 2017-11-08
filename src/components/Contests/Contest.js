import React, { Component } from 'react'
import testData from '../../testData.js';
import MapContainer from '../Misc/MapContainer';
import ItemNew from '../Items/ItemNew';
import axios from 'axios';

const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";
const PLACES = "AIzaSyCh4He2DUJ9cCgC6kl31vAmpSH2cqGq0r4";

class ItemCard extends Component {
  render() {
    return(
      <div className="card-plain" style={{paddingLeft:40, paddingBottom:20}}>
        <h2 className="card-title"> {this.props.name} </h2>
        <p className="card-body"> {this.props.loc} </p>
      </div>
    );
  }
}

export default class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {
      contest: {
        name: "",
        id: this.props.match.params.id
      },
      items: []
    }
  }

  componentWillMount() {
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
      return <ItemCard key={index} loc={item.loc} name={item.name}/>
    })
  }


  displayModal() {
      return (
        <ItemNew contestId={this.props.match.params.id}/>
      )
  }

  render() {
    var contestId = this.props.match.params.id;
    var contest = this.state.contest
    console.log(contest)
    return (
      <div className="features-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="container">
              <h1 className="title">{contest.name}</h1>
              <button className="btn btn-primary btn-lg active" data-toggle="modal" data-target="#myModal"><i className="nc-icon nc-simple-add"></i>Enroll/Add New Item to this Contest</button>
              {this.displayModal()}
              {this.drawContests(this.state.items)}
            </div>

          </div>
          <div className="col-lg-6">
            <MapContainer lng={contest.lng} lat={contest.lat}/>
          </div>
        </div>
      </div>


    )
  }
}
