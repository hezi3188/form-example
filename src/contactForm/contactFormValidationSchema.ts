import { ContantFormValues, phoneRegExp } from './formUtils';
import * as yup from 'yup';

export const schema = yup
  .object({
    [ContantFormValues.SUBJECT]: yup.string().required(),
    [ContantFormValues.EMAIL]: yup.string().email().required(),
    [ContantFormValues.PHONE]: yup.string().matches(phoneRegExp).required(),
    [ContantFormValues.MESSAGE]: yup.string().required(),
    [ContantFormValues.CHECK]: yup.boolean(),
  })
  .required();
