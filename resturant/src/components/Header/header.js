import React from 'react'
import './header.css'

function header(props) {
    return (
        <div  className="header"> 
                <a href="/home" className="navHunter">HUNTER</a>
                <a href="" className="navMenu">Menu</a> 
                <a href="" className="nav">Reservations</a>  
                <a href="" className="nav">Order Now</a> 
                <a href="" className="nav">Story</a> 
                <a href="" className="nav">Gallery </a> 
        </div>
    )
}
export default header;