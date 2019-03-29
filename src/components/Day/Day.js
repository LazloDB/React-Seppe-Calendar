import React from 'react';
import { Container } from './Day.style';

const Day = ({ day, routine, isToday, number, events }) => {
  return (
    <Container isFree={routine === 'X'} isToday={isToday} type={events}>
      <div>{number}</div>
      <div>{day}</div>
      <div>{routine}</div>
    </Container>
  );
};

export default Day;
