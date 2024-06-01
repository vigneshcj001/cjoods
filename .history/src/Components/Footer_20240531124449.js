import React from 'react';
import FooterStyles from './FooterStyles.css'; // Ensure this file exists and is correctly imported

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="bg-secondary text-center py-3">
                <p className="mb-0" style={{ fontSize: 100, color: 'red' }}>&hearts;</p>
            </div>
        </footer>
    );
}

export default Footer;
