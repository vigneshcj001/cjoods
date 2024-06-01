import React from 'react';
import FooterStyles from './FooterStyles.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="bg-secondary text-center py-3">
                <p className="footer-content">Created by &hearts; Vigneshwaran.C.J. &copy; {new Date().getFullYear()} CJFoods  </p>
            </div>
        </footer>
    );
}

export default Footer;
