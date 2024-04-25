import type { BasicSymbol, Config, Operator } from 'api/trpc/infered.types';

class ButtonArrays {
  private allConfigElements: (BasicSymbol | Operator)[];
  private notDigits: (BasicSymbol | Operator)[];
  private digits: (BasicSymbol | Operator)[];
  public allTokens: (BasicSymbol | Operator)[];
  public allShortcuts: (BasicSymbol | Operator)[];
  public allNumbers: (BasicSymbol | Operator)[];
  public allNotNumbers: (BasicSymbol | Operator)[];

  constructor(private config: Config) {
    this.allConfigElements = this.createAllConfigElements();
    this.notDigits = this.createNotDigits();
    this.digits = this.createDigits();
    this.allTokens = [...this.allConfigElements, ...this.digits];
    this.allShortcuts = [...this.notDigits, ...this.digits];
    this.allNumbers = [
      ...this.digits,
      ...this.notDigits.filter(element => this.isConstant(element)),
    ];
    this.allNotNumbers = this.notDigits.filter(element => !this.isConstant(element));
  }
  private elementBySymbol(symbol: string): BasicSymbol | Operator {
    const element = this.findElementBySymbol(symbol);
    return element
      ? this.isFunctionOperator(element) && !element.isConstant
        ? this.generateFunctionExpression(element)
        : element
      : { symbol };
  }
  private findElementBySymbol(symbol: string): BasicSymbol | Operator {
    return this.allConfigElements.find(el => el.symbol === symbol)!;
  }

  private generateFunctionExpression(element: Operator): Operator {
    return {
      ...element,
      buttonContent: `${element.buttonContent || element.symbol}${
        this.config.SpecialSymbols.LEFT_PARENTHESIS.symbol
      }${this.config.SpecialSymbols.RIGHT_PARENTHESIS.symbol}`,
    };
  }

  private createAllConfigElements(): (BasicSymbol | Operator)[] {
    const allElems = [
      ...Object.values(this.config.SpecialSymbols),
      ...Object.values(this.config.Operators),
      ...Object.values(this.config.FunctionOperators),
    ];
    return allElems.filter((element: BasicSymbol) => element.symbol !== '');
  }

  private createDigits(): (BasicSymbol | Operator)[] {
    return Array.from({ length: 10 }, (_, i) => ((i + 1) % 10).toString()).map(symbol =>
      this.elementBySymbol(symbol),
    );
  }

  private createNotDigits(): (BasicSymbol | Operator)[] {
    return this.allConfigElements.map(element => this.elementBySymbol(element.symbol));
  }

  private isFunctionOperator(element: BasicSymbol | Operator): element is Operator {
    const elementAsOperator = element as Operator;
    return Object.values(this.config.FunctionOperators).includes(elementAsOperator);
  }

  private isConstant(element: BasicSymbol | Operator): boolean {
    return this.isFunctionOperator(element) && element.isConstant ? true : false;
  }
}

export default ButtonArrays;
