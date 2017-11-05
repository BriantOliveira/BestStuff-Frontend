import React, { Component } from 'react'

export default class ItemNew extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="col-md-4">
            <form action="/items/create" >
              <div class="form-group">
                <input name="name" type="text" class="form-control" placeholder="Item Name"/>
              </div>
              <div class="form-group">
                <input name="place_name" type="text" class="form-control" placeholder="Place Name"/>
              </div>
              <div class="form-group">
                <input name="lat" type="text" class="form-control" placeholder="Latitude"/>
              </div>
              <div class="form-group">
                <input name="long" type="text" class="form-control" placeholder="Longitude"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
};
