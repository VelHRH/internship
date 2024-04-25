import Model from 'model/Model';
import Calculator from './elements/calculator/Calculator';
import Settings from './elements/settings/Setttings';

class View {
  constructor(private modelContext: Model) {
    this.render();
  }

  private render() {
    new Calculator(this.modelContext);
    new Settings(this.modelContext);
  }
}

export default View;
