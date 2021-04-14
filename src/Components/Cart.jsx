import React, { Component } from 'react'
import formatCurrency from '../utils';
import Modal from 'react-modal';

export default class Cart extends Component {
    constructor(props){
        super();
        this.state = {
            showCheckout: false,
            fullname: '',
            mobile: '',
            email: '',
            address: '',
            deliveryNote: '',
        }
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    openCheckout = (e) => {
        this.setState({
            showCheckout: true
        })
    }

    closeCheckout = (e) => {
        this.setState({
            showCheckout: false
        })
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            email: this.state.email,
            address: this.state.address,
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
        const {caseAmount} = this.props;
        const {bottleAmount} = this.props;
        const bottles = bottleAmount;
        const totalBottleCost = cartItems.reduce((a, b) => a + b.cost.bottle  * bottleAmount, 0);
        const totalCaseCost = cartItems.reduce((a, b) => a + b.cost.case  * caseAmount, 0);
        const totalCost = totalBottleCost + totalCaseCost;

        return (
                    <div className="container cart-component">
                        <div>
                            <div className="delivery-info">
                                <h4 className="text-success">Delivery Info: </h4>
                                Fullname: <span> {this.props.fullname} </span> <br/>
                                Mobile: <span> {this.props.mobile} </span> <br/>
                                Email: <span> {this.props.email} </span> <br/>
                                Address: <span> {this.props.address} </span> <br/>
                                {/* <p>Merch: <span>{this.props.cartItems} </span></p> */}
                            </div>
                            <div className="checkout">
                            {this.state.showCheckout && (
                            <Modal isOpen={true} onRequestClose={this.closeCheckout} className="checkout-modal">
                                <button className="close-checkout" onClick={this.closeCheckout}>X</button>
                                    <form onSubmit={this.createOrder} className="delivery-form">
                                        <small>Enter Your Details To Proceed With Purchase</small>
                                        <div className="pb-2">
                                            <input name="fullname" className="form-control" type="text" placeholder="full names..." onChange={this.handleCheck} />
                                        </div>
                                        <div className="pb-2">
                                            <input name="mobile" className="form-control" type="number" placeholder="Mobile..." onChange={this.handleCheck} />
                                        </div>
                                        <div className="pb-2">
                                            <input name="email" className="form-control" type="email" placeholder="Email Address..." onChange={this.handleCheck} />
                                        </div>
                                        <div className="pb-2">
                                            <input name="address" className="form-control" type="text" placeholder="Location, buruburu..." onChange={this.handleCheck} />
                                        </div>
                                        <div className="pb-2">
                                            <textarea name="deliveryNote" className="form-control" cols="20" rows="3" placeholder="Delivery text here..." onChange={this.handleCheck}></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="buy-btn">Purchase</button>
                                        </div>
                                    </form>
                            </Modal>
                            )}
                            </div>
                        </div>
                        
                    <div className="cart-column">
                    <div className="bottles mr-4">
                        {cartItems.length === 0 ? (
                            <h1>{cartItems.length} <br/> Bottles</h1>
                        ) : (
                            <h1>{bottles}<br/> Bottles</h1>
                        )}
                    </div>
                    <div className="prices mr-4">
                        <div className="amount">
                            <h5>{bottleAmount} x Wine Bottle</h5>
                            <h5>{caseAmount} x Wine Case</h5>
                        </div>
                        <div className="price">
                            <h4>{formatCurrency(totalCost)}</h4>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className="">
                            <button className="filter-btn" onClick={this.props.clearCart}>Clear Cart</button>
                        </div>
                        <div className="">
                            <button className="cart-btn" onClick={() => {this.setState({ showCheckout: true })}}>Check Out</button>
                        </div>
                    </div>
                    </div>
        )
    }
}

