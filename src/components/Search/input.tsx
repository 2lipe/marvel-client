import { TextField, withStyles } from '@material-ui/core';

export const CustomInput = withStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FAFAFA',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#FAFAFA',

      '&:hover fieldset': {
        borderColor: '#c53030',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#c53030',
      },
    },
  },
})(TextField);
