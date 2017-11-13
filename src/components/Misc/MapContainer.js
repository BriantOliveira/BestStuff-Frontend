import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
const MAPS = "AIzaSyAD0CS7T_DtdpNuqcin9DtX79brSndlI6U";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.getCenterPosition = this.getCenterPosition.bind(this);
    this.state={
      center: {
        lat: 37.7749,
        lng: -122.4194
      }
    }
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

  getCenterPosition() {
    // re-initialize
    var centerLng = 0;
    var centerLat = 0;
    var numItems = 0;
    this.props.items.map((item) => {
      centerLng += parseFloat(item.long);
      centerLat += parseFloat(item.lat);
      numItems += 1;
    })
    console.log(centerLat);
    console.log(centerLat / numItems)
    if (numItems > 0) {
      return {
        lat: (centerLat / numItems),
        lng: (centerLng / numItems)
      }
    } else {
      return {
        lat: 37.7749,
        lng: -122.4194
      }
    }
  }

  render() {
    if (!this.props.loaded) {
      return <div> Loading... </div>
    }
    var theCenter = this.getCenterPosition();
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={theCenter}
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
