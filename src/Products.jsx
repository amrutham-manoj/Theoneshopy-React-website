import React, { Component } from "react";
import { connect } from "react-redux";
import util from "./util";
import { addToCart } from "./actions/cartActions";
import { fetchProducts } from "./actions/productActions";
import Fade from "react-reveal/Fade";
// import Modal from "react-modal";
// import Zoom from "react-reveal/Zoom";
class Products extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     product : null ,
  //   };
  // }
  componentDidMount() {
    this.props.fetchProducts();
  }
  // openModal = (product) => {
  //   this.setState({product});
  // };
  // closeModal = () => {
  //   this.setState({product: null});
  // };
  render() {
    // const {product}= this.state;
  
    
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
        <Fade bottom cascase>
          {/* <a href={"#" + product.id} onClick={()=> this.openModal(product)}></a> */}
          {/* <a
            href={`${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}> */}
            <img width="460" height="345" src={`products/${product.sku}_1.jpg`} alt={product.title} />  
            {/* <img src={`/products/${product.image}`} alt={product.title}></img> */}
             <p>{product.title}</p>
          {/* </a>  */}
          {/* <img src={'products/${product.sku2}'} ></img> */}
          <b>{util.formatCurrency(product.price)}</b>
          <button className="btn btn-primary" onClick={(e) => this.props.addToCart(this.props.cartItems , product)}>Add to cart</button>
          {/* <button className="btn btn-primary"
            onClick={(e) => this.props.handleAddToCart(e,product)}> Add to cart
          </button> */}
           </Fade>
           {/* {
              product && <Modal isOpen={true} onRequestClose={this.closeModal}>
               <Zoom >
                 <button className="close-modal" onClick={this.closeModal}> x </button>
                 <h1> This is the item you selected</h1>
               </Zoom>
             </Modal>
           } */}
        </div>
      </div>
     
      
    ));
   

    return <div className="row">{productItems}</div>;
  }

}

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);