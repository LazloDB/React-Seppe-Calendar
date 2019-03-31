import React from 'react';
import { eventTypes } from '../../assets/eventTypes';
import { Container, Indicator, Name } from './EventDetail.style';

const EventDetail = ({type, name}) => {
    return (
        <Container>
            <Indicator type={eventTypes[type]} />
            <Name>{name}</Name>
        </Container>
    )
}

export default EventDetail;
