import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// * --> Estilos
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@picocss/pico';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
