import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import RestaurantSection from './Components/RestaurantSection'; // Ensure this file exists and is correctly exported

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
            <RestaurantSection />
        </div>
    );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);
