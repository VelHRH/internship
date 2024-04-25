import Event from 'model/events';
import Model from 'model/Model';
import CalculatorApi from 'api/CalculatorApi';

class Controller {
  constructor(modelContext: Model) {
    modelContext.subscribe(Event.CALCULATE, this.handleCalculate);
  }

  async handleCalculate(modelContext: Model): Promise<void> {
    const expression = modelContext.getInput();
    try {
      const { result, newExpression } = await CalculatorApi.calculate(expression);
      modelContext.setInput(newExpression);
      modelContext.setResult(result);
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        modelContext.setError(err.message);
        return;
      }
      modelContext.setError(err as string);
    }
  }
}

export default Controller;
