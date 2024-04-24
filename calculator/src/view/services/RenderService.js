import ids from '@htmlConfiguration/ids';
import Keyboard from '@viewElements/Keyboard';
import Container from '@viewElements/baseElements/Container';
import ErrorField from '@viewElements/ErrorField';
import InputElem from '@viewElements/InputElem';
import ResultField from '@viewElements/ResultField';

class RenderService {
  static render(modelContext) {
    const root = document.getElementById(ids.mainContent);
    const screen = this.renderScreen(root);
    this.renderButtons(root, modelContext);
    return screen;
  }

  static renderScreen(root) {
    const screenContainer = new Container(root, ids.screenContainer);
    this.inputElem = new InputElem(screenContainer);
    this.resultField = new ResultField(screenContainer);
    this.errorField = new ErrorField(screenContainer);
    return {
      inputElem: this.inputElem,
      resultField: this.resultField,
      errorField: this.errorField,
    };
  }

  static renderButtons(root, modelContext) {
    const keyboard = new Container(root, ids.keyboard);
    new Keyboard({
      parent: keyboard,
      inputElem: this.inputElem,
      model: modelContext,
    });
  }
}

export default RenderService;
