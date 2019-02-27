import React, { Component } from 'react';
import { routine } from './assets/schedules/seppe';
import './App.css';

import Month from './components/Month';

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

class App extends Component {
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
    if (!isSameMonth(startOfCalendar, today)) {
      for (
        let i = format(startOfCalendar, 'D');
        i <= format(endOfMonth(startOfCalendar), 'D');
        i++
      ) {
        const dayInYear =
          diff - (format(endOfMonth(startOfCalendar), 'D') - i) - 1;
        const routineDay = this.getDayInRoutine(dayInYear, routine);
        days.push({
          number: i,
          day: format(
            subDays(
              firstDayOfTheMonth,
              format(endOfMonth(startOfCalendar), 'D') - i + 1,
            ),
            'dddd',
          ),
          inMonth: false,
          routine: routine[routineDay],
          dayInYear: dayInYear,
        });
      }
    }

    // Fill calendar witht his month
    for (let i = 0; i < format(endOfMonth(today), 'D'); i++) {
      const routineDay = this.getDayInRoutine(diff + i, routine);
      days.push({
        number: i + 1,
        day: format(addDays(firstDayOfTheMonth, i), 'dddd'),
        inMonth: true,
        routine: routine[routineDay],
        dayInYear: format(addDays(firstDayOfTheMonth, i), 'DDD'),
      });
    }

    // This fills up the end of the calendar.

    if (!isSameMonth(endOfCalendar, today)) {
      const end = format(endOfCalendar, 'D');
      for (let i = 0; i < end; i++) {
        const dayInYear = endCalendarDiff - end + i + 1;
        const routineDay = this.getDayInRoutine(dayInYear, routine);
        days.push({
          number: i + 1,
          day: format(addDays(endOfCalendar, dayInYear + 1), 'dddd'),
          inMonth: false,
          routine: routine[routineDay],
          dayInYear: dayInYear,
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

export default App;
