import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';

const AppLayout = () => {
  return <Header />;
};


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);
