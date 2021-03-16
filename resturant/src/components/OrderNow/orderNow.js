import React from 'react'
import item1 from './item1.jfif'
import item2 from './item2.jfif'
import item3 from './item3.jfif'
import item4 from './item4.jfif'
import item5 from './item5.jfif'
import item6 from './item6.jfif'
import {FaShoppingCart} from "react-icons/fa"
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import './orderNow.css'


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute !important', 
      right: theme.spacing(1),
      top: theme.spacing(1), 
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

function createItem(img,title,describe,price,count) {
    return {img,title,describe,price,count};
}
const items=[
    createItem(item1,'Take-Out Roman Dinner for Two',
    `A Roman feast for two people to share.
     Choose one antipasto, two primi (pastas),
      one secondi (main course) and one contorno
       (side dish). Add on a bottle of wine for an extra upcharge.`,
     50,0),
    createItem(item2,'Cocktail for Two: Espresso Martini',
    `Must be 21 to order. Must order at least one food item
     in addition to alcohol. The equivalent of two 4oz cocktails.
      Our espresso martini contains vodka, Varnelli Caffè Moka espresso liqueur
    , Meletti Cioccolato chocolate liqueur and Cardamaro amaro.`, 
    20,0),  
    createItem(item3,'Spinach Salad',
    `Spinach with Apples, Panelle & Speck.`, 
    16,0),
    createItem(item4,'Garganelli Bolognese',
    ``, 25,0),      
    createItem(item5,`Nonna's Meatballs`,
    `Made with beef and love. Just like nonna did!`,
     16,0),
    createItem(item6,
    `Branzino with Carrot and Salsa Verde`,
    `Mediterranean Seabass.`, 
    29,0), 
];
// function createOrderItems(title,price,count) {
//     return {title,price,count};
// }
// function creatPersonalInformation(name,address,phoneNumber,totalAmount){
//     return{name,address,phoneNumber,totalAmount};
// }
function OrderNow (){
    const [selectItems,setSelectItems]=React.useState([]);
    const [totalAmount, setTotalAmount]=React.useState(0);
    const [fullOrder, setFullOrder]=React.useState([]);
    const [open,setOpen]=React.useState(false);
    const [clintName, setClintName]=React.useState("");
    const [clintAddress, setClintAddress]=React.useState("");
    const [clintPhoneNumber, setClintPhoneNumber]=React.useState("");

    React.useEffect(() => {
        setSelectItems(items);
        setFullOrder([]);
      }, []);
    const handleClickOpen=()=>{setOpen(true);}
    const handleClose=()=>{setOpen(false);}
 
    const decreaseNumberOItems=(item, count)=>{
        if(count >= 1) {
            var array = [...selectItems]; // make a separate copy of the array
            var index = array.indexOf(item)
            if (index > -1) {
              array.splice(index, 1,{...array[index], count:count-1});//replace 1 count prop from index item
              setSelectItems([
                ...array,
              ]);
            }
            setTotalAmount(
                totalAmount - item.price
            )
        } 

    }
    const increaseNumberOItems=(item,count)=>{ 
            var array = [...selectItems]; // make a separate copy of the array
            var index = array.indexOf(item)
            if (index > -1) {
              array.splice(index, 1,{...array[index], count:count+1});//replace 1 count prop from index item
              setSelectItems([
                ...array,
              ]);
            } 
            setTotalAmount(
                totalAmount + item.price
            ) 

    }
    
    // const getPersonalInformation=()=>{
    //     let clintName= document.getElementById("clintName").value;
    //     let clintAddress= document.getElementById("clintAddress").value;
    //     let clintPhoneNumber= document.getElementById("clintPhoneNumber").value; 
    //     setFullOrder([
    //         clintName,
    //         clintAddress,
    //         clintPhoneNumber,
    //         totalAmount,
    //     ]);
    // }
    // const getOrderData=()=>{
    //     selectItems && selectItems.map((item)=>(
    //         <div>{item.count >=1?
    //             setFullOrder(...fullOrder,[//...fullOrder,
    //                 item.title,
    //                 item.count,
    //                 item.price,
    //             ])
    //         :null}</div>
    //     ))
    // }
    const validateText=()=>{  
        validateName("clintName","clintNameDemo");
        validateName("clintAddress","clintAddressDemo");
        validatePhoneNumber("clintPhoneNumber","clintPhoneNumberDemo"); 

        return validateName("clintName","clintNameDemo") &&
        validateName("clintAddress","clintAddressDemo") &&
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
            return valid;
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
            return valid;
        }
    }
    
        return (
            <div className="orderNow">
                <div className="clintInformation">
                    <form onSubmit={(event)=>{
                            event.preventDefault();
                            if(validateText()){ 
                                console.log(clintName);
                                console.log(clintAddress);
                                console.log(clintPhoneNumber); 
                              }
                               
                        }}>
                        <div className="clintInformationRow">
                            <label>Name*</label>
                            <div className="inputs">
                                <input dir="auto" type="text" id="clintName" 
                                value={clintName}
                                onChange={(event)=>setClintName(event.target.value)}
                                /> 
                                <p className="demo" id="clintNameDemo"></p>
                            </div>
                        </div>
                        <div className="clintInformationRow">
                            <label>Address*</label>
                            <div className="inputs">
                                <input dir="auto" type="text" id="clintAddress"
                                value={clintAddress}
                                onChange={(event)=>setClintAddress(event.target.value)}
                                />
                                <p className="demo" id="clintAddressDemo"></p>
                            </div>
                        </div>
                        <div className="clintInformationRow">
                            <label>phone Number*</label>
                            <div className="inputs">
                                <input dir="auto" type="text" id="clintPhoneNumber"
                                value={clintPhoneNumber}
                                onChange={(event)=>setClintPhoneNumber(event.target.value)}
                                />
                                <p className="demo" id="clintPhoneNumberDemo"></p>
                            </div>
                        </div>
                        <input type="submit" value="Order Now"/> 
                        {/* <div className="clear"></div> */}
                    </form>
                    
                </div>
                <div className="shoppingCart"> 
                    <a href="" onClick={(event)=>{
                        event.preventDefault();
                        handleClickOpen(); 
                    }}><h1>Cart</h1> <FaShoppingCart color="#fff" size="80px"  /></a>
                    
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            shopping Cart 
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                <div className="shoppingCartContent"> 
                                    <table>
                                         <tr>
                                            <th>Image</th>
                                            <th>Meal</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total price</th>
                                            <th>Change the order</th>
                                        </tr>
                                            {selectItems && selectItems.map((item)=>( 
                                                <tr> 
                                                    { item.count>=1? 
                                                            <td className="shoppingCartImages"><img src={item.img} width="90px" height="60px" /></td>  
                                                       :null} 
                                                    { item.count>=1? 
                                                            <td>{item.title}</td>  
                                                       :null} 
                                                       { item.count>=1? 
                                                            <td>{item.count}</td>  
                                                       :null} 
                                                       { item.count>=1? 
                                                            <td>{item.price}</td>  
                                                       :null} 
                                                       { item.count>=1? 
                                                            <td>{item.price*item.count}</td>  
                                                       :null} 
                                                       { item.count>=1? 
                                                            <td>
                                                                <div className="changeOrderFromCart">
                                                                    <button onClick={()=>{decreaseNumberOItems(item,item.count); }}>-</button>
                                                                    <button onClick={()=>{increaseNumberOItems(item,item.count);}}>+</button> 
                                                                </div>
                                                            </td>  
                                                       :null} 
                                              </tr>
                                              
                                             ))}
                                             <tr>
                                                <td></td>  
                                                <td></td>  
                                              </tr>
                                             <tr>
                                                <td>Total amount</td>  
                                                <td>{totalAmount}</td>  
                                              </tr>
                                    </table>
                                    
                               </div>
                            </Typography>
                         
                        </DialogContent>
                        {/* <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Save changes
                            </Button>
                        </DialogActions> */}
                    </Dialog>
                </div>
                <div className="clear"></div>
                <div className="selectOrder">
                    {/* <label>totalAmount= {totalAmount}</label> */}
                    <div className="selectOrderRow">
                        {selectItems && selectItems.map((item)=>(
                        <div className="selectOrderItem1">
                            <div className="addToOrder">
                                <button onClick={()=>{decreaseNumberOItems(item,item.count); }}>-</button>
                                <label>{`   `}{item.count}{`   `}</label>
                                <button onClick={()=>{increaseNumberOItems(item,item.count);}}>+</button> 
                            </div>
                            <div className="selectOrderImg">
                                <img src={item.img} width="100%" height="100%" alt=""/>
                            </div>
                            <h1>{item.title}</h1>
                            <div className="selectOrderDescribe">
                                <p>{item.describe}</p>
                            </div>
                            <h2>{item.price}{`$`}</h2>
                        </div>
                        ))}
                        <div className="clear"></div>
                    </div>
                    {/* <div className="selectOrderRow">
                        <div className="selectOrderItem1">
                            <div className="addToOrder">
                                <button onClick={()=>{ decreaseNumberOItems(); }}>-</button>
                                <label>{`   `}{}{`   `}</label>
                                <button onClick={()=>{increaseNumberOItems();}}>+</button> 
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
                            <button onClick={()=>{decreaseNumberOItems();}}>-</button>
                                <label>{`   `}{}{`   `}</label>
                                <button onClick={()=>{increaseNumberOItems();}}>+</button> 
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
                    </div> */}

                </div> 

                
            </div>
        )
    
}
export default OrderNow;