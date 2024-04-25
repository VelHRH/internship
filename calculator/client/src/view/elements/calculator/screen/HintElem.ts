import Tag from 'htmlConfiguration/tags';
import Element from 'view/elements/baseElements/Element';
import ElementId from 'htmlConfiguration/ids';
import ButtonArrays from 'view/elements/calculator/buttons/ButtonArrays';

class HintElem extends Element {
  public hint: HTMLDivElement;
  constructor(
    private input: HTMLInputElement,
    id: ElementId,
    private parent: HTMLElement,
    private buttonArrays: ButtonArrays,
  ) {
    super();
    this.hint = this.renderHint(id);
  }

  renderHint(id: ElementId): HTMLDivElement {
    const hintElem = this.createChild<HTMLDivElement>({
      tag: Tag.P,
      parent: this.parent,
      id,
    });
    return hintElem;
  }

  executeHint(): void {
    let text = this.input.value;
    this.input.style.width = text.length + 'ch';
    this.hint.textContent = '';
    if (text) {
      this.findWord(text);
    }
  }

  findWord(text: string): void {
    const words = this.buttonArrays.allShortcuts.map(elem => elem.buttonContent || elem.symbol);
    for (let start = 0; start < text.length; start++) {
      const substr = text.slice(start);
      for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(substr)) {
          this.hint.textContent = words[i].substring(substr.length);
          return;
        }
      }
    }
  }
}

export default HintElem;
