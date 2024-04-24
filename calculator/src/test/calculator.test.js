import calculate from '../calculator/CalculatorService';
import ParenthesesSequenceError from '../calculator/modules/validation/errors/ParenthesesSequenceError';
import OperatorPlacementError from '../calculator/modules/validation/errors/OperatorPlacementError';
import PointPlacementError from '../calculator/modules/validation/errors/PointPlacementError';
import SymbolsOutOfBoundError from '../calculator/modules/validation/errors/SymbolsOutOfBoundError';
import EmptyParenthesesError from '../calculator/modules/validation/errors/EmptyParenthesesError';

describe('Calculator', () => {
  test('Calculate', () => {
    expect(calculate('')).toEqual({ newExpression: '', result: 0 });
    expect(calculate('5')).toEqual({ newExpression: '5', result: 5 });
    expect(calculate('2+4')).toEqual({ newExpression: '2+4', result: 6 });
    expect(calculate('5+3 *2')).toEqual({ newExpression: '5+3*2', result: 11 });
    expect(calculate('(1)2(3)')).toEqual({ newExpression: '(1)*2*(3)', result: 6 });
    expect(calculate('(5+3)*2')).toEqual({ newExpression: '(5+3)*2', result: 16 });
    expect(calculate('ln(e)')).toEqual({ newExpression: 'ln(e)', result: 1 });
    expect(calculate('cos(180)')).toEqual({ newExpression: 'cos(180)', result: -1 });
    expect(calculate('2^3 + sqrt(16)')).toEqual({ newExpression: '2^3+sqrt(16)', result: 12 });
    expect(calculate('-1^lg(100)')).toEqual({ newExpression: '-1^lg(100)', result: 1 });
    expect(calculate('(sin(30))+(cos(60)-5)')).toEqual({
      newExpression: '(sin(30))+(cos(60)-5)',
      result: -4,
    });
    expect(calculate('!(sin(!(1+2)*15)+2)')).toEqual({
      newExpression: '!(sin(!(1+2)*15)+2)',
      result: 6,
    });
    expect(calculate('!( sin ( !( 1 + 2 ) * ( - ( - 15 ) ) ) + 2)')).toEqual({
      newExpression: '!(sin(!(1+2)*(-(-15)))+2)',
      result: 6,
    });
  });

  test('Validate', () => {
    expect(() => calculate('(')).toThrow(ParenthesesSequenceError);
    expect(() => calculate('12*!()')).toThrow(EmptyParenthesesError);
    expect(() => calculate('pisin(30)')).not.toThrow();
    expect(() => calculate('12+ -3')).toThrow(OperatorPlacementError);
    expect(() => calculate('!(sin(!( +1 + 2 )*15)+2)')).toThrow(OperatorPlacementError);
    expect(() => calculate('!(sin(!(1+2)*15)+2-)')).toThrow(OperatorPlacementError);
    expect(() => calculate('12 + .3')).toThrow(PointPlacementError);
    expect(() => calculate('si(22)-1')).toThrow(SymbolsOutOfBoundError);
  });
});
