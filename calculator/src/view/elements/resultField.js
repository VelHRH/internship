import Element from '@viewBaseElements/Element';
import attributes from '@htmlConfiguration/attributes';
import tags from '@htmlConfiguration/tags';
import classNames from '@htmlConfiguration/classNames';

class ResultField extends Element {
  constructor(parent) {
    super();
    this.parent = parent;
    this.createField();
  }

  createField() {
    const field = this.createChild({ tag: tags.p, parent: this.parent });
    this.addAttribute({
      element: field,
      attribute: attributes.class,
      value: classNames.resultField,
    });
    return field;
  }

  displayResult(data) {
    const outputField = document.querySelector(`.${classNames.resultField}`);
    outputField.textContent = data;
  }
}

export default ResultField;