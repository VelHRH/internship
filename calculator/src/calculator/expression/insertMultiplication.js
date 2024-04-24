import createdRegexp from '@regexp/createdRegexp';

function insertMultiplication(expression) {
  while (createdRegexp.missedMultiply.test(expression)) {
    expression = replaceWithMultiply(expression);
  }
  return replaceWithMultiply(expression);
}

function replaceWithMultiply(expression) {
  return expression.replace(createdRegexp.missedMultiply, (...args) => {
    const allArguments = Object.values(args[args.length - 1]).filter(g => g !== undefined);
    return `${allArguments[0]}*${allArguments[1]}`;
  });
}

export default insertMultiplication;
