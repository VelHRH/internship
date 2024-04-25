import CalculatorService from 'calculator/CalculatorService';
import ParenthesesSequenceError from 'calculator/validation/errors/ParenthesesSequenceError';
import OperatorPlacementError from 'calculator/validation/errors/OperatorPlacementError';
import PointPlacementError from 'calculator/validation/errors/PointPlacementError';
import SymbolsOutOfBoundError from 'calculator/validation/errors/SymbolsOutOfBoundError';
import EmptyParenthesesError from 'calculator/validation/errors/EmptyParenthesesError';

describe('Calculator', () => {
  test('Calculate', () => {
    expect(CalculatorService.calculate('')).toEqual({ newExpression: '', result: 0 });
    expect(CalculatorService.calculate('5')).toEqual({ newExpression: '5', result: 5 });
    expect(CalculatorService.calculate('2+4')).toEqual({ newExpression: '2+4', result: 6 });
    expect(CalculatorService.calculate('5+3 *2')).toEqual({ newExpression: '5+3*2', result: 11 });
    expect(CalculatorService.calculate('(1)2(3)')).toEqual({
      newExpression: '(1)*2*(3)',
      result: 6,
    });
    expect(CalculatorService.calculate('(5+3)*2')).toEqual({
      newExpression: '(5+3)*2',
      result: 16,
    });
    expect(CalculatorService.calculate('ln(e)')).toEqual({ newExpression: 'ln(e)', result: 1 });
    expect(CalculatorService.calculate('cos(180)')).toEqual({
      newExpression: 'cos(180)',
      result: -1,
    });
    expect(CalculatorService.calculate('2^3 + sqrt(16)')).toEqual({
      newExpression: '2^3+sqrt(16)',
      result: 12,
    });
    expect(CalculatorService.calculate('-1^lg(100)')).toEqual({
      newExpression: '-1^lg(100)',
      result: 1,
    });
    expect(CalculatorService.calculate('(sin(30))+(cos(60)-5)')).toEqual({
      newExpression: '(sin(30))+(cos(60)-5)',
      result: -4,
    });
    expect(CalculatorService.calculate('!(sin(!(1+2)*15)+2)')).toEqual({
      newExpression: '!(sin(!(1+2)*15)+2)',
      result: 6,
    });
    expect(CalculatorService.calculate('!( sin ( !( 1 + 2 ) * ( - ( - 15 ) ) ) + 2)')).toEqual({
      newExpression: '!(sin(!(1+2)*(-(-15)))+2)',
      result: 6,
    });
  });

  test('Validate', () => {
    expect(() => CalculatorService.calculate('(')).toThrow(ParenthesesSequenceError);
    expect(() => CalculatorService.calculate('12*!()')).toThrow(EmptyParenthesesError);
    expect(() => CalculatorService.calculate('pisin(30)')).not.toThrow();
    expect(() => CalculatorService.calculate('12+ -3')).toThrow(OperatorPlacementError);
    expect(() => CalculatorService.calculate('!(sin(!( +1 + 2 )*15)+2)')).toThrow(
      OperatorPlacementError,
    );
    expect(() => CalculatorService.calculate('!(sin(!(1+2)*15)+2-)')).toThrow(
      OperatorPlacementError,
    );
    expect(() => CalculatorService.calculate('12 + .3')).toThrow(PointPlacementError);
    expect(() => CalculatorService.calculate('si(22)-1')).toThrow(SymbolsOutOfBoundError);
  });
});
