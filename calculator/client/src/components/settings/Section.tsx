import { FC } from 'react';

import { BasicSymbol, ConfigElements } from 'calc-types';
import SettingItem from './SettingItem';

interface SectionProps {
  settings: ConfigElements<BasicSymbol>;
}

const Section: FC<SectionProps> = ({ settings }) => {
  return (
    <div className="flex flex-col gap-2 mb-2 pb-2 border-b-2 border-slate-400">
      {Object.keys(settings).map(key => (
        <SettingItem key={key} name={key} symbol={settings[key].symbol} />
      ))}
    </div>
  );
};

export default Section;
