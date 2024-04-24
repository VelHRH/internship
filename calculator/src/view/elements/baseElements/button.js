import Element from '@viewBaseElements/Element';
import tags from '@htmlConfiguration/tags';
import attributes from '@htmlConfiguration/attributes';
import events from '@htmlConfiguration/events';

class Button extends Element {
  constructor({ parent, id, classname, content, callback }) {
    super();
    this.parent = parent;
    this.id = id;
    this.classname = classname;
    this.content = content;
    this.callback = callback;
    this.createButton();
  }

  createButton() {
    const button = this.createChild({
      tag: tags.button,
      parent: this.parent,
    });
    if (this.id) {
      this.addAttribute({
        element: button,
        attribute: attributes.id,
        value: this.id,
      });
    }
    if (this.classname) {
      this.addAttribute({
        element: button,
        attribute: attributes.class,
        value: this.classname,
      });
    }
    button.innerText = this.content;
    button.addEventListener(events.click, this.callback);
  }
}

export default Button;
