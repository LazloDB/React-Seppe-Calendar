import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventDetail from '../EventDetail';
import { Header, BackArrow, DetailContainer } from './EventDetails.style';

class EventDetails extends Component {
  render() {
    const { location: { state : { events }} } = this.props;

    return (
        <div>
          <Header>
            <Link to="/">
              <BackArrow className="fas fa-arrow-left" />
            </Link>
            Details
          </Header>
          <DetailContainer>
            { events.map((event) => <EventDetail key={event.type + event.uploadDate} type={event.type} name={event.name} />) }
          </DetailContainer>
        </div>
    );
  }
}

export default EventDetails;
