import React, { Component } from 'react';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import formatCurrency from '../utils.js';
import wineImage from '../Assets/img/remi-inconnu-Champagne-bottle.svg';

export default class Wine extends Component {
    constructor(props){
        super();
        this.state = {
            isModalOpen: false
        }
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }
        
    render() {

         const isModalOpen = this.state.isModalOpen;

        return (
            
                <div className="wines">
                    {this.props.wines.map(wine => (
                        <Fade top cascade>
                        <div key={wine.no} className="wine">
                            <div className="wine-image">
                                <img src={wineImage} alt={wine.name} />
                            </div>
                            <div className="wine-details">
                                <div>
                                    <h4> <span className="wine-number">{wine.no}</span> <br/> {wine.name}</h4>
                                </div>
                                <div className="wine-main">
                                    <div className="bottle">
                                        <h4>Bottle</h4>
                                        {formatCurrency(wine.cost.bottle)}
                                        <br/>
                                        <input type="number" value={this.bottleAmount} onChange={this.props.handleBottleChange}/> QTY
                                    </div>
                                    <div className="divider"></div>
                                    <div className="case">
                                        <h4>Case</h4>
                                        {formatCurrency(wine.cost.case)}
                                        <br/>
                                        <input type="number" value={this.caseAmount} onChange={this.props.handleCaseChange}  /> QTY
                                    </div>
                                </div>
                                <div className="wine-buttons">
                                    <div className="">
                                        <button className="filter-btn" onClick={() => this.openModal(wine)}>Details</button>
                                    </div>
                                    <div className="">
                                        <button className="cart-btn" onClick={() => this.props.addToCart(wine)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            {isModalOpen && (
                                <Modal className="details-modal" isOpen={true} onRequestClose={this.closeModal}>
                                    <Zoom className="details">
                                        <button onClick={this.closeModal} className="close-modal">X</button>
                                        <p>{wine.details}</p>
                                    </Zoom>
                                </Modal>
                            )}
                        </div>
                        </Fade>
                    ))}
                </div>
        )
    }
}
