import Event from 'model/events';
import Model from 'model/Model';
import ErrorField from 'view/elements/calculator/screen/ErrorField';
import InputElem from 'view/elements/calculator/screen/InputElem';
import ResultField from 'view/elements/calculator/screen/ResultField';

class SubscribeEvents {
  constructor(
    modelContext: Model,
    screenContext: {
      inputElem: InputElem;
      resultField: ResultField;
      errorField: ErrorField;
    },
  ) {
    modelContext.subscribe(Event.UPDATE_INPUT, screenContext.inputElem.updateInput);
    modelContext.subscribe(Event.DISPLAY_RESULT, screenContext.resultField.displayResult);
    modelContext.subscribe(Event.DISPLAY_ERROR, screenContext.errorField.displayError);
  }
}

export default SubscribeEvents;
