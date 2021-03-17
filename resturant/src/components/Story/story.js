import React, { Component } from 'react'
import './story.css'
import storyImg from './story.jfif'
class story extends Component {
    render() {
        return (
            <div className="story">
                <div className="mainStoryImg">
                    <img src={storyImg} alt="" width="100%" height="100%"/>
                </div> 
                <div className="col-s-12 leftSide">
                    <div className="padding1">
                        <h1>Lead Staff</h1>
                        <br/>
                        <p>Lanny MacLeod<br/>
                        Executive Chef</p>
                    </div>    
                </div>
                <div className="col-s-12 rightSide">
                    <div className="padding2">
                        <div className="rightSideContent">
                            <h1>YOUR <br/>GRANDMOTHERS<br/> COOKING<br/> ON<br/> STEROIDS</h1><br/><br/>
                            <p>Tucked away on Toronto’s Mercer Street, Victor
                                Restaurant serves a chef-driven menu featuring
                                modern takes on classic dishes, delicious cocktails, and
                                a refined wine and beer list. With its chic yet
                                approachable atmosphere, Victor is the perfect
                                destination for a pre-theatre dinner, family dinner or a
                                romantic nightcap.</p>
                            <form action="/reservations">
                                <input type="submit" value="DINE WITH US" /> 
                            </form>
                        </div>
                    </div>
                </div>
                <div className="clear"></div> 
            </div>
        )
    }
}
export default story;