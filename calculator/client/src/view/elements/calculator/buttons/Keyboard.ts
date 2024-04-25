import Button from 'view/elements/calculator/buttons/Button';
import Element from 'view/elements/baseElements/Element';
import ClassName from 'htmlConfiguration/classNames';
import findKeyBySymbol from 'utils/findKeyBySymbol';
import Model from 'model/Model';
import InputElem from 'view/elements/calculator/screen/InputElem';
import ButtonArrays from 'view/elements/calculator/buttons/ButtonArrays';
import Container from 'view/elements/baseElements/Container';
import type { BasicSymbol, Operator } from 'api/trpc/infered.types';

type FormSection = {
  name: ClassName;
  buttons: (BasicSymbol | Operator)[];
};

class Keyboard extends Element {
  private buttonArrays: ButtonArrays;

  private formSections: FormSection[];

  constructor(
    private parent: HTMLDivElement,
    private inputElem: InputElem,
    private modelContext: Model,
  ) {
    super();
    this.buttonArrays = new ButtonArrays(this.modelContext.getConfig());
    this.formSections = [
      {
        name: ClassName.TOP_SECTION,
        buttons: [
          ...this.buttonArrays.allNotNumbers.slice(0, 4),
          ...this.buttonArrays.allNotNumbers.slice(12),
        ],
      },
      { name: ClassName.LEFT_SECTION, buttons: this.buttonArrays.allNotNumbers.slice(8, 12) },
      { name: ClassName.NUMBER_SECTION, buttons: this.buttonArrays.allNumbers },
      { name: ClassName.RIGHT_SECTION, buttons: this.buttonArrays.allNotNumbers.slice(4, 8) },
    ];
    this.render();
  }

  render(): void {
    const keyboardContainer = new Container(this.parent, ClassName.KEYBOARD);
    const sections = this.formSections;
    for (let section of sections) {
      this.createButtonGroup(keyboardContainer.container, section.name, section.buttons);
    }
  }

  createButtonGroup(
    parent: HTMLDivElement,
    containerName: string,
    buttons: (BasicSymbol | Operator)[],
  ): void {
    const container = new Container(parent, containerName as ClassName).container;
    buttons &&
      buttons.forEach(element => {
        this.createKeybordButton(element, container);
      });
  }

  createKeybordButton(element: BasicSymbol | Operator, container: HTMLDivElement): void {
    const buttonKey = findKeyBySymbol(this.modelContext.getConfig().SpecialSymbols, element.symbol);
    type SpecialKeys = keyof typeof this.specialKeysActions;
    new Button({
      parent: container,
      id: `${ClassName.SYMBOL}${buttonKey}`,
      content: element.symbol,
      callback: this.specialKeysActions[buttonKey as SpecialKeys]
        ? () => this.specialKeysActions[buttonKey as SpecialKeys]()
        : () => {
            this.inputElem.insertText(element.buttonContent || element.symbol);
          },
    });
  }

  private specialKeysActions = {
    EQUAL: (): void => {
      this.clearResults();
      this.modelContext.calculateInput(this.inputElem.inputElem.value);
    },
    AC: (): void => {
      this.clearResults();
      this.inputElem.inputElem.value = '';
      this.inputElem.inputElem.focus();
    },
  };

  clearResults(): void {
    document.querySelector(`.${ClassName.RESULT_FIELD}`)!.textContent = '';
    document.querySelector(`.${ClassName.ERROR_FIELD}`)!.textContent = '';
  }
}

export default Keyboard;
