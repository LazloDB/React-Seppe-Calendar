import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputSelect from '../InputSelect/InputSelect';
import { Form, Header, BackArrow } from './Event.style';

class Event extends Component {
  state = {
    date: new Date(),
    name: '',
  };

  goBack = () => {
    console.info('goback');
  };

  changer = e => {
    console.info(e);
  };

  render() {
    const { values, touched, errors, handleChange, handleSubmit } = this.props;

    const items = ['Petri', 'Sick', 'Vacation', 'Other'];

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Header>
          <BackArrow
            onClick={() => this.goBack()}
            className="fas fa-arrow-left"
          />
        </Header>

        <Form onSubmit={handleSubmit}>
          <TextField
            label="Event name"
            value={values.name}
            onChange={e => {
              // Hacky way
              this.setState({
                name: e.target.value,
              });
              values.name = e.target.value;
            }}
            variant="outlined"
          />

          <InputSelect
            value={values.type}
            onChange={handleChange}
            items={items}
          />

          <DatePicker
            label="Basic example"
            value={this.state.date}
            onChange={e => {
              // Hacky way
              this.setState({
                date: e,
              });
              values.date = e;
            }}
            animateYearScrolling
            name="date"
            variant="outlined"
          />
          {errors.name && touched.name && (
            <div id="feedback">{errors.name}</div>
          )}
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            style={{ width: '197px', height: '57px' }}
          >
            Add
          </Button>
        </Form>
      </MuiPickersUtilsProvider>
    );
  }
}

export default Event;
