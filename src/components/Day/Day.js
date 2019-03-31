import React from 'react';
import { Container, IndicatorWrapper } from './Day.style';
import EventIndicator from '../EventIndicator';

const renderIndicators = events => {
  return events.map(event => (
    <EventIndicator key={event.name + event.type} type={event.type} />
  ));
};

const getSortedShiftEvents = events => {
  const shiftEvents = events.filter(event => event.type === 'Shift');
  return shiftEvents.sort((a, b) => b.uploadDate.seconds - a.uploadDate.seconds);
};

const Day = ({ day, routine, isToday, number, events }) => {
  const shiftEvents = getSortedShiftEvents(events);
  routine = shiftEvents.length > 0 ? shiftEvents[shiftEvents.length - 1].name : routine;

  return (
    <Container isFree={routine === 'X'} isToday={isToday} type={events}>
      <IndicatorWrapper>{renderIndicators(events)}</IndicatorWrapper>

      <div>{number}</div>
      <div>{day}</div>
      <div>{routine}</div>
    </Container>
  );
};

export default Day;
