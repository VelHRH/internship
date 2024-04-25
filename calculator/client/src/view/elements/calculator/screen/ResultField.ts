import Element from 'view/elements/baseElements/Element';
import Attribute from 'htmlConfiguration/attributes';
import Tag from 'htmlConfiguration/tags';
import ClassName from 'htmlConfiguration/classNames';
import Model from 'model/Model';

class ResultField extends Element {
  constructor(private parent: HTMLElement) {
    super();
    this.parent = parent;
    this.createField();
  }

  createField(): void {
    const field = this.createChild({ tag: Tag.P, parent: this.parent });
    this.addAttribute({
      element: field,
      attribute: Attribute.CLASS,
      value: ClassName.RESULT_FIELD,
    });
  }

  displayResult(modelContext: Model): void {
    const outputField = document.querySelector(`.${ClassName.RESULT_FIELD}`);
    outputField!.textContent = modelContext.getResult();
  }
}

export default ResultField;
