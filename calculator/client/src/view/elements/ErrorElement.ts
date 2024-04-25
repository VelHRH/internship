import ElementId from 'htmlConfiguration/ids';
import Tag from 'htmlConfiguration/tags';
import Element from 'view/elements/baseElements/Element';

class ErrorElement extends Element {
  private parent: HTMLDivElement;
  constructor(private errorText: string, parent: HTMLDivElement | null) {
    super();
    const root = document.getElementById(ElementId.MAIN_CONTENT) as HTMLDivElement;
    this.parent = parent || root;
    this.render();
  }

  render() {
    const element = this.createChild({
      tag: Tag.DIV,
      parent: this.parent,
      id: ElementId.ERROR_ELEMENT,
    });
    element.innerText = this.errorText;
  }
}

export default ErrorElement;
