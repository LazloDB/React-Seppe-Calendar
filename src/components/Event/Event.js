import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';

const Event = props => {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
          />
          <DatePicker
            label="Basic example"
            value={'05-02-1995'}
            onChange={handleChange}
            animateYearScrolling
            name="date"
          />
          {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      </MuiPickersUtilsProvider>
    );
};

export default Event