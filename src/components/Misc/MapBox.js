import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Vla2xhbWIiLCJhIjoiY2o5ejJjaWxpMWU2YzJ3cXJ6cDEzaWYzMCJ9.QdeSvqJLiUoLXo_SzWp7zw';
var map = new mapboxgl.Map({
  container: 'MapBox',
  style: 'mapbox://styles/mapbox/streets-v10'
});

export default class MapBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-6">
      </div>
    )
  }
}
