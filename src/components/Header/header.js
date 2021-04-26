import React, {useState} from 'react';
import { FaTypo3, FaTimes,FaBars } from "react-icons/fa";
import classNames from "classnames";
import './header.scss'; 

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="header">  
            <a href="/home" 
               className="header__NavHunter">
                HUNTER 
                <FaTypo3 size="30px"/>
            </a>
            <div onClick={handleClick}>
                {
                    click
                        ?
                            <FaTimes className="header__MenuIcon" 
                                     size="35px"
                            />
                        : 
                            <FaBars className="header__MenuIcon"  
                                    size="35px"
                            />  
                }  
            </div>
            <div className={classNames("header__MenuBar", {
                "display": click
            })}> 
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

export default Header;