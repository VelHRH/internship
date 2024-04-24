import Element from '@viewBaseElements/Element';
import tags from '@htmlConfiguration/tags';
import attributes from '@htmlConfiguration/attributes';

class Container extends Element {
  constructor(parent, id) {
    super();
    this.parent = parent;
    this.id = id;
    return this.createContainer();
  }

  createContainer() {
    const container = this.createChild({
      tag: tags.div,
      parent: this.parent,
    });
    if (this.id) {
      this.addAttribute({
        element: container,
        attribute: attributes.id,
        value: this.id,
      });
    }
    return container;
  }
}

export default Container;
