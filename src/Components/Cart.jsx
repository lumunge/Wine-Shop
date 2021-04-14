import React, { Component } from 'react'
import formatCurrency from '../utils';

export default class Cart extends Component {
    constructor(props){
        super();
        this.state = {
            showCheckout: false,
            deliveryNote: '',
        }
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            deliveryNote: this.state.deliveryNote,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order);
        this.setState({
            showCheckout: false
        })
    }

    render() {

        const {cartItems} = this.props;
        const {amount} = this.props;

        return (
                    <div className="container cart-component">
                    <form onSubmit={this.createOrder} className="delivery-form">
                        <textarea name="deliveryNote" cols="20" rows="3" placeholder="Delivery text here..." onChange={this.handleCheck}></textarea>
                            {this.state.showCheckout && (
                                <button type="submit" className="buy-btn">Purchase</button>
                            )}
                    </form>
                    <div className="cart-column">
                    <div className="bottles mr-4">
                        {cartItems.length === 0 ? (
                            <h1>{cartItems.length} <br/> Bottles</h1>
                        ) : (
                            <h1>{amount} <br/> Bottles</h1>
                        )}
                    </div>
                    <div className="prices mr-4">
                        <div className="amount">
                            <h4>{amount} x Wine Bottle</h4>
                        </div>
                        <div className="price">
                            <h4>{formatCurrency(
                                cartItems.reduce((a, b) => a + b.cost.bottle * amount, 0)
                            )}</h4>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className="">
                            <button className="filter-btn" onClick={this.props.clearCart}>Empty Cart</button>
                        </div>
                        <div className="">
                            <button className="cart-btn" onClick={() => {this.setState({ showCheckout: true })}}>Check Out</button>
                        </div>
                    </div>
                    </div>
        )
    }
}

