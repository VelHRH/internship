import Element from '@viewBaseElements/Element';
import attributes from '@htmlConfiguration/attributes';
import tags from '@htmlConfiguration/tags';
import classNames from '@htmlConfiguration/classNames';

class ErrorField extends Element {
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
      value: classNames.errorField,
    });
    return field;
  }

  displayError(data) {
    const outputField = document.querySelector(`.${classNames.errorField}`);
    outputField.textContent = 'Error: ' + data;
  }
}

export default ErrorField;
