import React  from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';  
import moment from 'moment';

import './reservations.css'


function Reservations(){
    const [name, setName]= React.useState("");
    const [phoneNumber, setPhoneNumber]= React.useState("");
    const [emailAddress, setEmailAddress]= React.useState("");
    const [time, setTime]= React.useState(moment().format("YYYY-MM-DDThh:mm"));
    const [numberOfGuests, setNumberOfGuests]= React.useState(1);
    const [comments, setComments]= React.useState(""); 
    
    const validate=()=>{ 
        validateUserName("name","nameDemo"); 
        validatePhoneNum("phoneNumber","phoneNumberDemo");
        validateEmailAddress("emailAddress","emailAddressDemo"); 
        return validateUserName("name","nameDemo") && 
        validatePhoneNum("phoneNumber","phoneNumberDemo") &&
        validateEmailAddress("emailAddress","emailAddressDemo");

        function validateUserName(fId, demo) {
            let text,
                err = "",
                valid = true;
            text = document.getElementById(fId).value;
            var userNameFormat = /^\W /; // allow letters, numbers, and underscores

            if (text === "") {
                valid = false;
                err = `Pleas enter ${fId}.`;
            } else if (userNameFormat.test(text)) {
                valid = false;
                err = `The ${fId} contains illegal characters.`;
            }

            if (!valid) document.getElementById(demo).innerHTML = err;
            else document.getElementById(demo).innerHTML = "";
            return valid;
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
            return valid;
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
            return valid;
            } 
    };
    
    return (
        <div className="reservations">
            <div className="col-s-12 reservationsDescription">
                {/* <div className="brief"> */}
                    <h1>Reservations</h1>
                    <br/>
                    <p>For parties of six or more,
                    we recommend making reservations at least two weeks in advance. For walk-ins,
                    we only seat parties on a first come, first served basis.</p>
                {/* </div> */}
            </div>
                
            {/* <div className="col-s-12 reservationsForm"> */}
                <form className="col-s-12 reservationsForm" onSubmit={(event)=>{
                        event.preventDefault(); 
                        if(validate()){
                            // alert(comments);
                        } 
                    }}>
                     
                    <div className="reservationsFormRow">
                        <label >Name*</label><br/>
                        <input dir="auto" type="text" id="name" className="inputs"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}
                        /> 
                    </div> 
                    <p className="demo" id="nameDemo"></p>  
                    <div className="reservationsFormRow"> 
                        <label>Phone Number*</label><br/>
                        <input dir="auto" type="text" id="phoneNumber" className="inputs"
                        value={phoneNumber}
                        onChange={(e)=>{
                            setPhoneNumber(e.target.value);
                        }}
                        />
                    </div>
                    <p className="demo" id="phoneNumberDemo"></p>   

                    <div className="reservationsFormRow"> 
                        <label>Email Address*</label><br/>
                        <input dir="auto" type="text" id="emailAddress" className="inputs"
                        value={emailAddress}
                        onChange={(e)=>{
                            setEmailAddress(e.target.value);
                        }}
                        />
                    </div>
                    <p className="demo" id="emailAddressDemo"></p><br/>  

                    <label>Date*</label>
                    <div className="date"> 
                        <TextField
                            id="datetime-local" 
                            type="datetime-local"
                            defaultValue={moment().format("YYYY-MM-DDThh:mm")} 
                            className="reservationDate"
                            value={time}
                            onChange={(e)=>{
                                setTime(e.target.value);
                            }} 
                        /> 
                    </div>
                    <p className="demo" id="dateDemo"></p><br/>

                    <label>Number of Guests *</label><br/> 
                    <Select
                        native 
                        className="numberOfGuests"
                        value={numberOfGuests}
                        onChange={(e)=>{
                            setNumberOfGuests(e.target.value);
                        }}
                        > 
                        <option selected value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                    </Select> 

                    <br/>
                    <label>Comments</label><br/>
                    <textarea  dir="auto" type="text" className="comments inputs"
                    value={comments}
                    onChange={(e)=>{
                        setComments(e.target.value);
                    }}
                    /> 
                    <div className="clear"></div> 
                    <input type="submit" className="submit" />        
                </form>  
            {/* </div>  */}
            <div className="clear"></div>
            
        </div>
    )
}

export default Reservations;