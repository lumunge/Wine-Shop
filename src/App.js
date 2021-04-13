import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart';
import Wine from './Components/Wine';
import './App.css';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      wines: [],
      cartItems: [],
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    axios.get('https://storage.googleapis.com/wineshop-assets/wine-shop.json')
      .then((res) => {
        const allWines = res.data;
        console.log(allWines);
        this.setState({
          wines: allWines
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  addToCart = (wine) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if(item.no === wine.no){
        item.count++;
        alreadyInCart=true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...wine, count: 1})
    }
    this.setState({
      cartItems: cartItems,
    })
  }

  clearCart = () => {
    this.setState({
      cartItems: [],
      amount: ''
    })
  }


  handleChange(e){
    this.setState({
        amount: e.target.value
    })
}



  render(){
    return(
      <div className="wrapper">
        <header>
          <h1>Wine Shop</h1>
          <p>wineshop.com</p>
        </header>
        <main>
          <div>
            <Cart 
              count={this.state.amount}
              cartItems={this.state.cartItems}
              clearCart={this.clearCart}
              amount={this.state.amount}
            />
          </div>
          <div className="wines">
            <Wine
              addToCart={this.addToCart}
              wines={this.state.wines}
              amount={this.state.amount}
              handleChange={this.handleChange}
            />
          </div>
        </main>
        <footer>
          <p>Copyright Wine Shop 2020</p>
        </footer>
      </div>
    )
  }
}