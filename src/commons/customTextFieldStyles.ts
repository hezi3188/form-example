import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  textField: {
    '& .MuiInputLabel-formControl': {
      direction: 'rtl',
      padding: '3px 0 0 5px',
    },

    '& .MuiFormHelperText-root': {
      color: '#FF1A28',
      textEdge: 'cap',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },

    '& .MuiInput-input': {
      marginBottom: '2px',
    },
    '& .MuiInputBase-input': {
      zIndex: -1,
      paddingLeft: '5px',
      borderRadius: '10px',
      border: '1px solid rgba(20, 92, 153, 0.10)',
      background: '#FFF',
    },
  },
});
