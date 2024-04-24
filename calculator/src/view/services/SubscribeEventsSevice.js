import EventTypes from '@model/eventTypes';

class SubscribeEventsSevice {
  static subscribe(modelContext, screenContext) {
    modelContext.subscribe(EventTypes.UPDATE_INPUT, screenContext.inputElem.updateInput);
    modelContext.subscribe(EventTypes.DISPLAY_RESULT, screenContext.resultField.displayResult);
    modelContext.subscribe(EventTypes.DISPLAY_ERROR, screenContext.errorField.displayError);
  }
}

export default SubscribeEventsSevice;
