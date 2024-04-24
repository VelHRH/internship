import calculate from '@calculator/CalculatorService';
import EventTypes from '@model/eventTypes';

class Controller {
  constructor(model) {
    this.model = model;
    this.model.subscribe(EventTypes.CALCULATE, this.handleCalculate);
  }

  handleCalculate(inputElem, modelContext) {
    let expression = inputElem.value;
    try {
      const { result, newExpression } = calculate(expression);
      modelContext.notify(EventTypes.UPDATE_INPUT, newExpression);
      modelContext.notify(EventTypes.DISPLAY_RESULT, result);
    } catch (err) {
      modelContext.notify(EventTypes.DISPLAY_ERROR, err.message);
    }
  }
}

export default Controller;
