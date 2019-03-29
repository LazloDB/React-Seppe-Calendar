import React from 'react';
import { Container, IndicatorWrapper } from './Day.style';
import EventIndicator from '../EventIndicator';

const renderIndicators = events => {
  return events.map(event => (
    <EventIndicator key={event.name + event.type} type={event.type} />
  ));
};

const Day = ({ day, routine, isToday, number, events }) => {
  const displayType = events.length === 1 ? events[0].type : routine;

  return (
    <Container isFree={routine === 'X'} isToday={isToday} type={events}>
      <IndicatorWrapper>{renderIndicators(events)}</IndicatorWrapper>

      <div>{number}</div>
      <div>{day}</div>
      <div>{displayType}</div>
    </Container>
  );
};

export default Day;
