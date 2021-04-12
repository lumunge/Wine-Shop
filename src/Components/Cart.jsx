import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                <div className="filter-component">
                    <h4>Filtering here</h4>
                    <div className="filter-header">
                        <button>Show me</button>
                        <button>Show all</button>
                    </div>
                    <div className="filter-content">
                        <div className="categories">
                            <button className="">category 1</button>
                            <button className="">category 2</button>
                            <button className="">category 3</button>
                        </div>
                        <div className="order">
                            <div className="">
                                <p>Order by</p>
                            </div>
                            <button className="">Price</button>
                            <button className="">Vintage</button>
                        </div>
                    </div>
                </div>
                <div className="cart-component">
                    <div className="text-center">
                        delivery
                    </div>
                    <div className="text-center">
                        <h1>36 <br/> Bottles</h1>
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
