import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import FooterStyles from "./FooterStyles.css";
import FooterCJ from "../../images/footer-logo.png";



const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">

            <div className="bg-secondary text-center py-3">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} CJFoods Website. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;