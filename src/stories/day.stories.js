import React from 'react';
import { storiesOf } from '@storybook/react';
import Day from '../components/Day/';

const day = {
  date: '21-04-2019',
  day: 'Sunday',
  dayInYear: '021',
  inMonth: true,
  number: '21',
  routine: 'X',
};

storiesOf('Day', module).add('no events', () => (
  <Day
    day={day.day}
    number={day.number}
    routine={day.routine}
    isToday={false}
    events={[]}
  />
));
