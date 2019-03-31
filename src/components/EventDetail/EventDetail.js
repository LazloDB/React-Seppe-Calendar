import React from 'react';
import { eventTypes } from '../../assets/eventTypes';
import { Container, Indicator, TextWrapper, Name, Type } from './EventDetail.style';

const EventDetail = ({type, name}) => {
    return (
        <Container>
            <Indicator type={eventTypes[type]} />
            <TextWrapper>
                <Name>{name}</Name>
                <Type>{type}</Type>
            </TextWrapper>
        </Container>
    )
}

export default EventDetail;
