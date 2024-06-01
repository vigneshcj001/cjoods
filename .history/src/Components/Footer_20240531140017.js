import React from 'react';
import FooterStyles from './FooterStyles.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="bg-secondary text-center py-3">
                <p className="footer-content">Created by <span className='footer-heart'> &hearts;</span> Vigneshwaran.C.J. &copy; {new Date().getFullYear()} cj  </p>
            </div>
        </footer>
    );
}

export default Footer;
