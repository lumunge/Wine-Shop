import React, { Component } from 'react';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
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
                <div className="row wines">
                    {this.props.wines.map(wine => (
                        <div key={wine.no} className="col-sm-4 mb-4 wine">
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
                                        <input type="number" value={this.amount} onChange={this.props.handleChange}/> QTY
                                    </div>
                                    <div className="divider"></div>
                                    <div className="case">
                                        <h4>Case</h4>
                                        {formatCurrency(wine.cost.case)}
                                        <br/>
                                        <input type="text"  /> QTY
                                    </div>
                                </div>
                                <div className="wine-buttons">
                                    <div className="">
                                        <button onClick={() => this.openModal(wine)} className="btn btn-secondary mr-2">Details</button>
                                    </div>
                                    <div className="">
                                        <button onClick={() => this.props.addToCart(wine)} className="btn btn-dark">Add to Cart</button>
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
                    ))}
                </div>
        )
    }
}
