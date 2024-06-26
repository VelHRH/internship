import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('mainContent')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
