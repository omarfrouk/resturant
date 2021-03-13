import React, { Component } from 'react'
import Header from '../../components/Header/header'
import Story from '../../components/Story/story'
import Footer from '../../components/Footer/footer'
class story extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Story/>     
                <Footer/>
            </div>
        )
    }
}
export default story;