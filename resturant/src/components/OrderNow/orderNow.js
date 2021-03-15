import React from 'react'
import item1 from './item1.jfif'
import item2 from './item2.jfif'
import item3 from './item3.jfif'
import item4 from './item4.jfif'
import item5 from './item5.jfif'
import item6 from './item6.jfif'


import './orderNow.css'

function createItem(id,count) {
    return{id, count}
}
const item=[
    1,2,3
]
function OrderNow (){
    const [items,setItems]=React.useState(item);
    const [id,setId]=React.useState(0);
    React.useEffect(() => {
        setItems(item);
      }, []);
    

    const decreaseNumberOItems=()=>{
        if(items[id]!==0)
        setItems([ ...items,
            items[id]-1
        ])
    }
    const increaseNumberOItems=()=>{
        // setItems([ ...items,
        //     items[id]+1
        // ])
        var array = [...items]; // make a separate copy of the array
        var index = array.indexOf(id)
        if (index > -1) {
          array.splice(index, 1,{...array[index], 0:5});//replace 1 name prop from index row
          setItems([
            ...array,
          ]);
        }
    }
    
    const validateText=(event)=>{ 
        event.preventDefault();
        validateName("clintName","clintNameDemo");
        validateName("clintAddress","clintAddressDemo");
        validatePhoneNumber("clintPhoneNumber","clintPhoneNumberDemo"); 
        function validateName(fId,demo){ 
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
        function validatePhoneNumber(fId,demo){
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
    }
    
        return (
            <div className="orderNow">
                <div className="clintInformation">
                    <form >
                        <div className="clintInformationRow">
                            <label>Name*</label>
                            <div className="inputs">
                                <input type="text" id="clintName" /> 
                                <p className="demo" id="clintNameDemo"></p>
                            </div>
                        </div>
                        <div className="clintInformationRow">
                            <label>Address*</label>
                            <div className="inputs">
                                <input type="text" id="clintAddress"/>
                                <p className="demo" id="clintAddressDemo"></p>
                            </div>
                        </div>
                        <div className="clintInformationRow">
                            <label>phone Number*</label>
                            <div className="inputs">
                                <input type="text" id="clintPhoneNumber"/>
                                <p className="demo" id="clintPhoneNumberDemo"></p>
                            </div>
                        </div>
                        <input type="submit" value="Order Now" onClick={validateText} />
                        <div className="clear"></div>
                    </form>
                </div>

                <div className="selectOrder">
                    <div className="selectOrderRow">
                        <div className="selectOrderItem1">
                            <div className="addToOrder">
                                <button onClick={()=>{setId(0); decreaseNumberOItems(); }}>-</button>
                                <label>{`   `}{items[0]}{`   `}</label>
                                <button onClick={()=>{setId(0); increaseNumberOItems();}}>+</button> 
                            </div>
                            <div className="selectOrderImg">
                                <img src={item1} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>Take-Out Roman Dinner for Two</h1>
                            <div className="selectOrderDescribe">
                                <p>A Roman feast for two people to share. Choose one antipasto,
                                two primi (pastas), one secondi (main course) and one contorno (side dish).
                                Add on a bottle of wine for an extra upcharge.</p>
                            </div>
                            <h2>50$</h2>
                        </div> 

                        <div className="selectOrderItem2">
                            <div className="addToOrder">
                            <button onClick={()=>{setId(1);console.log(id); decreaseNumberOItems();}}>-</button>
                                <label>{`   `}{items[1]}{`   `}</label>
                                <button onClick={()=>{setId(1); increaseNumberOItems();}}>+</button> 
                            </div>
                            <div className="selectOrderImg">
                            <img src={item2} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>Cocktail for Two: Espresso Martini</h1>
                            <div className="selectOrderDescribe">
                                <p>Must be 21 to order. Must order at least one food item in
                                    addition to alcohol. The equivalent of two 4oz cocktails.
                                    Our espresso martini contains vodka, Varnelli Caffè Moka espresso liqueur, 
                                Meletti Cioccolato chocolate liqueur and Cardamaro amaro.</p>
                            </div>
                            <h2>20$</h2>
                        </div> 

                        <div className="selectOrderItem3">
                            <div className="selectOrderImg">
                            <img src={item3} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>Spinach Salad</h1>
                            <div className="selectOrderDescribe">
                                <p>Spinach with Apples, Panelle & Speck.</p>
                            </div>
                            <h2>16$</h2>
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div className="selectOrderRow">
                        <div className="selectOrderItem1">
                            <div className="selectOrderImg">
                                <img src={item4} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>Garganelli Bolognese</h1>
                            <div className="selectOrderDescribe">
                                <p> </p>
                            </div>
                            <h2>25$</h2>
                        </div> 

                        <div className="selectOrderItem2">
                            <div className="selectOrderImg">
                            <img src={item5} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>Nonna's Meatballs</h1>
                            <div className="selectOrderDescribe">
                                <p>Made with beef and love. Just like nonna did!</p>
                            </div>
                            <h2>16$</h2>
                        </div> 

                        <div className="selectOrderItem3">
                            <div className="selectOrderImg">
                            <img src={item6} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>Branzino with Carrot and Salsa Verde</h1>
                            <div className="selectOrderDescribe">
                                <p>Mediterranean Seabass.</p>
                            </div>
                            <h2>29$</h2>
                        </div>
                        <div className="clear"></div>
                    </div>

                </div> 

                
            </div>
        )
    
}
export default OrderNow;