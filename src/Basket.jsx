import React, { Component } from "react";
import { connect } from "react-redux";
import util from "./util";
import { addToCart, removeFromCart } from "./actions/cartActions";
import LoginPage from "./LoginPage";
import {Route} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Basket extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name : "",
  //     email : "",
  //     phone:"",
  //     showCheckout: false,
  //   };
  // }

  handleSubmit=()=>{
  
  //  this.setState({[e.target.name]: e.target.value});
       alert("YOUR RESPONSE SUBMITTED");     

  };

  
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? ("Basket is empty" ) : (
          <div>
           <b> You have {cartItems.length} items in the basket.</b> <hr />
          </div>
        )}
        
        {cartItems.length > 0 && (
          <div>
            <Fade left cascade>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }>
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <b>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            {/* <button onClick={() => alert("ALL ITEMS ADDED SUCCESSFULLY TO CART")}
              className="btn btn-primary"> checkout
            </button> */}
            <button onClick={this.handleSubmit} className="btn btn-danger">checkout</button>
            </Fade>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);