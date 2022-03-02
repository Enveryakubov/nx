/* eslint-disable no-template-curly-in-string */
import printValue from './printValue';

interface NotType {
  path: string;
  type: string;
  value: any;
  originalValue: any;
}

export const mixed = {
  default: 'Не верное значение "${path}"',
  required: 'Поле "${path}" является обязательным',
  oneOf: 'Поле ${path} должно содержать одно из следующих значений: ${values}',
  notOneOf: 'Поле ${path} не должно содержать одно из следующих значений: ${values}',
  notType: ({ path, type, value, originalValue }: NotType) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} должен быть типа \`${type}\`, ` +
      `но финальным значением было: \`${printValue(value, true)}\`` +
      (isCast ? ` (создан из \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg += `\n Если "null" предполагалось как валидное значение, то не забудьте пометить схему с помощью метода \`.nullable()\``;
    }

    return msg;
  },
};

export const string = {
  length: '${path} должно содержать ровно ${length} символов',
  min: '${path} должно содержать не менее ${min} символов',
  max: '${path} должно содержать не более ${max} символов',
  matches: '${path} должно соответствовать правилу: "${regex}"',
  email: 'Не правильный формат электронной почты',
  url: 'Не правильный формат URL',
  trim: '${path} не должно содержать пробелов',
  lowercase: '${path} должно содержать только строчные буквы',
  uppercase: '${path} должно содержать только заглавные буквы',
};

export const number = {
  min: '${path} должно быть больше или равно ${min}',
  max: '${path} должно быть меньше или равно ${max}',
  lessThan: '${path} должно быть меньше ${less}',
  moreThan: '${path} должно быть больше ${more}',
  notEqual: '${path} должно быть равно "${notEqual}"',
  positive: '${path} должно быть положительным числом',
  negative: '${path} должно быть отрицательным числом',
  integer: '${path} должно быть целым числом',
};

export const date = {
  min: '${path} должно быть позже ${min}',
  max: '${path} должно быть ранее ${max}',
};

export const boolean = {};

export const object = {
  noUnknown: 'Поле ${path} не должно содержать неопределенных ключей',
};

export const array = {
  min: 'Поле ${path} должно содержать не менее ${min} элементов',
  max: 'Поле ${path} должно содержать не более ${max} элементов',
};
