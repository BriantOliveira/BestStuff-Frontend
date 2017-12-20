import React, { Component } from 'react';
import axios from 'axios';
import Geosuggest from 'react-geosuggest'
import styles from './geosuggest.css'
import paths from '../../paths'
const serverPath = (process.env.NODE_ENV === 'development') ? paths.dev : paths.prod

export default class ItemNew extends Component{

  constructor(props) {
    super(props)
    this.state = {
      itemName: "",
      placeName: "",
      placeId: "",
      lat: "",
      long: "",
      contestId: this.props.contestId
    }
  }


  sendData(e) {
    const data = {
      name: this.state.itemName,
      place_name: this.state.placeName,
      place_id: this.state.placeId,
      lat: this.state.lat,
      long: this.state.long,
      contestId: this.props.contestId,
      voteCount: 0
    }

    const url = `${serverPath}/items/create`

    axios.post(url, data)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        this.props.dismissAction()
      }
    })
    .catch(err => {
      console.log(err)
    })

  }

  changeName(event) {
    const itemName = event.target.value
    this.setState({ itemName })
  }

  changePlace(event) {
    const placeName = event.target.value
    this.setState({ placeName: placeName })
  }

  clearAll(event) {
    this.setState({itemName: "", placeName: ""})
  }

  onSuggestSelect(suggest) {
    if (suggest) {this.setState({
      placeName: suggest.description,
      placeId: suggest.placeId,
      lat: suggest.location.lat,
      long: suggest.location.lng
    })}
  }

  render() {
    return (

      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">Add a New Item!</h4>
            </div>
            <div className="modal-body">

              <div className="col-md-12">
                <div className="form-group label-floating">
                  <label className="control-label">Item Name</label>
                  <input name="name" onChange={this.changeName.bind(this)} type="text" value={this.state.itemName} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <label className="control-label">Place Name</label>
                  <Geosuggest onKeyPress={this.changePlace.bind(this)} value={this.state.placeName} onSuggestSelect={this.onSuggestSelect.bind(this)}  />
                  {/*name="place_name"  type="text"  placeholder="Place Name" */}
                </div>
              </div>
              <div className="modal-footer">
                <div className="left-side">
                  <button type="button" onClick={this.clearAll.bind(this)} className="btn btn-default btn-link">Clear Data</button>
                </div>
                <div className="divider"></div>
                <div className="right-side">
                  <button type="button" onClick={this.sendData.bind(this)} className="btn btn-success btn-link" data-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      );
    }
  };
