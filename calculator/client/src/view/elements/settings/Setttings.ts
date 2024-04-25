import ClassName from 'htmlConfiguration/classNames';
import ElementId from 'htmlConfiguration/ids';
import Model from 'model/Model';
import Container from 'view/elements/baseElements/Container';
import List from 'view/elements/settings/list/List';
import SaveButton from './list/SaveButton';

class Settings {
  constructor(private modelContext: Model) {
    this.render();
  }
  private render(): void {
    const root = document.getElementById(ElementId.MAIN_CONTENT) as HTMLDivElement;
    const parent = new Container(root, ClassName.SETTINGS).container;
    new List(parent, this.modelContext);
    new SaveButton(parent);
  }
}

export default Settings;
