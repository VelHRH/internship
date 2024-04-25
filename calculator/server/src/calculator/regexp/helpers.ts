import regexpStrings from 'calculator/regexp/strings';

function replaceSpecialCharacters(text: string): string {
  return text.replace(regexpStrings.specialTokensRegexp, regexpStrings.addBackslash);
}

function createRegExp(string: string, flags?: string): RegExp {
  return new RegExp(string, flags || '');
}

export { replaceSpecialCharacters, createRegExp };
