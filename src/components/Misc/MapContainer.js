import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
const MAPS = "AIzaSyAD0CS7T_DtdpNuqcin9DtX79brSndlI6U";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  displayMarkers() {
    console.log("received locations:");
    console.log(this.props.items);
    var items = this.props.items;
    return items.map((item, index) => {
      return <Marker
        title={item.name}
        name={item.place_name}
        position={{lat:item.lat, lng: item.long}}
        key={index}
      />
    })
  }

  render() {
    if (!this.props.loaded) {
      return <div> Loading... </div>
    }
    this.displayMarkers()
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={this.props.center}
        >
        {this.displayMarkers()}
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
