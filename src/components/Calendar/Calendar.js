import React, { Component } from 'react';
import firestore from '../Firebase';
import { routine } from '../../assets/schedules/seppe';
import '../../App.css';

import Month from '../Month';

import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
  addDays,
  subDays,
  addMonths,
  subMonths,
  differenceInCalendarDays,
  isSameMonth,
} from 'date-fns';

class Calendar extends Component {
  state = {
    today: new Date(),
    todayFormatted: format(new Date(), 'ddd'),
    monthFormatted: '',
    yearFormatted: '',
    days: [],
    events: [],
  };

  componentDidMount() {
    this.buildMonth();
    this.fetchEvents();
  }

  buildMonth = () => {
    let days = [];
    const { today } = this.state;
    // First day of the month
    const firstDayOfTheMonth = startOfMonth(today);
    // First day of the calendar
    const startOfCalendar = startOfWeek(firstDayOfTheMonth, {
      weekStartsOn: 1,
    });
    // Last day of the calendar
    const endOfCalendar = endOfWeek(endOfMonth(today), {
      weekStartsOn: 1,
    });
    // Difference since 1 jan 2018, which is the day the routine started on.
    const diff = differenceInCalendarDays(
      new Date(firstDayOfTheMonth),
      new Date('2018-01-01'),
    );

    const endCalendarDiff = differenceInCalendarDays(
      new Date(endOfCalendar),
      new Date('2018-01-01'),
    );

    // Start calendar on monday
    if (!isSameMonth(startOfCalendar, today) && window.innerWidth > 767) {
      for (
        let i =
          format(endOfMonth(startOfCalendar), 'd') -
          format(startOfCalendar, 'd') +
          1;
        i > 0;
        i--
      ) {
        const dayInMonth = subDays(endOfMonth(startOfCalendar), i - 1);
        const routineDay = this.getDayInRoutine(diff - i, routine);

        days.push({
          number: format(dayInMonth, 'd'),
          day: format(dayInMonth, 'EEEE'),
          inMonth: false,
          routine: routine[routineDay],
          dayInYear: format(dayInMonth, 'ddd'),
          date: format(dayInMonth, 'dd-MM-yyyy'),
        });
      }
    }

    // Fill calendar with this month
    for (let i = 0; i < format(endOfMonth(today), 'd'); i++) {
      const routineDay = this.getDayInRoutine(diff + i, routine);
      const dayInMonth = addDays(firstDayOfTheMonth, i);

      days.push({
        number: format(dayInMonth, 'd'),
        day: format(dayInMonth, 'EEEE'),
        inMonth: true,
        routine: routine[routineDay],
        dayInYear: format(dayInMonth, 'ddd'),
        date: format(dayInMonth, 'dd-MM-yyyy'),
      });
    }

    // This fills up the end of the calendar.
    if (!isSameMonth(endOfCalendar, today) && window.innerWidth > 767) {
      const end = format(endOfCalendar, 'd');

      for (let i = end - 1; i > -1; i--) {
        const dayInMonth = subDays(endOfCalendar, i);
        const routineDay = this.getDayInRoutine(endCalendarDiff - i, routine);

        days.push({
          number: format(dayInMonth, 'd'),
          day: format(dayInMonth, 'EEEE'),
          inMonth: false,
          routine: routine[routineDay],
          dayInYear: format(dayInMonth, 'ddd'),
          date: format(dayInMonth, 'dd-MM-yyyy'),
        });
      }
    }

    this.setState({
      firstDayOfTheMonth: firstDayOfTheMonth,
      startOfCalendar: startOfCalendar,
      endOfCalendar: endOfCalendar,
      monthFormatted: format(today, 'MMMM'),
      yearFormatted: format(today, 'yyyy'),
      days: days,
    });
  };

  getDayInRoutine = (day, routine) => {
    day = day % routine.length;

    return day;
  };

  fetchEvents = () => {
    const database = firestore();
    const collection = database.collection('events');

    collection.get().then(events => {
      let data = [];
      events.forEach(doc => {
        data.push(doc.data());
      });

      this.setState({
        events: data,
      });
    });
  };

  changeMonth = type => {
    this.setState(
      {
        today:
          type === 'next'
            ? addMonths(this.state.today, 1)
            : subMonths(this.state.today, 1),
        days: [],
      },
      () => {
        this.buildMonth();
      },
    );
  };

  render() {
    const {
      days,
      todayFormatted,
      monthFormatted,
      yearFormatted,
      events,
    } = this.state;

    return (
      <div className="App">
        <Month
          days={days}
          events={events}
          today={todayFormatted}
          month={monthFormatted}
          year={yearFormatted}
          changeMonth={this.changeMonth}
        />
      </div>
    );
  }
}

export default Calendar;
