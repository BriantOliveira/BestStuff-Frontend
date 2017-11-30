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

      <div class="fileinput fileinput-new text-center" data-provides="fileinput">
        <div class="fileinput-new thumbnail img-circle img-no-padding" style="width: 150px; height: 150px;">
          <img src="../assets/img/placeholder.jpg" alt="...">
          </div>
          <div class="fileinput-preview fileinput-exists thumbnail img-circle img-no-padding" style="max-width: 150px; max-height: 150px;"></div>
          <div>
            <span class="btn btn-default btn-file btn-round"><span class="fileinput-new">Add Photo</span><span class="fileinput-exists">Change</span>
            <input type="file" name="photoUpload">
            </span>
            <br />
            <a href="#" class="btn btn-link btn-danger fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
          </div>
        </div>

      );
    }
  };
