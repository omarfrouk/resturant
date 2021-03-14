import React, { Component } from 'react'

import './reservations.css'
class reservations extends Component {
    validate=(event)=>{
        event.preventDefault();
        validateUserName("firstName","firstNameDemo");
        validateUserName("lastName","lastNameDemo");
        validatePhoneNum("phoneNumber","phoneNumberDemo");
        validateEmailAddress("emailAddress","emailAddressDemo");
        validateNumberOfGuests("numberOfGuests","numberOfGuestsDemo");
        validateDate("day","month","year","dateDemo");

        function validateUserName(fId, demo) {
            let text,
                err = "",
                valid = true;
            text = document.getElementById(fId).value;
            var userNameFormat = /\W/; // allow letters, numbers, and underscores

            if (text === "") {
                valid = false;
                err = `Pleas enter ${fId}.`;
            } else if (userNameFormat.test(text)) {
                valid = false;
                err = `The ${fId} contains illegal characters.`;
            }

            if (!valid) document.getElementById(demo).innerHTML = err;
            else document.getElementById(demo).innerHTML = "";
        }

        function validatePhoneNum(fId, demo){
            let text,
                err = "",
                valid = true;
            text = document.getElementById(fId).value;
            var numsFormat=/^[0-9]*$/;
            if (text === "") {
                valid = false;
                err = `Pleas enter ${fId}.`;
            } else if (!numsFormat.test(text)) {
                valid = false;
                err = `The ${fId} contains illegal characters.`;
            }

            if (!valid) document.getElementById(demo).innerHTML = err;
            else document.getElementById(demo).innerHTML = ""; 
        }
        function validateEmailAddress(fId, demo) {
            let text,
                err = "",
                valid = true;
            text = document.getElementById(fId).value;

            var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (text === "") {
                valid = false;
                err = "Pleas enter your email address.";
                //} else if (!text.match(mailFormat)) {
            } else if (!mailFormat.test(text)) {
                err = "You entered an invalid email address.";
                valid = false;
            }
            if (!valid) document.getElementById(demo).innerHTML = err;
            else document.getElementById(demo).innerHTML = "";
            }




            function validateNumberOfGuests(fId, demo){
            let text,
                err = "",
                valid = true;
            text = document.getElementById(fId).value;
            var zerosFormat=/^0*$/;
            if (text === "") {
                valid = false;
                err = `Pleas enter ${fId}.`;
            } 
            else if(text==="0" ||zerosFormat.test(text)){
                valid = false;
                err = `Pleas enter valid ${fId}.`;
            }

            if (!valid) document.getElementById(demo).innerHTML = err;
            else document.getElementById(demo).innerHTML = ""; 
        }
        function validateDate(fId1,fId2,fId3,demo){
            let text1,text2,text3,
                err = "",
                valid = true;
            text1 = document.getElementById(fId1).value;
            text2 = document.getElementById(fId2).value;
            text3 = document.getElementById(fId3).value;

            var zerosFormat=/^0*$/;
            var numsFormat=/^[0-9]*$/;
            if (text1 === ""||text2 === ""||text3 === "") {
                valid = false;
                err = `Pleas enter valid date.`;
            } 
            else if(text1==="0"||text2==="0"||text3==="0" ||zerosFormat.test(text1)||zerosFormat.test(text2)||zerosFormat.test(text3)){
                valid = false;
                err = `Pleas enter valid date.`;
            } else if (!numsFormat.test(text1)||!numsFormat.test(text2)||!numsFormat.test(text3)) {
                valid = false;
                err = `Pleas enter valid date.`;
            }

            if (!valid) document.getElementById(demo).innerHTML = err;
            else document.getElementById(demo).innerHTML = ""; 
        }



    };
    render() {
        return (
            <div className="reservations">
                <div className="reservationsDescription">
                    <div className="brief">
                        <h1>Reservations</h1>
                        <br/>
                        <p>For parties of six or more,
                        we recommend making reservations at least two weeks in advance. For walk-ins,
                        we only seat parties on a first come, first served basis.</p>
                    </div>
                </div>
                 
                <div className="reservationsForm">
                    <form >
                        <label >Name*</label>
                        <div className="name">
                            <div  className="firstName">
                                <input dir="auto" type="text" id="firstName" className="inputs"/><br/>
                                <label >First Name</label>
                                <p className="demo" id="firstNameDemo"></p>
                                
                            </div>
                            <div className="lastName">
                                <input dir="auto" type="text" id="lastName" className="inputs"/><br/>
                                <label >Last Name</label>
                                <p className="demo" id="lastNameDemo"></p>
                                
                            </div>
                        </div> 
                        
                        <br/> 
                            <label>Phone Number*</label><br/>
                            <input dir="auto" type="text" id="phoneNumber" className="inputs"/><br/><br/>
                            <p className="demo" id="phoneNumberDemo"></p> 
                        <br/>
                        <label>Email Address*</label><br/>
                        <input dir="auto" type="text" id="emailAddress" className="inputs"/><br/><br/>
                        <p className="demo" id="emailAddressDemo"></p>
                        
                        <br/>
                        <label>Date*</label>
                        <div className="date">
                            <div className="day">
                                <input dir="auto" type="text" id="day" /><br/>
                                <label>DD</label>
                            </div>
                            <div className="month">
                                <input dir="auto" type="text" id="month"/><br/> 
                                <label>MM</label>
                            </div>
                            <div className="year">
                                <input dir="auto" type="text" id="year"/><br/> 
                                <label>YYYY</label>
                            </div>  
                        </div>
                        <p className="demo" id="dateDemo"></p>

                        <br/>
                        <label>Number of Guests *</label><br/>
                        <input dir="auto" type="text" id="numberOfGuests" className="inputs"/><br/><br/>
                        <p className="demo" id="numberOfGuestsDemo"></p>

                        <br/>
                        <label>Comments</label><br/>
                        <textarea  dir="auto" type="text" className="comments inputs"/><br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/> 
                        <input type="submit" className="submit " onClick={this.validate}/>
                    </form>  
                </div> 
                <div className="clear"></div>
                
            </div>
        )
    }
}
export default reservations;