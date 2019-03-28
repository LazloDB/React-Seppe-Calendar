import { withFormik } from 'formik';

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

  handleSubmit: (values, { setSubmitting }) => {
    console.info(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'EventForm',
})(Event);

export default EventContainer;
