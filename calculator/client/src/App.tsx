import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from 'components/common/Layout';
import CalculatorPage from 'pages/CalculatorPage';
import SettingsPage from 'pages/SettingsPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ConfigProvider } from 'context/ConfigProvider';

const App: FC = () => {
  return (
    <ConfigProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CalculatorPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default App;
