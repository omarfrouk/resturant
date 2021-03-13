import React from 'react'
import './header.css' 
function header(props) {
    return (
        <div  className="header">  
                <a href="/home" className="navHunter">HUNTER</a>
                <a className="navMenu"></a>
                <a href="/menu" className="nav">Menu</a> 
                <a href="/reservations" className="nav">Reservations</a>  
                <a href="/orderNow" className="nav">Order Now</a> 
                <a href="/story" className="nav">Story</a> 
                <a href='/gallery' className="nav">Gallery </a> 
        </div>
    )
}
export default header;