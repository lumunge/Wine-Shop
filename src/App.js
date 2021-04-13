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
      wines: []
    }
  }
  state={

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
              count={this.state.wines.length}
            />
          </div>
          <div className="wines">
            <Wine
              wines={this.state.wines}
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