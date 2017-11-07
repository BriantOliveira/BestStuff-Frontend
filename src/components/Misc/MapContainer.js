import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";
const PLACES = "AIzaSyCh4He2DUJ9cCgC6kl31vAmpSH2cqGq0r4";

export class MapContainer extends Component {
  render() {
    if (!this.props.loaded) {
      return <div> Loading... </div>
    }
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
