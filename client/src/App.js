//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Navbar from "./components/navbar";
import "bootstrap";
import Homescreen from "./screens/screen";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CartScreen from "./screens/cartScreen";
import RegisterScreen from "./screens/registerScreen";
import LoginScreen from "./screens/loginScreen";
import Address from "./components/address";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/address" exact component={Address} />
      </BrowserRouter>
    </div>
  );
}

export default App;
