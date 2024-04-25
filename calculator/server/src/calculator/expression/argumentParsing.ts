import GroupName from 'calculator/regexp/groupNames';

const operatorNames = [
  GroupName.CONSTANT_OPERATOR,
  GroupName.BINARY_OPERATOR,
  GroupName.FUNCTION_OPERATOR,
];

type Groups = Record<GroupName, string | undefined>;

type ExtractedOperators = {
  operator: string;
  leftGroups: Groups;
};

function isString(value: string | undefined): value is string {
  return typeof value === 'string';
}

function extractOperators(groups: Groups): ExtractedOperators {
  let leftGroups = { ...groups };
  //finds existing operator in lef
  const existingOperatorName = operatorNames.find(operatorName =>
    isString(leftGroups[operatorName]),
  )!;
  const operator = leftGroups[existingOperatorName]!;
  delete leftGroups[existingOperatorName];
  return { leftGroups, operator };
}

function argumentsParsing(groups: Groups): { operator: string; validArgs: string[] } {
  const { operator, leftGroups } = extractOperators(groups);
  const validArgs = Object.values(leftGroups).filter(isString);
  return { operator, validArgs };
}

export default argumentsParsing;
