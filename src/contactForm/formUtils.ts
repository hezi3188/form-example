export interface ContantForm {
  subject: string;
  email: string;
  phone: string;
  message: string;
  check?: boolean;
}

export enum ContantFormValues {
  SUBJECT = 'subject',
  EMAIL = 'email',
  PHONE = 'phone',
  MESSAGE = 'message',
  CHECK = 'check',
}
export const phoneRegExp = /^(?:\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/;
