import React from 'react';
import { Container } from './Day.style';

const Day = ({ day, routine, isToday, number }) => {
  return (
    <Container isFree={routine === 'X'} isToday={isToday}>
      <div>{number}</div>
      <div>{day}</div>
      <div>{routine}</div>
    </Container>
  );
};

export default Day;
