
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remover o preloader assim que o React assumir o controle
const removeLoader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.remove(), 600);
  }
};

// Executa após um pequeno delay para garantir que o primeiro frame do App apareceu
setTimeout(removeLoader, 100);
