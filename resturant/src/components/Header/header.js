import React from 'react'
import './header.css' 
function header(props) {
    return (
        <div  className="header">  
            <div className="col-s-3 navHunter">
                <a href="/home" >HUNTER</a>
            </div>
            <div className="col-s-9 nav">
                {/* <a className="navMenu"></a> */}
                <a href="/menu" >Menu</a> 
                <a href="/reservations" >Reservations</a>  
                <a href="/orderNow" >Order Now</a> 
                <a href="/story" >Story</a> 
                <a href="/gallery" >Gallery </a> 
            </div>
            <div className="clear"></div>
        </div>
    )
}
export default header;