import { withFormik } from 'formik';
import { format } from 'date-fns';
import firestore from '../Firebase';

import Event from './Event';

const EventContainer = withFormik({
  mapPropsToValues: () => ({ name: '', date: new Date(), type: '' }),

  // Custom sync validation
  // validate: values => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }

  //   return errors;
  // },

  isInitialValid: false,

  validateOnBlur: false,
  validateOnChange: true,

  handleSubmit: values => {
    const db = firestore();
    db.collection('events').add({
      name: values.name,
      type: values.type,
      displayDate: format(values.date, 'dd-MM-yyyy'),
      recurring: false,
    });
  },

  displayName: 'EventForm',
})(Event);

export default EventContainer;
