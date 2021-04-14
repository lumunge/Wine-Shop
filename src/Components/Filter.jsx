import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter-component">
                    <div className="filter-content">
                        <div className="order mb-4">
                            <div>
                                Show me {" "}
                            </div>
                            <select value={this.props.variety} onChange={this.props.filterWines} name="" id="">
                                <option value="">All</option>
                                <option value="white">White</option>
                                <option value="red">Red</option>
                                <option value="sparkling">Sparkling</option>
                            </select>
                        </div>
                        <div className="order">
                            <div className="">
                                Order by {" "}
                            </div>
                            <select value={this.props.sort} onChange={this.props.sortWines} name="" id="">
                                <option value="">Order by</option>
                                <option value="bottle-price">Price</option>
                                <option value="case-price">Vintage</option>
                            </select>
                        </div>
                    </div>
                </div>
        )
    }
}
