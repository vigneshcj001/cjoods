import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import FooterStyles from "./FooterStyles.css";
import FooterCJ from "../../images/footer-logo.png";



const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-4">
                        <div className="text-center">
                            <img className="FooterCJ" src={FooterCJ} alt="CJ Logo" />
                        </div>
                        <div>
                            <p className="text-center">
                                CJFoods: Your go-to destination for delicious cuisine delivered right to your doorstep!
                            </p>
                            <p className="text-center">
                                Indulge in a diverse menu and experience swift, flavorful food delivery at your convenience.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center">
                            <h3>Mail Me</h3>
                            <form className="form-inline">
                                <div className="form-group mb-2">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <button type="submit" className="btn btn-dark mb-2">Send</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-center">
                            <h5>Contact Us</h5>
                            <p>
                                Email: cjfoods@gmail.com
                            </p>
                            <p>
                                Phone Number: +91 12345 67890
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-secondary text-center py-3">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} CJFoods Website. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;