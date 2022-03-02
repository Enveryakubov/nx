import type { StringSchema } from 'yup';

import { yupFactory } from '@services';

const yup = yupFactory().makeLocalizedYup('ru');

export const validateSchema = yup.object().shape({
  lastName: yup.string().required(),
  firstName: yup.string().required(),
  secondName: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email(),
  gender: yup.string().required().oneOf(['male', 'female']),
  dateOfBirth: yup.string().required(),
  placeOfBirth: yup.string().required(),
  issueDate: yup.string().required(),
  departCode: yup.string().required(),
  issuedBy: yup.string().required(),
  regAddress: yup.string().required(),
  regAddressIsEqualToFactAddress: yup.bool().nullable(true),
  factAddress: yup
    .string()
    .when('regAddressIsEqualToFactAddress', (checked: boolean, schema: StringSchema) =>
      checked ? schema.nullable(true) : schema.required(),
    ),
});
