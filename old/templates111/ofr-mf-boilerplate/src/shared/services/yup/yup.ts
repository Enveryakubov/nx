import * as yup from 'yup';
import * as yupRuLocale from './yupRuLocale';

const enum YupLocales {
  RU = 'ru',
  EN = 'en',
}

function yupFactory() {
  const makeLocalizedYup = (locale: `${YupLocales}` = 'ru') => {
    switch (locale) {
      case 'ru':
        yup.setLocale(yupRuLocale);
        return yup;
      case 'en':
      default:
        return yup;
    }
  };

  return {
    makeLocalizedYup,
  };
}

export default yupFactory;
