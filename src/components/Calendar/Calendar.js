import React, { Component } from 'react';
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
    todayFormatted: format(new Date(), 'DDD'),
    monthFormatted: '',
    yearFormatted: '',
    days: [],
  };

  componentDidMount() {
    this.buildMonth();
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
        let i = format(endOfMonth(startOfCalendar), 'D') - format(startOfCalendar, 'D') + 1;
        i > 0;
        i--
      ) {
        const dayInMonth = subDays(endOfMonth(startOfCalendar), i - 1);
        const routineDay = this.getDayInRoutine(diff - i, routine);

        days.push({
          number: format(dayInMonth, 'D'),
          day: format(dayInMonth, 'dddd'),
          inMonth: false,
          routine: routine[routineDay],
          dayInYear: format(dayInMonth, 'DDD'),
          date: format(dayInMonth, 'DD-MM-YYYY')
        });
      }
    }

    // Fill calendar with this month
    for (let i = 0; i < format(endOfMonth(today), 'D'); i++) {
      const routineDay = this.getDayInRoutine(diff + i, routine);
      const dayInMonth = addDays(firstDayOfTheMonth, i);

      days.push({
        number: format(dayInMonth, 'D'),
        day: format(dayInMonth, 'dddd'),
        inMonth: true,
        routine: routine[routineDay],
        dayInYear: format(dayInMonth, 'DDD'),
        date: format(dayInMonth, 'DD-MM-YYYY'),
      });
    }

    // This fills up the end of the calendar.
    if (!isSameMonth(endOfCalendar, today) && window.innerWidth > 767) {
      const end = format(endOfCalendar, 'D');

      for (let i = end - 1; i > -1; i--) {
        const dayInMonth = subDays(endOfCalendar, i);
        const routineDay =  this.getDayInRoutine(endCalendarDiff - i, routine);

        days.push({
          number: format(dayInMonth, 'D'),
          day: format(dayInMonth, 'dddd'),
          inMonth: false,
          routine: routine[routineDay],
          dayInYear: format(dayInMonth, 'DDD'),
          date: format(dayInMonth, 'DD-MM-YYYY')
        });
      }
    }

    this.setState({
      firstDayOfTheMonth: firstDayOfTheMonth,
      startOfCalendar: startOfCalendar,
      endOfCalendar: endOfCalendar,
      monthFormatted: format(today, 'MMMM'),
      yearFormatted: format(today, 'YYYY'),
      days: days,
    });
  };

  getDayInRoutine = (day, routine) => {
    day = day % routine.length;

    return day;
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
    const { days, todayFormatted, monthFormatted, yearFormatted } = this.state;

    return (
      <div className="App">
        <Month
          days={days}
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
