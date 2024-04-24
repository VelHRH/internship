import regexpStrings from '@regexp/strings';

function replaceSpecialCharacters(text) {
  return text.replace(regexpStrings.specialTokensRegexp, regexpStrings.addBackslash);
}

function createRegExp(string, flags) {
  return new RegExp(string, flags || '');
}

export { replaceSpecialCharacters, createRegExp };
