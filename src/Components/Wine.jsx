import React, { Component } from 'react';
import formatCurrency from '../utils.js';
import wineImage from '../Assets/img/remi-inconnu-Champagne-bottle.svg';

export default class Wine extends Component {
    render() {
        return (
                <div className="row wines">
                    {this.props.wines.map(wine => (
                        <div className="col-sm-4 mb-4 wine">
                            <div className="wine-image">
                                <img src={wineImage} alt={wine.name} />
                            </div>
                            <div className="wine-details">
                                <div className="wine-header">
                                    <h4>{wine.no} <br/> {wine.name}</h4>
                                </div>
                                <div className="wine-main">
                                    <div className="bottle">
                                        <h4>Bottle</h4>
                                        {formatCurrency(wine.cost.bottle)}
                                        <br/>
                                        <input type="text"/> QTY
                                    </div>
                                    <div className="divider"></div>
                                    <div className="case">
                                        <h4>Case</h4>
                                        {formatCurrency(wine.cost.case)}
                                        <br/>
                                        <input type="text"/> QTY
                                    </div>
                                </div>
                                <div className="wine-buttons">
                                    <div className="">
                                        <button className="btn btn-secondary mr-2">Details</button>
                                    </div>
                                    <div className="">
                                        <button onClick={() => this.props.addToCart(wine)} className="btn ">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        )
    }
}
