import { Language, Translations } from '../languages';

export enum ErrorTranslationKey {
  DEFAULT = 'defaultError',
  PASSWORD_TOO_SHORT = 'passwordShortError',
  INVALID_EMAIL = 'emailError',
  FAILED_UPDATE = 'updateError',
  FAILED_ADD = 'addError',
  FAILED_REMOVE = 'removeError',
  FAILED_SIGN_UP = 'signUpError',
  FAILED_LOGIN = 'loginError',
  WRONG_CREDENTIALS = 'wrongCredentialsError',
  WRONG_PASSWORD = 'wrongPasswordError',
  DUPLICATE_EMAIL = 'duplicateEmailError',
  WEATHER_API_FETCH = 'weatherFetchError',
  WRONG_GOOGLE_TOKEN = 'googleTokenError',
  LOCATION_LIMIT = 'locationLimitError',
  FORECAST_DATE = 'forecastDateError',
  ERROR_OCCURED = 'occuredError',
}

export const errorTranslations: Translations<ErrorTranslationKey> = {
  [Language.ENGLISH]: {
    [ErrorTranslationKey.DEFAULT]: 'Something went wrong',
    [ErrorTranslationKey.PASSWORD_TOO_SHORT]: 'Password too short',
    [ErrorTranslationKey.INVALID_EMAIL]: 'Invalid email address',
    [ErrorTranslationKey.FAILED_UPDATE]: 'Failed to update',
    [ErrorTranslationKey.FAILED_ADD]: 'Failed to add',
    [ErrorTranslationKey.FAILED_REMOVE]: 'Failed to remove',
    [ErrorTranslationKey.FAILED_SIGN_UP]: 'Failed sign up',
    [ErrorTranslationKey.FAILED_LOGIN]: 'Failed login',
    [ErrorTranslationKey.WRONG_CREDENTIALS]: 'Wrong email or password',
    [ErrorTranslationKey.WRONG_PASSWORD]: 'Wrong password',
    [ErrorTranslationKey.DUPLICATE_EMAIL]: 'Email already in use',
    [ErrorTranslationKey.WEATHER_API_FETCH]: 'Unable to get weather data',
    [ErrorTranslationKey.WRONG_GOOGLE_TOKEN]: 'Unable to login with Google',
    [ErrorTranslationKey.LOCATION_LIMIT]: 'Location limit reached',
    [ErrorTranslationKey.FORECAST_DATE]: "This date's forecast doesn't exist",
    [ErrorTranslationKey.ERROR_OCCURED]: 'Error occured',
  },
  [Language.UKRAINIAN]: {
    [ErrorTranslationKey.DEFAULT]: 'Щось пішло не так',
    [ErrorTranslationKey.PASSWORD_TOO_SHORT]: 'Пароль занадто короткий',
    [ErrorTranslationKey.INVALID_EMAIL]: 'Недійсна електронна адреса',
    [ErrorTranslationKey.FAILED_UPDATE]: 'Не вдалося оновити',
    [ErrorTranslationKey.FAILED_ADD]: 'Не вдалося додати',
    [ErrorTranslationKey.FAILED_REMOVE]: 'Не вдалося видалити',
    [ErrorTranslationKey.FAILED_SIGN_UP]: 'Не вдалося зареєструватися',
    [ErrorTranslationKey.FAILED_LOGIN]: 'Помилка входу',
    [ErrorTranslationKey.WRONG_CREDENTIALS]: 'Неправильна пошта або пароль',
    [ErrorTranslationKey.WRONG_PASSWORD]: 'Неправильний пароль',
    [ErrorTranslationKey.DUPLICATE_EMAIL]: 'Ця пошта вже використовується',
    [ErrorTranslationKey.WEATHER_API_FETCH]:
      'Не вдалося отримати дані про погоду',
    [ErrorTranslationKey.WRONG_GOOGLE_TOKEN]:
      'Неможливо ввійти за допомогою Google',
    [ErrorTranslationKey.LOCATION_LIMIT]: 'Досягнуто ліміту локацій',
    [ErrorTranslationKey.FORECAST_DATE]: 'Прогноз цієї дати не існує',
    [ErrorTranslationKey.ERROR_OCCURED]: 'Сталася помилка',
  },
};