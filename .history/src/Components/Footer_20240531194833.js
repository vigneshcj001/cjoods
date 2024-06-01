import React from 'react';
import './FooterStyles.css'; 

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="bg-secondary text-center py-3">
                <p className="footer-content">
                    Created by    
                    <a 
                        href="https://www.linkedin.com/in/vigneshwarancj1"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link"
                    >
                         Vigneshwaran.C.J 
                    </a>  
                    <span className='footer-heart'> &hearts;</span> 
                    &copy; {new Date().getFullYear()} 
                    <span className='footer-cj'> cj</span>   
                </p>
            </div>
        </footer>
    );
}

export default Footer;
