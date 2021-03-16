import React from 'react' 
import {
    FaFacebook,FaTwitter,FaInstagram
    } from "react-icons/fa"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {
//     faFacebook,
//     faInstagram,
//     faTwitter
// } from "@fortawesome/free-brands-svg-icons"
import './footer.css'
 
function footer() {
    return (
        <div className="footer"> 
            <div className="grid-container">
                <div className="col1">
                    <h1>Location</h1>
                    <h5>123 Willow Street</h5>
                    <h5> Austin, TX 78702</h5>
                </div> 
                <div className="col2">
                    <h1>Contact</h1>
                    <h5>(512) 555-0110</h5>
                    <h5>template.placeholder@gmail.com</h5>
                    <a href="/" className="facebook social"><FaFacebook  color="#4968ad" size="30px"/></a>
                    <a href="/" className="instagram social"><FaInstagram size="30px"/></a>
                    <a href="/" className="twitter social"><FaTwitter color="#49a1eb" size="30px"/></a>
                    {/* <a href="/" className="facebook social"><FontAwesomeIcon icon={faFacebook} color="#4968ad" size="2x"/></a> */}
                    
                </div>
                <div className="col3">
                    <h1>hours</h1>
                    <h5>Tue – Thu, 8 am – 10 pm</h5>
                    <h5>Fri – Sun, 8 am – 11 pm</h5>
                    <h5>Closed Mondays</h5>
                </div>
                {/* <div className="col4">  
                    <iframe src="./home"
                    // src="https://www.google.com/maps?sll=30.267153,-97.743061&q=+Austin,+TX,+United+States&z=11" 
                    width="90%" 
                    height="99%" 
                    title="Location"
                    ></iframe> 
                </div>  */}
            </div> 
        </div>
    )
}
export default footer;