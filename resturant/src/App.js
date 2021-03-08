import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/home";
import './App.css';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/home">
          <Home/>
        </Route> 
        <Route path="/">
          <Home/>
        </Route>
         
      </Switch>
    </Router>
  );
}

export default App;
