import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
    } from "react-icons/fa";
import './footer.scss';
 
const footer = () => {
    return (
        <div className="footer">  
            <div className="footer__Item">
                <h1>Location</h1>
                <h5>123 Willow Street</h5>
                <h5> Austin, TX 78702</h5>
            </div> 
            <div className="footer__Item">
                <h1>Contact</h1>
                <h5>(512) 555-0110</h5>
                <h5>template.placeholder@gmail.com</h5>
                <a href="https://www.facebook.com/omarfro"
                   className="social">
                    <FaFacebook color="#4968ad"  size="30px"/>
                </a>
                <a href="https://www.instagram.com/omar_alfroukh/" 
                   className="social">
                    <FaInstagram size="30px"/>
                </a>
                <a href="/" 
                   className="social">
                    <FaTwitter color="#49a1eb" size="30px"/>
                </a>
            </div>
            <div className="footer__Item">
                <h1>hours</h1>
                <h5>Tue – Thu, 8 am – 10 pm</h5>
                <h5>Fri – Sun, 8 am – 11 pm</h5>
                <h5>Closed Mondays</h5>
            </div> 
            <p className="clear"></p>
        </div>
    )
}

export default footer;