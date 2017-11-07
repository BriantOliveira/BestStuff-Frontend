import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ContestCard extends Component {

  render () {
    return (
      <Link to={{ pathname: `/contests/${this.props.id}`, query: { contestId: this.props.id } }  } className="card card-contact" data-background="color" data-color="orange" data-radius="none">
        <div className="card-block">
          <h3 className="card-title"> {this.props.name} </h3>
        </div>
      </Link>
    )
  }
}
