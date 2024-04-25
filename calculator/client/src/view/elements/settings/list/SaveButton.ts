import ElementId from 'htmlConfiguration/ids';
import Tag from 'htmlConfiguration/tags';
import Element from 'view/elements/baseElements/Element';

class SaveButton extends Element {
  private button: HTMLButtonElement;
  constructor(private parent: HTMLDivElement) {
    super();
    this.button = this.render();
  }
  private render(): HTMLButtonElement {
    const button = this.createChild<HTMLButtonElement>({
      tag: Tag.BUTTON,
      parent: this.parent,
      id: ElementId.SAVE_SETTINGS_BUTTON,
    });
    button.innerHTML = 'Save changes';
    button.style.display = 'none';
    return button;
  }
}

export default SaveButton;
