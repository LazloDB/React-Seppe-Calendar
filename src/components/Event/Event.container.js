import { withFormik } from 'formik';
import firebase from '../Firebase';

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

  handleSubmit: (values) => {
    const db = firebase.firestore();
    db.collection('events').add({
      name: values.name,
      type: values.type,
      date: values.date,
      recurring: false,
    });  

  },

  displayName: 'EventForm',
})(Event);

export default EventContainer;
