import Button from '@viewBaseElements/Button';
import Element from '@viewBaseElements/Element';
import ids from '@htmlConfiguration/ids';
import tags from '@htmlConfiguration/tags';
import attributes from '@htmlConfiguration/attributes';
import classNames from '@htmlConfiguration/classNames';
import { allNumbers, allNotNumbers } from '@symbols/buttons';
import SpecialSymbols from '@config/SpecialSymbols';
import EventTypes from '@model/eventTypes';
import { findKeyBySymbol } from '@utils/objectHelpers';

class Keyboard extends Element {
  constructor({ parent, inputElem, model }) {
    super();
    this.parent = parent;
    this.inputElem = inputElem;
    this.model = model;
    this.render();
  }

  render() {
    const sections = this.formSections;
    for (let section of sections) {
      this.createButtonGroup({
        parent: this.parent,
        containerName: section.name,
        buttons: section.buttons,
      });
    }
  }

  formSections = [
    { name: ids.topSection, buttons: [...allNotNumbers.slice(0, 4), ...allNotNumbers.slice(12)] },
    { name: ids.leftSection, buttons: allNotNumbers.slice(8, 12) },
    { name: ids.numberSection, buttons: allNumbers },
    { name: ids.rightSection, buttons: allNotNumbers.slice(4, 8) },
  ];

  createButtonGroup({ parent, containerName, buttons }) {
    const container = this.createChild({
      tag: tags.div,
      parent,
    });
    this.addAttribute({
      element: container,
      attribute: attributes.id,
      value: containerName,
    });
    buttons &&
      buttons.forEach(element => {
        this.createKeybordButton({ element, container });
      });
  }

  createKeybordButton({ element, container }) {
    const buttonKey = findKeyBySymbol(SpecialSymbols, element.symbol);
    new Button({
      parent: container,
      id: `${classNames.symbol}${buttonKey}`,
      content: element.symbol,
      callback: this.specialKeysActions[buttonKey]
        ? () => this.specialKeysActions[buttonKey]()
        : () => {
            this.inputElem.insertText(element.buttonContent || element.symbol);
          },
    });
  }

  specialKeysActions = {
    EQUAL: () => {
      this.clearResults();
      this.model.notify(EventTypes.CALCULATE, this.inputElem.inputElem, this.model);
    },
    AC: () => {
      this.clearResults();
      this.inputElem.inputElem.value = '';
      this.inputElem.inputElem.focus();
    },
  };

  clearResults() {
    document.querySelector(`.${classNames.resultField}`).textContent = '';
    document.querySelector(`.${classNames.errorField}`).textContent = '';
  }
}

export default Keyboard;
