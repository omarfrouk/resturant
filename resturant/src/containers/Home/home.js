import React, { PureComponent } from 'react'
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import './home.css'
class home extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="home">
                <Header/>
                <Footer/>
            </div>
        )
    }
}
export default home;