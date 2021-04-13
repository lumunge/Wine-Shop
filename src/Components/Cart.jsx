import React, { Component } from 'react'

export default class Cart extends Component {
    render() {

        const {cartItems} = this.props;


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
                <div className="cart-component">
                    <div className="text-center">
                        delivery
                    </div>
                    <div className="text-center">
                    <div>
                        {cartItems.length === 0 ? (
                            <div className="cart cart-header">Cart is Empty</div>
                        ) : (
                            <div className="cart cart-header">You have {cartItems.length} Items</div>
                        )}
                    </div>
                        <h1>{cartItems.length} <br/> Bottles</h1>
                    </div>
                    <div className="">
                        <span>36 x Wines234 </span>
                        <p>Ksh 432.56</p>
                    </div>
                    <div className="cart-btn">
                        <div className="">
                            <button className="btn btn-secondary">Empty Cart</button>
                        </div>
                        <div className="">
                            <button className="btn btn-dark">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// {cartItems.length === 0 ? (
//     <div>cart is empty</div>
// ) : (
//     <div> You have {cartItems.length} in teh cart{" " }
// )}