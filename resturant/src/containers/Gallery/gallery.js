import React, { Component } from 'react'
// import Header from "../../components/Header/header"
// import Footer from "../../components/Footer/footer"
import Gallery from "../../components/Gallery/gallery"

class gallery extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        return (
            <div>
             {/* <Header/>  */}
             <Gallery/> 
             {/* <Footer/> */}
            </div>
        )
    }
}
export default gallery;