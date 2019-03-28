import React, { Component } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class InputSelect extends Component {
  inputLabelRef = React.createRef();

  render() {
    const { value, onChange, items } = this.props;

    return (
      <FormControl variant="outlined">
        <InputLabel ref={this.inputLabelRef} htmlFor="outlined-select">
          Type
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              style={{ width: '197px' }}
              name="type"
              id="outlined-select"
              labelWidth={50}
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default InputSelect;
