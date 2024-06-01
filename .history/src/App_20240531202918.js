import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import RestaurantSection from './Components/RestaurantSection'
const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
            <Rest
            <Footer/>
        </div>
    );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);
