import { TextField, TextFieldProps } from '@mui/material';
import { useStyles } from './customTextFieldStyles';

const lableStyle = {
  color: '#08263F',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
};
const ERROR_LABLE = 'This field is required';

const CustomTextField: React.FC<TextFieldProps> = ({ error, ...props }) => {
  const classes = useStyles();

  return (
    <TextField
      InputLabelProps={{
        style: lableStyle,
      }}
      {...props}
      required
      helperText={error && ERROR_LABLE}
      fullWidth
      variant="standard"
      InputProps={{
        disableUnderline: true,
      }}
      className={classes.textField}
    />
  );
};
export default CustomTextField;
