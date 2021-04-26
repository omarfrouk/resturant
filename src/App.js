import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import Home from "./containers/Home/home";
import Gallery from "./containers/Gallery/gallery";
import Reservations from "./containers/Reservations/reservations";
import Menu from "./containers/Menu/menu";
import Story from "./containers/Story/story";
import OrderNow from "./containers/OrderNow/orderNow";
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './App.scss';

function App() {
  return (
    <Router >
      <Header />
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
        <Redirect from="/"
                  to="/home"/>
        <Redirect from="*"
                  to="/home"/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
