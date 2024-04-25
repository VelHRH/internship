import type { Config } from 'api/trpc/infered.types';
import ClassName from 'htmlConfiguration/classNames';
import Container from 'view/elements/baseElements/Container';
import ErrorField from 'view/elements/calculator/screen/ErrorField';
import InputElem from 'view/elements/calculator/screen/InputElem';
import ResultField from 'view/elements/calculator/screen/ResultField';
import ButtonArrays from '../buttons/ButtonArrays';

type ScreenType = {
  inputElem: InputElem;
  resultField: ResultField;
  errorField: ErrorField;
};

class Screen {
  public screen: ScreenType;
  constructor(private parent: HTMLDivElement, private config: Config) {
    this.screen = this.render();
  }

  render(): ScreenType {
    const screenContainer = new Container(this.parent, ClassName.SCREEN);
    const inputElem = new InputElem(
      screenContainer.container,
      this.config,
      new ButtonArrays(this.config),
    );
    return {
      inputElem: inputElem,
      resultField: new ResultField(screenContainer.container),
      errorField: new ErrorField(screenContainer.container),
    };
  }
}

export default Screen;
