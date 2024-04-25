import Attribute from 'htmlConfiguration/attributes';
import ElementId from 'htmlConfiguration/ids';
import Tag from 'htmlConfiguration/tags';

export type CreateChildArgs = {
  tag: Tag;
  parent: HTMLElement;
  id?: ElementId;
};

export type AddAttributeArgs = {
  attribute: Attribute;
  element: HTMLElement;
  value: string;
};

class Element {
  constructor() {}

  createChild<T extends HTMLElement>({ tag, parent, id }: CreateChildArgs): T {
    const element = document.createElement(`${tag}`) as unknown as T;
    parent.append(element);
    if (id) {
      this.addAttribute({
        element,
        attribute: Attribute.ID,
        value: id,
      });
    }
    return element;
  }

  addAttribute({ element, attribute, value }: AddAttributeArgs): void {
    element.setAttribute(`${attribute}`, `${value}`);
  }
}

export default Element;
