import React, { Component } from 'react'

export default class ItemNew extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (

      <div className="contactus-1" >
        <div className="container">
          <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
              <div className="card card-plain card-contact no-transition">
                <h3 className="card-title">Add New Item!</h3>
                <div className="row">

                  <div className="col-md-5 mr-auto">
                    <form role="form" action="http://localhost:8000/items/create" method="post">
                      <div className="form-group label-floating">
                        <label className="control-label">Item Name</label>
                        <input name="name" type="text" className="form-control" placeholder="Name"/>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Place Name</label>
                        <input name="place_name" type="text" className="form-control" placeholder="Place Name"/>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Latitude</label>
                        <input name="lat" type="number" className="form-control" placeholder="Latitude"/>
                      </div>
                      <div className="form-group label-floating">
                        <label className="control-label">Longitude</label>
                        <input name="long" type="number" className="form-control" placeholder="Longitude"/>
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};
