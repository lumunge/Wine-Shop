import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter-component">
                    <div className="filter-content">
                        <div className="order mb-4">
                            <div className="filter-header">
                                <span>Show Me</span>
                                <span>Show All</span>
                            </div>
                            <div className="filter-buttons">
                                <button data-testid="white" className="filter-btn" value="white" onClick={this.props.filterWines}>White</button>
                                <button data-testid="red" className="filter-btn" value="red" onClick={this.props.filterWines}>Red</button>
                                <button data-testid="sparkling" className="filter-btn" value="sparkling" onClick={this.props.filterWines}>Sparkling</button>
                            </div>
                        </div>
                        <div className="order">
                            <div>
                                <span> Order by {" "} </span>
                                <button className="filter-btn" value="bottle-price" onClick={this.props.sortWines}>Price</button>
                                <button className="filter-btn" value="case-price" onClick={this.props.sortWines}>Vintage</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
