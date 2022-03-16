import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Home from './components/pages/Home';
import { Products } from './components/pages/Products';
import './App.css';
import Login from "./components/pages/Login/Login";
// import 
import 'bootstrap/dist/css/bootstrap.min.css';

import { TrackJS } from 'trackjs';
TrackJS.install({
  token: "c9c8f83f70914d35bf7b5913cad66220",
  application: "bazaar"
});


function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app__stickedBar ">
          <div className="row">
            <div className="col-2">
              <img className="app__logo" src={`/logo.png`} alt="logo" />
            </div>            
            <div className="col-6 app__navContainer d-block">
                <ul>
                  <li className = "d-inline app__listItem"> <Link to="/">Home</Link> </li>
                  <li className = "d-inline app__listItem"> <Link to="/products">Products</Link> </li> 
                </ul>
            </div>

            <div className="col-4 app__rightContainer">
              <div className="app__rightNav">
                <Link to="/signIn">Sign In</Link>
                <Link to="/register">Register</Link>
              </div>
              <div className="app__cart">
                <img src={'/static/images/cart.svg'} alt="cart" />
              </div>
            </div>
          </div>            
        
        </div>
      </div>
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/register" element={<Home />} />
      </Routes >
    </Router>
  );
}



export default App;

