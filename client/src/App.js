//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Navbar from "./components/navbar";
import Homescreen from "./screens/screen";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CartScreen from "./screens/cartScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
