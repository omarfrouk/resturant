import React  from 'react'
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import HomeBack from "../../components/HomeBack/homeBack"
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
                <HomeBack/>

                <Footer/>
            </div>
        )
    }
}
export default home;