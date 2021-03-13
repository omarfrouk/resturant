import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/home";
import Gallery from "./containers/Gallery/gallery";
import Reservations from "./containers/Reservations/reservations";
import Menu from "./containers/Menu/menu";
import Story from "./containers/Story/story";
import OrderNow from "./containers/OrderNow/orderNow";

import './App.css';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/home">
          <Home/> 
        </Route>  
        <Route path="/gallery"> 
          <Gallery/> 
        </Route> 
        <Route path="/reservations"> 
          <Reservations/> 
        </Route> 
        <Route path="/menu"> 
          <Menu/> 
        </Route> 
        <Route path="/story"> 
          <Story/> 
        </Route> 
        <Route path="/orderNow"> 
          <OrderNow/> 
        </Route>
        <Route path="/">
          <Home/>  
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
