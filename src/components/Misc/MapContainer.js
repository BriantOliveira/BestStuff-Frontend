import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  displayMarkers() {
    console.log("received locations:");
    console.log(this.props.items);
  }

  render() {
    if (!this.props.loaded) {
      return <div> Loading... </div>
    }
    this.displayMarkers()
    return (
      <Map
        google={this.props.google}
        zoom={15}
        >
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Map</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS
})(MapContainer)
