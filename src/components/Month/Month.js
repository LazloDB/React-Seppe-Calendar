import React from 'react';
import { Container, Header, BackArrow, NextArrow, Body } from './Month.style';
import Day from '../Day';

class Month extends React.Component {
  monthRef = React.createRef();

  handleChange = type => {
    const { changeMonth } = this.props;

    this.monthRef.current.scrollTop = 0;
    changeMonth(type);
  };

  render() {
    const { days, today, month, year } = this.props;

    return (
      <Container>
        <Header>
          <BackArrow
            onClick={() => this.handleChange('previous')}
            className="fas fa-arrow-left"
          />
          {`${month} ${year}`}
          <NextArrow
            onClick={() => this.handleChange('next')}
            className="fas fa-arrow-right"
          />
        </Header>

        <Body ref={this.monthRef}>
          {days.map(day => (
            <Day
              key={`${day.number+day.dayInYear+day.inMonth} `}
              day={day.day}
              number={day.number}
              routine={day.routine}
              isToday={day.dayInYear === today}
            />
          ))}
        </Body>
      </Container>
    );
  }
}

export default Month;
