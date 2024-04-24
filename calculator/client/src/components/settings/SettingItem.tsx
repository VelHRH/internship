import { FC } from 'react';

interface SettingProps {
  name: string;
  symbol: string;
}

const SettingItem: FC<SettingProps> = ({ name, symbol }) => {
  return (
    <div className="flex justify-between">
      <p>{name}</p>
      <input value={symbol} className="w-1/3 rounded-sm px-1 bg-slate-200" />
    </div>
  );
};

export default SettingItem;
