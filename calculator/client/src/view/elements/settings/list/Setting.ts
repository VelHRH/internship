import ClassName from 'htmlConfiguration/classNames';
import ViewEvent from 'htmlConfiguration/events';
import ElementId from 'htmlConfiguration/ids';
import Tag from 'htmlConfiguration/tags';
import Model from 'model/Model';
import Container from 'view/elements/baseElements/Container';
import Element from 'view/elements/baseElements/Element';

class Setting extends Element {
  constructor(
    private parent: HTMLDivElement,
    private key: string,
    private symbol: string,
    private modelContext: Model,
  ) {
    super();
    this.render();
  }

  render() {
    const settingContainer = new Container(this.parent, ClassName.SETTING).container;
    this.createKey(settingContainer);
    this.createSymbolInput(settingContainer);
  }

  createKey(settingContainer: HTMLDivElement) {
    const keyElem = this.createChild({
      tag: Tag.DIV,
      parent: settingContainer,
    });
    keyElem.innerHTML = this.key + ':';
  }

  createSymbolInput(settingContainer: HTMLDivElement) {
    const symbolElem = this.createChild<HTMLInputElement>({
      tag: Tag.INPUT,
      parent: settingContainer,
    });
    symbolElem.value = this.symbol;
    symbolElem.addEventListener(ViewEvent.INPUT, () => {
      const currentValue = symbolElem.value;
      if (currentValue !== this.symbol) {
        this.modelContext.addSettingsChange(this.key, currentValue);
        this.handleButtonVisibility();
      } else {
        this.modelContext.deleteSettingsChange(this.key);
        this.handleButtonVisibility();
      }
    });
  }

  handleButtonVisibility() {
    const button = document.getElementById(ElementId.SAVE_SETTINGS_BUTTON)!;
    if (Object.values(this.modelContext.getSettingsChanges()).length === 0) {
      button.style.display = 'none';
    } else {
      button.style.display = 'block';
    }
  }
}

export default Setting;
