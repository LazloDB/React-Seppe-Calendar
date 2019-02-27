import React from 'react';
import { Container } from './Day.style';

class Day extends React.Component {
  render() {
    const { day, routine, isToday, number } = this.props;

    return (
      <Container isFree={routine === 'X'} isToday={isToday}>
        <div>{number}</div>
        <div>{day}</div>
        <div>{routine}</div>
      </Container>
    );
  }
}

export default Day;
