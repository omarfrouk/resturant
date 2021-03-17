import React, { Component } from 'react'
import "./homeBack.css"
import mainImage from './main.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
class homeBack extends Component {
    render() {
        return ( 
        <div className = "homeBack" >   
            <img src={mainImage} className="mainImg" alt="error"/>
            <div className="description">
                <p >A collaboration between chef Dinah Blackburn and interior designer Lee Rainwater,
                Hunter is where East Austin returns to the Old West. Styled like the saloons of yore,
                here you can sip cactus wine and enjoy the robust taste of farm-to-table American fare without the frills.</p>
            </div> 
            <div className="imagesRow">
                <div className="firstCol">
                    <img src={img1} alt=""width="100%" height="100%"/>
                </div>
                <div className="secCol">
                    <div className="firstImg">
                        <img src={img2} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="secImg">
                        <img src={img3} alt="" width="100%" height="100%"/>
                    </div>
                </div>
            </div>
            <div className="imagesRow">
                <div className="secCol">
                    <div className="firstImg">
                        <img src={img4} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="secImg">
                        <img src={img6} alt="" width="100%" height="100%"/>
                    </div>
                </div>
                    <div className="firstCol">
                        <img src={img5} alt="" width="100%" height="100%"/>
                    </div> 
            </div>
            <div className="imagesRow">
                <div className="halfCol">
                    <img src={img7} alt="" width="100%" height="100%"/>
                </div>
                <div className="halfCol">
                <img src={img8} alt="" width="100%" height="100%"/>
                </div>
            </div>
            <div className="clear"></div>  
            
        </div>
        )
    }
}

export default homeBack;