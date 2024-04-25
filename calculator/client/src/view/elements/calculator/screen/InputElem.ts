import Element from 'view/elements/baseElements/Element';
import Container from 'view/elements/baseElements/Container';
import ElementId from 'htmlConfiguration/ids';
import Attribute from 'htmlConfiguration/attributes';
import Tag from 'htmlConfiguration/tags';
import ViewEvent from 'htmlConfiguration/events';
import HintElem from 'view/elements/calculator/screen/HintElem';
import ButtonArrays from 'view/elements/calculator/buttons/ButtonArrays';
import Model from 'model/Model';
import ClassName from 'htmlConfiguration/classNames';
import type { Config } from 'api/trpc/infered.types';

class InputElem extends Element {
  public inputElem: HTMLInputElement;
  public hintElem: HintElem;
  public inputContainer: Container;

  constructor(
    private parent: HTMLDivElement,
    private config: Config,
    private buttonArrays: ButtonArrays,
  ) {
    super();
    this.inputContainer = new Container(this.parent, ClassName.INPUT_CONTAINER);
    this.inputElem = this.createInput();
    this.hintElem = new HintElem(
      this.inputElem,
      ElementId.HINT_ELEM,
      this.inputContainer.container,
      this.buttonArrays,
    );
  }

  createInput() {
    const inputElem = this.createChild<HTMLInputElement>({
      tag: Tag.INPUT,
      parent: this.inputContainer.container,
      id: ElementId.INPUT_FIELD,
    });
    this.addAttribute({
      element: inputElem,
      attribute: Attribute.PLACEHOLDER,
      value: '0',
    });
    this.addEvents(inputElem);
    return inputElem;
  }

  updateInput(modelContext: Model): void {
    const inputElem = document.getElementById(ElementId.INPUT_FIELD) as HTMLInputElement;
    inputElem!.value = modelContext.getInput();
  }

  pressKey(event: KeyboardEvent): void {
    event.preventDefault();
    const hint = document.getElementById(ElementId.HINT_ELEM)!;
    const keychar = event.key;
    const allChars = this.buttonArrays.allShortcuts
      .map(elem => elem.buttonContent || elem.symbol)
      .join('');
    if (allChars.includes(keychar)) {
      const textToAdd = keychar;
      this.insertText(textToAdd);
    }
    if (keychar === 'Enter' && hint.textContent) {
      this.insertText(hint.textContent);
    }
    this.hintElem.executeHint();
  }

  insertText(textToAdd: string): void {
    const inputElem = document.getElementById(ElementId.INPUT_FIELD) as HTMLInputElement;
    const moveCursor = this.moveCursor(textToAdd);
    const cursorPosition = inputElem.selectionStart!;
    inputElem.value =
      inputElem.value.slice(0, cursorPosition) + textToAdd + inputElem.value.slice(cursorPosition);
    inputElem.focus();
    inputElem.setSelectionRange(cursorPosition + moveCursor, cursorPosition + moveCursor);
  }

  addEvents(inputElem: HTMLInputElement): void {
    inputElem.addEventListener(ViewEvent.INPUT, () => this.hintElem.executeHint());
    inputElem.addEventListener(ViewEvent.KEYPRESS, event => this.pressKey(event as KeyboardEvent));
    inputElem.addEventListener(ViewEvent.BLUR, () => {
      inputElem.style.width = '100%';
      this.hintElem.hint.textContent = '';
    });
  }

  moveCursor(text: string): number {
    return text.includes(this.config.SpecialSymbols.RIGHT_PARENTHESIS.symbol) &&
      text.includes(this.config.SpecialSymbols.LEFT_PARENTHESIS.symbol)
      ? text.length - 1
      : text.length;
  }
}

export default InputElem;
