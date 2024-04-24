import Element from '@viewBaseElements/Element';
import SpecialSymbols from '@config/SpecialSymbols';
import Container from '@viewBaseElements/Container';
import ids from '@htmlConfiguration/ids';
import attributes from '@htmlConfiguration/attributes';
import tags from '@htmlConfiguration/tags';
import events from '@htmlConfiguration/events';
import { allShortcuts } from '@symbols/buttons';
import HintElem from '@viewElements/HintElem';

class InputElem extends Element {
  constructor(parent) {
    super();
    this.parent = parent;
    this.inputElem = this.createInput();
    this.hintElem = new HintElem(this.inputElem, ids.hintElem);
  }

  createInput() {
    const inputContainer = new Container(this.parent, ids.inputContainer);
    const inputElem = this.createChild({
      tag: tags.input,
      parent: inputContainer,
      id: ids.inputField,
    });
    this.addAttribute({
      element: inputElem,
      attribute: attributes.placeholder,
      value: '0',
    });
    this.addEvents(inputElem);
    return inputElem;
  }

  updateInput(data) {
    if (data) {
      const inputElem = document.getElementById(ids.inputField);
      inputElem.value = data;
    }
  }

  pressKey(event) {
    event.preventDefault();
    const hint = document.getElementById(ids.hintElem);
    const keychar = event.key;
    const allChars = allShortcuts.map(elem => elem.buttonContent || elem.symbol).join('');
    if (allChars.includes(keychar)) {
      const textToAdd = keychar;
      this.insertText(textToAdd);
    }
    if (keychar === 'Enter' && hint.textContent) {
      this.insertText(hint.textContent);
    }
    this.hintElem.executeHint();
  }

  insertText(textToAdd) {
    const inputElem = document.getElementById(ids.inputField);
    const moveCursor = this.moveCursor(textToAdd);
    const cursorPosition = inputElem.selectionStart;
    inputElem.value =
      inputElem.value.slice(0, cursorPosition) + textToAdd + inputElem.value.slice(cursorPosition);
    inputElem.focus();
    inputElem.setSelectionRange(cursorPosition + moveCursor, cursorPosition + moveCursor);
  }

  addEvents(inputElem) {
    inputElem.addEventListener(events.input, () => this.hintElem.executeHint());
    inputElem.addEventListener(events.keypress, event => this.pressKey(event));
    inputElem.addEventListener(events.blur, () => {
      inputElem.style.width = '100%';
      hintElem.textContent = '';
    });
  }

  moveCursor(text) {
    return text.includes(SpecialSymbols.RIGHT_PARENTHESIS.symbol) &&
      text.includes(SpecialSymbols.LEFT_PARENTHESIS.symbol)
      ? text.length - 1
      : text.length;
  }
}

export default InputElem;
