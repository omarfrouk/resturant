import React, { Component } from 'react'
import Header from "../../components/Header/header"
import OrderNow from "../../components/OrderNow/orderNow"
import Footer from "../../components/Footer/footer"

class orderNow extends Component {
    render() {
        return (
            <div>
                <Header/>
                <OrderNow/>
                <Footer/>
            </div>
        )
    }
}
export default orderNow;