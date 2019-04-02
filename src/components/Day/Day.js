import React from 'react';
import { Container, IndicatorWrapper } from './Day.style';
import EventIndicator from '../EventIndicator';

const renderIndicators = events => {
  return events.map(event => (
    <EventIndicator key={event.name + event.type} type={event.type} />
  ));
};

const getShiftEvents = events => {
  return events.filter(event => event.type === 'Shift');
};

const Day = ({ day, routine, isToday, number, events }) => {
  const shiftEvents = getShiftEvents(events);
  routine =
    shiftEvents.length > 0 ? shiftEvents[shiftEvents.length - 1].name : routine;

  return (
    <Container isFree={routine === 'X'} isToday={isToday}>
      <IndicatorWrapper>{renderIndicators(events)}</IndicatorWrapper>

      <div>{number}</div>
      <div>{day}</div>
      <div>{routine}</div>
    </Container>
  );
};

export default Day;
