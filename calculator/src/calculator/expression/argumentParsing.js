import groupNames from '@regexp/groupNames';

function extractOperators(groups) {
  let leftGroups = { ...groups };
  const operatorNames = [
    groupNames.constantOperator,
    groupNames.binaryOperator,
    groupNames.functionOperator,
  ];
  const operator = operatorNames.reduce((result, operatorName) => {
    //returns existing operator, leaves only arguments in groups
    if (leftGroups[operatorName]) {
      const { newGroups, operator } = extractAndRemoveOperator(leftGroups, operatorName);
      leftGroups = newGroups;
      return operator;
    }
    delete leftGroups[operatorName];
    return result;
  }, '');
  return { allArguments: leftGroups, operator };
}

function extractAndRemoveOperator(groups, operatorName) {
  const newGroups = { ...groups };
  const operator = newGroups[operatorName];
  delete newGroups[operatorName];
  return { operator, newGroups };
}

function argumentsParsing(groups) {
  const { allArguments, operator } = extractOperators(groups);
  const validArgs = Object.values(allArguments).filter(a => a !== undefined);
  return { operator, validArgs };
}

export default argumentsParsing;
