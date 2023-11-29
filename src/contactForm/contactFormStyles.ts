import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  textField: {
    '& .MuiInputLabel-formControl': {
      direction: 'rtl',
      paddingLeft: '5px',
    },
    '& .MuiInputBase-input': {
      zIndex: -1,
      paddingLeft: '5px',
      borderRadius: '10px',
      border: '1px solid rgba(20, 92, 153, 0.10)',
      background: '#FFF',
    },
  },
  textFieldLable: {
    color: 'var(--Text, #08263F)',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  titleContainer: {
    height: '10%',
  },
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '5px',
  },
  title: {
    color: 'var(--Text, #08263F)',
    fontFamily: 'Poppins',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  fieldsContainer: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  hr: {
    border: '1px solid rgba(8, 38, 63, 0.10);',
  },
  genericBtn: {
    width: '100px',
    height: '30px',
    fontSize: '9px !important',
  },
  checkbox: {
    '& .MuiTypography-root': {
      fontSize: '12px',
    },
  },
  buttonsContainer: {
    padding: '10px',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    height: '10%',
  },
});
