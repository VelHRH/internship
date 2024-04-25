import ElementId from 'htmlConfiguration/ids';
import Keyboard from 'view/elements/calculator/buttons/Keyboard';
import Container from 'view/elements/baseElements/Container';
import Model from 'model/Model';
import Screen from './screen/Screen';
import SubscribeEvents from './SubscribeEvents';
import ClassName from 'htmlConfiguration/classNames';

class Calculator {
  constructor(private modelContext: Model) {
    this.render();
  }
  render(): void {
    const root = document.getElementById(ElementId.MAIN_CONTENT) as HTMLDivElement;
    const parent = new Container(root, ClassName.CALCULATOR).container;
    const screen = new Screen(parent, this.modelContext.getConfig());
    new Keyboard(parent, screen.screen.inputElem, this.modelContext);
    new SubscribeEvents(this.modelContext, screen.screen);
  }
}

export default Calculator;
