import React, { Component } from 'react'
import testData from '../../testData.js';
import MapContainer from '../Misc/MapContainer';
import ItemCard from '../Items/ItemCard';
import ItemNew from '../Items/ItemNew';
import LoginBar from '../Misc/LoginBar';
import axios from 'axios';
import paths from '../../paths'
import _ from 'lodash'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod

export default class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {
      contest: {
        name: "",
        id: this.props.match.params.id,
        items: []
      },
      centerLat:0,
      centerLng:0,
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    const url = `${serverPath}/contests/${this.props.match.params.id}`
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

  voteUp(index) {
    const newItems = _.cloneDeep(this.state.contest.items)
    newItems[index].voteCount++
    newItems[index].toggled = true
    this.setState({contest: {
      items: newItems
    }})
  }

  voteDown(index) {
    const newItems = _.cloneDeep(this.state.contest.items)
    newItems[index].voteCount--
    newItems[index].toggled = false
    this.setState({contest: {
      items: newItems
    }})
  }

  drawContests(items) {
    return items.sort((a, b) => {
      return b.voteCount - a.voteCount
    }).map((item, index) => {
      return (
        <ItemCard
        key={index}
        index={index}
        loc={item.place_name}
        name={item.name}
        id={item.id}
        toggled={(item.toggled ? item.toggled : false)}
        voteCount={item.voteCount}
        loggedIn={this.props.loggedIn}
        voteUp={this.voteUp.bind(this)}
        voteDown={this.voteDown.bind(this)}/>)
      })
    }


    displayModal() {
      return (
        <ItemNew contestId={this.props.match.params.id} dismissAction={() => {this.fetchData()}}/>
      )
    }

    getCenterPosition() {
      // re-initialize
      this.setState({
        centerLng:0,
        centerLat:0
      })
      this.state.contest.items.map((item) => {
        this.setState({
          centerLng:(this.state.centerLng + item.long),
          centerLat:(this.state.centerLat + item.lat)
        })
      })
      this.setState({
        centerLng:(this.state.centerLng / this.state.contest.items.length),
        centerLat:(this.state.centerLat / this.state.contest.items.length)
      })
      return {
        lat: this.state.centerLat,
        lng: this.state.centerLng
      }
    }

    render() {
      var contestId = this.props.match.params.id;
      var contest = this.state.contest
      return (
        <div>
          <LoginBar loggedIn={this.props.loggedIn} {...this.props} />
          <div className="container">
            {this.displayModal()}
            <h1 className="title">{contest.name}</h1>
            <div className="row" >
            <div className="col-lg-7">

            <button className="btn btn-primary btn-lg btn-sm" data-toggle="modal" data-target="#myModal"><i className="nc-icon nc-simple-add"></i> New Item</button>
            <br />
            {this.drawContests(this.state.contest.items)}

          </div>
          <div className="col-lg-5 mr-auto" style={{height:'600px'}} >
            <MapContainer lng={contest.lng} lat={contest.lat} items={this.state.contest.items}/>
          </div>
        </div>
        </div>
        </div>


      )
    }
  }
