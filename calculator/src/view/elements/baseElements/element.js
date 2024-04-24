import attributes from '@htmlConfiguration/attributes';

class Element {
  constructor() {}

  createChild({ tag, parent, id }) {
    const element = document.createElement(`${tag}`);
    parent.append(element);
    if (id) {
      this.addAttribute({
        element,
        attribute: attributes.id,
        value: id,
      });
    }
    return element;
  }

  addAttribute({ element, attribute, value }) {
    element.setAttribute(`${attribute}`, `${value}`);
  }
}

export default Element;
