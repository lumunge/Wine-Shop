import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart';
import Wine from './Components/Wine/Wine';
import './App.css';
import Filter from './Components/Filter/Filter';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      wines: localStorage.getItem("allWines") ? JSON.parse(localStorage.getItem("allWines")) : [],
      cartItems: [],
      bottleAmount: '',
      caseAmount: '',
      variety: '',
      sort: '',
      fullname: '',
      mobile: '',
      email: '',
      address: '',
      smallCart: true
    }
    this.handleBottleChange = this.handleBottleChange.bind(this);
    this.handleCaseChange = this.handleCaseChange.bind(this);
  }

  showCart = () => {
    this.setState({
      smallCart: !this.state.smallCart
    });
  }

  createOrder = (order) => {
    this.setState({
      fullname: order.fullname,
      cartItems: order.cartItems,
      mobile: order.mobile,
      email: order.email,
      address: order.address
    })
    alert("Your Order Was Placed Successfully")
  }

  componentDidMount = () => {
    this.getWines();
  }

  getWines = () => {
    axios.get('https://storage.googleapis.com/wineshop-assets/wine-shop.json')
      .then((res) => {
        const allWines = res.data;
        localStorage.setItem("allWines", JSON.stringify(allWines));
        this.setState({
          wines: allWines
        })
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
      bottleAmount: '',
      caseAmount: '',
      fullname: '',
      mobile: '',
      email: '',
      address: ''
    })
  }


  handleBottleChange(e){
    this.setState({
        bottleAmount: e.target.value,
        
    })
}

  handleCaseChange(e){
    this.setState({
      caseAmount: e.target.value
    })
  }

filterWines = (e) => {
  if (e.target.value === "") {
    this.setState({ 
      variety: e.target.value, 
      wines: this.state.wines
    });
  } else {
    this.setState({
      variety: e.target.value,
      wines: this.state.wines.filter(wine => wine.tags.indexOf(e.target.value) >= 0)
    });
  }
};


sortWines = (e) => {
  const sort = e.target.value;
  this.setState((state) => ({
    sort: sort,
    wines: this.state.wines.sort((a, b) => 
    sort === "bottle-price" ?
    a.cost.bottle > b.cost.bottle ?
    1 : -1:
    sort === "case-price" ? 
    a.cost.case > b.cost.case ?
    1: -1:
    a.no > b.no ?
    1 : -1 ),
  }));
};



  render(){
    return(
      <div className="wrapper">
        <header>
          <h1 data-testid="heading">Wine Shop</h1>
          <p data-testid="url">wineshop.com</p>
        </header>
        <main>
          <div className="header">
            <Filter 
              sort={this.state.sort}
              filterWines={this.filterWines}
              sortWines={this.sortWines}            
            />
            <div className={this.state.smallCart ? "cart" : "cart cart-show"}>
            <Cart 
              count={this.state.wines}
              fullname={this.state.fullname}
              mobile={this.state.mobile}
              email={this.state.email}
              address={this.state.address}
              cartItems={this.state.cartItems}
              clearCart={this.clearCart}
              bottleAmount={this.state.bottleAmount}
              caseAmount={this.state.caseAmount}
              createOrder={this.createOrder}
              smallCart={this.state.smallCart}
              showCart={this.showCart}
            />
            </div>
          </div>
          <div className="wines">
            <Wine
              addToCart={this.addToCart}
              wines={this.state.wines}
              bottleAmount={this.state.bottleAmount}
              caseAmount={this.state.caseAmount}
              handleCaseChange={this.handleCaseChange}
              handleBottleChange={this.handleBottleChange}
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
