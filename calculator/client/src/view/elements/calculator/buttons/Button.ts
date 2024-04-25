import Element from 'view/elements/baseElements/Element';
import Tag from 'htmlConfiguration/tags';
import Attribute from 'htmlConfiguration/attributes';
import ViewEvent from 'htmlConfiguration/events';
import ClassName from 'htmlConfiguration/classNames';

interface ButtonArgs {
  parent: HTMLDivElement;
  id?: string;
  classname?: ClassName;
  content: string;
  callback: EventListener;
}

class Button extends Element {
  private parent;
  private id;
  private classname;
  private content;
  private callback;

  constructor({ parent, id, classname, content, callback }: ButtonArgs) {
    super();
    this.parent = parent;
    this.id = id;
    this.classname = classname;
    this.content = content;
    this.callback = callback;
    this.createButton();
  }

  createButton(): void {
    const button = this.createChild<HTMLButtonElement>({
      tag: Tag.BUTTON,
      parent: this.parent,
    });
    if (this.id) {
      this.addAttribute({
        element: button,
        attribute: Attribute.ID,
        value: this.id,
      });
    }
    if (this.classname) {
      this.addAttribute({
        element: button,
        attribute: Attribute.CLASS,
        value: this.classname,
      });
    }
    button.innerText = this.content;
    button.addEventListener(ViewEvent.CLICK, this.callback);
  }
}

export default Button;
