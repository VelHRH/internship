import Element from 'view/elements/baseElements/Element';
import Attribute from 'htmlConfiguration/attributes';
import Tag from 'htmlConfiguration/tags';
import ClassName from 'htmlConfiguration/classNames';
import Model from 'model/Model';
import ErrorElement from 'view/elements/ErrorElement';

class ErrorField extends Element {
  constructor(private parent: HTMLElement) {
    super();
    this.createField();
  }

  createField(): void {
    const field = this.createChild({ tag: Tag.P, parent: this.parent });
    this.addAttribute({
      element: field,
      attribute: Attribute.CLASS,
      value: ClassName.ERROR_FIELD,
    });
  }

  displayError(modelContext: Model): void {
    const outputField = document.querySelector(`.${ClassName.ERROR_FIELD}`) as HTMLDivElement;
    new ErrorElement(`Error: ${modelContext.getError()}`, outputField);
  }
}

export default ErrorField;
