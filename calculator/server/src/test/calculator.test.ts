import CalculatorService from 'calculator/CalculatorService';
import ParenthesesSequenceError from 'errors/expressionErrors/ParenthesesSequenceError';
import OperatorPlacementError from 'errors/expressionErrors/OperatorPlacementError';
import PointPlacementError from 'errors/expressionErrors/PointPlacementError';
import SymbolsOutOfBoundError from 'errors/expressionErrors/SymbolsOutOfBoundError';
import EmptyParenthesesError from 'errors/expressionErrors/EmptyParenthesesError';

describe('Calculator', () => {
  test('Calculate', () => {
    expect(CalculatorService.calculateWithHistory('')).toEqual({ newExpression: '', result: 0 });
    expect(CalculatorService.calculateWithHistory('5')).toEqual({ newExpression: '5', result: 5 });
    expect(CalculatorService.calculateWithHistory('2+4')).toEqual({
      newExpression: '2+4',
      result: 6,
    });
    expect(CalculatorService.calculateWithHistory('5+3 *2')).toEqual({
      newExpression: '5+3*2',
      result: 11,
    });
    expect(CalculatorService.calculateWithHistory('(1)2(3)')).toEqual({
      newExpression: '(1)*2*(3)',
      result: 6,
    });
    expect(CalculatorService.calculateWithHistory('(5+3)*2')).toEqual({
      newExpression: '(5+3)*2',
      result: 16,
    });
    expect(CalculatorService.calculateWithHistory('ln(e)')).toEqual({
      newExpression: 'ln(e)',
      result: 1,
    });
    expect(CalculatorService.calculateWithHistory('cos(180)')).toEqual({
      newExpression: 'cos(180)',
      result: -1,
    });
    expect(CalculatorService.calculateWithHistory('2^3 + sqrt(16)')).toEqual({
      newExpression: '2^3+sqrt(16)',
      result: 12,
    });
    expect(CalculatorService.calculateWithHistory('-1^lg(100)')).toEqual({
      newExpression: '-1^lg(100)',
      result: 1,
    });
    expect(CalculatorService.calculateWithHistory('(sin(30))+(cos(60)-5)')).toEqual({
      newExpression: '(sin(30))+(cos(60)-5)',
      result: -4,
    });
    expect(CalculatorService.calculateWithHistory('!(sin(!(1+2)*15)+2)')).toEqual({
      newExpression: '!(sin(!(1+2)*15)+2)',
      result: 6,
    });
    expect(
      CalculatorService.calculateWithHistory('!( sin ( !( 1 + 2 ) * ( - ( - 15 ) ) ) + 2)'),
    ).toEqual({
      newExpression: '!(sin(!(1+2)*(-(-15)))+2)',
      result: 6,
    });
  });

  test('Validate', () => {
    expect(() => CalculatorService.calculateWithHistory('(')).toThrow(ParenthesesSequenceError);
    expect(() => CalculatorService.calculateWithHistory('12*!()')).toThrow(EmptyParenthesesError);
    expect(() => CalculatorService.calculateWithHistory('pisin(30)')).not.toThrow();
    expect(() => CalculatorService.calculateWithHistory('12+ -3')).toThrow(OperatorPlacementError);
    expect(() => CalculatorService.calculateWithHistory('!(sin(!( +1 + 2 )*15)+2)')).toThrow(
      OperatorPlacementError,
    );
    expect(() => CalculatorService.calculateWithHistory('!(sin(!(1+2)*15)+2-)')).toThrow(
      OperatorPlacementError,
    );
    expect(() => CalculatorService.calculateWithHistory('12 + .3')).toThrow(PointPlacementError);
    expect(() => CalculatorService.calculateWithHistory('si(22)-1')).toThrow(
      SymbolsOutOfBoundError,
    );
  });
});
