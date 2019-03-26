import { withFormik } from 'formik';

import Event from './Event';

const EventContainer = withFormik({
  mapPropsToValues: () => ({ name: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'EventForm',
})(Event);

export default EventContainer