import { FC, useContext } from 'react';

import ErrorElement from 'components/common/ErrorElement';
import Loading from 'components/common/Loading';
import Section from 'components/settings/Section';
import { ConfigContext } from 'context/ConfigProvider';
import Button from 'components/common/Button';

const Settings: FC = () => {
  const { error, config } = useContext(ConfigContext);
  if (error) {
    return <ErrorElement>{error}</ErrorElement>;
  }
  return config ? (
    <div className="flex flex-col w-full">
      <div className="h-[90%] overflow-y-scroll w-full pr-2 p-2">
        {Object.values(config).map((conf, i) => (
          <Section key={i} settings={conf} />
        ))}
      </div>
      <Button className="flex-1 text-slate-50 bg-cyan-600/50 hover:bg-cyan-600/80 w-full text-lg font-semibold">
        Save
      </Button>
    </div>
  ) : (
    <Loading />
  );
};

export default Settings;
