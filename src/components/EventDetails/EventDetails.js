import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, BackArrow } from './EventDetails.style';

class EventDetails extends Component {
  render() {
    const { location: { state : { events }} } = this.props;
    console.info(events);
    return (
        <Header>
          <Link to="/">
            <BackArrow className="fas fa-arrow-left" />
          </Link>
          Details
        </Header>
    );
  }
}

export default EventDetails;
