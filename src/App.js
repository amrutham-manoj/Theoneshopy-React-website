import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./Products";
import Filter from "./Filter";
import Basket from "./Basket";
import store from "./store";
import "./App.css";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router , Link , Route,Switch } from 'react-router-dom';
  


class App extends Component {
  render() {
    return (
      <>
      <div className="container"> 
      <Provider store={store}>
        {/* <div className="container"> */}
          <h1 id="name">THE ONE SHOPY</h1>
          <Router>
           <div className="App">
            <ul className="App-header">
              
              <button className="btn btn-primary"> <Link to="/" className="home"> HOME</Link> </button>
              
              
              <button className="btn btn-primary">  <Link to="/about" className="about">ABOUT US</Link> </button>
            
            
              <button className="btn btn-primary"> <Link to="/contact" className="contact">CONTACT US</Link> </button>
              
            </ul>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Contact}></Route>
            </Switch>
          </div>
       </Router>
       
 
         
        {/* </div> */}
      </Provider>
      </div>
      </>
    );
  }
}

export default App;