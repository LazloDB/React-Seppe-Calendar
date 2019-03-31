import { withFormik } from 'formik';
import { format } from 'date-fns';
import { withRouter } from 'react-router-dom';
import firestore from '../Firebase';

import Event from './Event';

const redirectToHome = (props) => {
  const { history } = props;
  history.push('/');
}

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

  handleSubmit: (values, formikBag) => {
    const { props } = formikBag;

    const db = firestore();
    db.collection('events').add({
      name: values.name,
      type: values.type,
      displayDate: format(values.date, 'dd-MM-yyyy'),
      recurring: false,
      uploadDate: new Date(),
    }).then(() => redirectToHome(props), err => console.info(err));
  },

  displayName: 'EventForm',
})(Event);

export default withRouter(EventContainer);
