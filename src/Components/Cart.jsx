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
            <div className="container">
                <div className="filter-component">
                    <h4>Filtering here</h4>
                    <div className="filter-header">
                    <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-showme-tab" data-bs-toggle="tab" data-bs-target="#nav-showme" type="button" role="tab" aria-controls="nav-showme" aria-selected="true">Show me</button>
                        <button className="nav-link" id="nav-showall-tab" data-bs-toggle="tab" data-bs-target="#nav-showall" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Show all</button>
                    </div>
                    </nav>

                    </div>
                    <div className="filter-content">
                        <div className="order">
                            <div className="">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item mr-3" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">White</button>
                            </li>
                            <li className="nav-item mr-3" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Red</button>
                            </li>
                            <li class="nav-item mr-3" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sparkling</button>
                            </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart-component">
                    <form onSubmit={this.createOrder} className="text-center">
                        <textarea name="deliveryNote" cols="20" rows="3" placeholder="Delivery text here..." onChange={this.handleCheck}></textarea>
                            {this.state.showCheckout && (
                                <button type="submit" className="buy-btn">Purchase</button>
                            )}
                    </form>
                    <div className="text-center mr-4">
                        {cartItems.length === 0 ? (
                            <h1>{cartItems.length} <br/> Bottles</h1>
                        ) : (
                            <h1>{amount} <br/> Bottles</h1>
                        )}
                    </div>
                    <div className="prices mr-4">
                        <div className="mb-4 amount">
                            <h4>{amount} x Wine Bottle</h4>
                        </div>
                        <div className="price">
                            <h4>{formatCurrency(
                                cartItems.reduce((a, b) => a + b.cost.bottle * amount, 0)
                            )}</h4>
                        </div>
                    </div>
                    <div className="cart-btn">
                        <div className="">
                            <button onClick={this.props.clearCart} className="btn btn-secondary">Empty Cart</button>
                        </div>
                        <div className="">
                            <button onClick={() => {this.setState({ showCheckout: true })}} className="btn btn-dark">Check Out</button>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
        )
    }
}

