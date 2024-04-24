import tags from '@htmlConfiguration/tags';
import Element from '@viewBaseElements/Element';
import { allShortcuts } from '@symbols/buttons';

class HintElem extends Element {
  constructor(input, id) {
    super();
    this.input = input;
    this.hint = this.renderHint(id);
  }

  renderHint(id) {
    const hintElem = this.createChild({
      tag: tags.p,
      parent: this.input.parentNode,
      id,
    });

    return hintElem;
  }

  executeHint() {
    let text = this.input.value;
    this.input.style.width = text.length + 'ch';
    this.hint.textContent = '';
    if (text) {
      this.findWord(text, this.hint);
    }
  }

  findWord(text) {
    const words = allShortcuts.map(elem => elem.buttonContent || elem.symbol);
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
