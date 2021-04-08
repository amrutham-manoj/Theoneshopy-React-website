import React, { Component } from 'react';
import Products from "./Products";
import Filter from "./Filter";
import Basket from "./Basket";

 class Home extends Component {
    render() {
        return (
            <div>
               <h1>The home page </h1> 
               <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
             
            </div>
          </div>
                
            </div>
        )
    }
}

export default Home
