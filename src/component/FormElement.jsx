import React from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const FormElement = ({ type, placeholder, buttonText, styles }) => {
    debugger;
  switch (type) {
    case 'text':
    case 'password':
      return (
        <TextField
          type={type}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          sx={{ ...styles, marginBottom: '10px' }}
        />
      );
    case 'color':
      return (
        <input
          type="color"
          className="w-full h-10"
          style={{ ...styles, borderRadius: '4px',width:'230px' }}
        />
      );
    case 'select':
      return (
        <TextField
          select
          variant="outlined"
          sx={{ ...styles, marginBottom: '10px',width:'230px' }}
          label="Select"
          >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </TextField>
      );
    case 'button':
      return (
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ ...styles }}
        >
          {buttonText || 'Submit'}
        </Button>
      );
    default:
      return null;
  }
};

export default FormElement;

