import ClassName from 'htmlConfiguration/classNames';
import Model from 'model/Model';
import Container from 'view/elements/baseElements/Container';
import Section from './Section';

class List {
  constructor(private parent: HTMLDivElement, private modelContext: Model) {
    this.render();
  }
  private render(): void {
    const listContainer = new Container(this.parent, ClassName.SETTINGS_LIST).container;
    for (let value of Object.values(this.modelContext.getConfig())) {
      new Section(listContainer, value, this.modelContext);
    }
  }
}

export default List;
