import Element from 'view/elements/baseElements/Element';
import Tag from 'htmlConfiguration/tags';
import Attribute from 'htmlConfiguration/attributes';
import ClassName from 'htmlConfiguration/classNames';

class Container extends Element {
  public container!: HTMLDivElement;
  constructor(private parent: HTMLDivElement, private className: ClassName) {
    super();
    this.createContainer();
  }

  createContainer(): HTMLDivElement {
    this.container = this.createChild({
      tag: Tag.DIV,
      parent: this.parent,
    });
    if (this.className) {
      this.addAttribute({
        element: this.container,
        attribute: Attribute.CLASS,
        value: this.className,
      });
    }
    return this.container;
  }
}

export default Container;
