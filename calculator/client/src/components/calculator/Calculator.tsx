import { FC, useContext } from 'react';

import Keyboard from './buttons/Keyboard';
import Screen from './screen/Screen';
import ErrorElement from 'components/common/ErrorElement';
import Loading from 'components/common/Loading';
import { ConfigContext } from 'context/ConfigProvider';

const Calculator: FC = () => {
  const { error, symbolArrays } = useContext(ConfigContext);

  if (error) {
    return <ErrorElement>{error}</ErrorElement>;
  }

  return symbolArrays ? (
    <div className="h-full w-2/5 flex flex-col">
      <Screen />
      <Keyboard symbols={symbolArrays} />
    </div>
  ) : (
    <Loading />
  );
};

export default Calculator;
