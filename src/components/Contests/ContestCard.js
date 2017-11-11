import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ContestCard extends Component {

  render () {
    return (
      <Link to={{ pathname: `/contests/${this.props.id}`, query: { contestId: this.props.id } }  } >
        <div className="card card-contact" data-background="color" data-color="green" data-radius="10">
          <div className="card-block">
            <h3 className="card-title"> {this.props.name} </h3>
          </div>
        </div>
      </Link>
    )
  }
}
