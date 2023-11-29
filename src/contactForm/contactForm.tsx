import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useStyles } from './contactFormStyles';
import Button from '@mui/material/Button';

import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel } from '@mui/material';
import CustomTextField from '../commons/customTextField';
import { ContantForm, ContantFormValues } from './formUtils';
import { schema } from './contactFormValidationSchema';

const CHECKBOX_LABLE = "I'd like to receive product tips and updates";
const TITLE_LABLE = 'Contact  us';
const SEND_LABLE = 'send';
const CANCEL_LABLE = 'cancel';

const buttonColor = {
  borderRadius: '10px',
  background: '#145C99',
  boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.06)',
  fontSize: '11px',
};

const MULTILINE_NUM = 6;

const Form = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContantForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContantForm> = (data) => {
    console.log('send data....');
  };
  return (
    <form
      className={classes.formRoot}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>{TITLE_LABLE}</h1>
        <hr className={classes.hr} />
      </div>
      <div className={classes.fieldsContainer}>
        <Controller
          name={ContantFormValues.SUBJECT}
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              error={!!errors.subject}
              className={classes.textField}
              label={ContantFormValues.SUBJECT}
            />
          )}
        />
        <Controller
          name={ContantFormValues.EMAIL}
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              error={!!errors.email}
              className={classes.textField}
              label={ContantFormValues.EMAIL}
            />
          )}
        />
        <Controller
          name={ContantFormValues.PHONE}
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              error={!!errors.phone}
              className={classes.textField}
              label={ContantFormValues.PHONE}
            />
          )}
        />
        <Controller
          name={ContantFormValues.MESSAGE}
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              error={!!errors.message}
              className={classes.textField}
              multiline
              minRows={MULTILINE_NUM}
              maxRows={MULTILINE_NUM}
              label={ContantFormValues.MESSAGE}
            />
          )}
        />
        <Controller
          name={ContantFormValues.CHECK}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              {...field}
              className={classes.checkbox}
              control={<Checkbox />}
              label={CHECKBOX_LABLE}
            />
          )}
        />
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          sx={buttonColor}
          className={classes.genericBtn}
          type="submit"
          variant="contained"
        >
          {SEND_LABLE}
        </Button>
        <Button
          className={classes.genericBtn}
          variant="text"
        >
          {CANCEL_LABLE}
        </Button>
      </div>
    </form>
  );
};

export default Form;
