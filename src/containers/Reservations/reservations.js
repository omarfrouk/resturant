import React, { Component } from 'react'
// import Header from "../../components/Header/header"
// import Footer from "../../components/Footer/footer"
import Reservations from "../../components/Reservations/reservations" 
class reservations extends Component {
    render() {
        return (
            <div className="reservations">
            {/* <Header/> */}
            <Reservations/>
            {/* <Footer/> */}
            </div>
        )
    }
}
export default reservations;