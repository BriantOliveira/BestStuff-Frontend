import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
const MAPS = "AIzaSyAD0CS7T_DtdpNuqcin9DtX79brSndlI6U";

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
