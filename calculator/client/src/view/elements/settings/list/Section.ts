import type { SpecialSymbol } from 'api/trpc/infered.types';
import ClassName from 'htmlConfiguration/classNames';
import Model from 'model/Model';
import Container from 'view/elements/baseElements/Container';
import Setting from './Setting';

class Section {
  constructor(
    private parent: HTMLDivElement,
    private settings: SpecialSymbol,
    private modelContext: Model,
  ) {
    this.render();
  }
  private render(): void {
    const sectionContainer = new Container(this.parent, ClassName.SETTINGS_SECTION).container;
    for (let key in this.settings) {
      if (key !== 'PARENTHESES') {
        new Setting(sectionContainer, key, this.settings[key].symbol, this.modelContext);
      }
    }
  }
}

export default Section;
