import React, { Component } from 'react'
import gall1 from './gall1.jpg'
import gall2 from './gall2.jpg'
import gall3 from './gall3.jpg'
import gall4 from './gall4.jpg'
import gall5 from './gall5.jpg'
import gall6 from './gall6.jpg'
import gall7 from './gall7.jpg'
import gall8 from './gall8.jpg'
import gall10 from './gall10.jpg'
import gall11 from './gall11.jpg'
import gall12 from './gall12.jfif'


import './gallery.css'
class gallery extends Component {
    render() {
        return (
            <div className="gallery"> 
                <div className="row">
                    <div className="oneThirdCol">
                        <img src={gall2} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="resetOneThirdCol">
                      <img src={gall1} alt="" width="100%" height="100%"/>
                    </div> 
                </div> 
                <div className="row">
                    <div className="hafCol">
                        <img src={gall3} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="hafCol">
                      <img src={gall4} alt="" width="100%" height="100%"/>
                    </div> 
                </div> 
                <div className="row">
                    <div className="fullCol">
                        <img src={gall5} alt="" width="100%" height="100%"/>
                    </div>
                </div>
                <div className="row">
                    <div className="hafCol">
                        <img src={gall6} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="hafCol">
                      <img src={gall7} alt="" width="100%" height="100%"/>
                    </div> 
                </div> 
                <div className="row">
                    <div className="fullCol">
                        <img src={gall8} alt="" width="100%" height="100%"/>
                    </div>
                </div>

                <div className="row">
                    <div className="oneThirdCol">
                        <img src={gall10} alt="" width="100%" height="100%"/>
                    </div>
                    <div className="resetOneThirdCol">
                      <img src={gall11} alt="" width="100%" height="100%"/>
                    </div> 
                </div> 
                <div className="row">
                    <div className="fullCol">
                        <img src={gall12} alt="" width="100%" height="100%"/>
                    </div>
                </div>

            </div>
        )
    }
}
export default gallery;
