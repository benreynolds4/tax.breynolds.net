import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'

import axios from 'axios'

class InputTransaction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             transactionDate : '',
             salePriceDollars : '',
             salePriceEuro: 0.0,
             acquiredPriceEuro: 0.0,
             fairMarketValue: '',
             acquiredPriceDollars : '',
             totalSaleValue: 0.0,
             capitalGain: 0.0,
             numberShares : 0,
             shareType : 'rsu',
             exchangeRate : '',
        }
        this.handleNumberSharesChange = this.handleNumberSharesChange.bind(this)
        this.handleAcquiredPriceChange = this.handleAcquiredPriceChange.bind(this)
        this.handleSalePriceChange = this.handleSalePriceChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleShareTypeChange = this.handleShareTypeChange.bind(this)
        this.handleFairMarketValueChange = this.handleFairMarketValueChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(event) {
        this.setState({
            transactionDate: event.target.value
        });
    }

    handleNumberSharesChange(event) {
        this.setState({
            numberShares: event.target.value
        })
    }

    handleSalePriceChange(event) {
        this.setState({
            salePriceDollars: event.target.value
        })
    }

    handleAcquiredPriceChange(event) {
        this.setState({
            acquiredPriceDollars: event.target.value
        });
    }

    handleShareTypeChange(event) {
        this.setState({
            shareType: event.target.value
        });
    }

    handleFairMarketValueChange(event) {
        this.setState({
            fairMarketValue: event.target.value
        });
    }

    exhange(exchangeRate, dollarValue) {
        return exchangeRate * dollarValue
    }

    calculateGain(exchange_rate) {
        return ((this.exhange(exchange_rate, this.state.salePriceDollars) - this.exhange(exchange_rate, this.state.acquiredPriceDollars)) * this.state.numberShares);
    }

    calculateTotalSaleValue(exchange_rate) {
        return (this.exhange(exchange_rate, this.state.salePriceDollars)  * this.state.numberShares)
    }

    validateOnlyOneYear() {
        let valid = true
        this.props.transactions.forEach(transaction  => {
            if(new Date(this.state.transactionDate).getFullYear() != new Date(transaction.transactionDate).getFullYear()) {
                valid = false
            }
        })
        return valid
    }

    validatePastDate() {
        let valid = true
        let today = new Date()
        if(new Date(this.state.transactionDate) > today) {
            valid = false
        }
        
        return valid
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.validateOnlyOneYear()) {
            alert('Can only enter information from a single calender year')
            return null
        } 
        if(!this.validatePastDate()) {
            alert("Can't enter future transaction")
            return null
        }
        var exchange_rate_url = `https://api.exchangeratesapi.io/${this.state.transactionDate}?base=USD&symbols=EUR`;
        axios.get(exchange_rate_url)
        .then((res) => {
            console.log(res.data);
            let exchange_rate = res.data.rates.EUR
            this.setState({
                exchangeRate: exchange_rate,
                salePriceEuro: this.exhange(exchange_rate, this.state.salePriceDollars),
                acquiredPriceEuro: this.exhange(exchange_rate, this.state.acquiredPriceDollars),
                fairMarketValue: this.exhange(exchange_rate, this.state.fairMarketValue),
                capitalGain: this.calculateGain(exchange_rate),
                totalSaleValue: this.calculateTotalSaleValue(exchange_rate)
            }, () => {
                this.props.addTransaction(this.state)
                console.log(this.state)
                this.setState({
                    transactionDate : '',
                    salePriceDollars : '',
                    salePriceEuro: 0.0,
                    acquiredPriceEuro: 0.0,
                    fairMarketValue: '',
                    acquiredPriceDollars : '',
                    totalSaleValue: 0.0,
                    capitalGain: 0.0,
                    numberShares : 0,
                    shareType : 'rsu',
                    exchangeRate : '',
                })
            })
        })
    }
    
    render() {
        return (
            <Col xl={4} lg={4} md={4} sm={12} className="col-12">
                <div className="login-screen">
                    <div className="login-box">
                        <div className="login-logo">
                            <h2>Add Transaction</h2>
                            <p>
                                To get figures: Go to MS, activity, select sales, remove date filter so shows ALL, follow the numbers.
                            </p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <Row className="gutters">
                            <Col xl={12} md={12} sm={12}>
                                <div className="form-group">
                                    <input type="date" value={this.state.transactionDate} className="form-control"  onChange={this.handleDateChange} required />  
                                </div>
                            </Col>
                            <Col xl={6} md={6} sm={6}>
                                <div className="form-group">
                                    <input type="text" value={this.state.acquiredPriceDollars} className="form-control" placeholder="Acquired Price (Dollar)" onChange={this.handleAcquiredPriceChange} required />
                                </div>
                            </Col>
                            <Col xl={6} md={6} sm={6}>
                                <div className="form-group">
                                    <input type="text" value={this.state.salePriceDollars} className="form-control" placeholder="Sale Price (Dollar)" onChange={this.handleSalePriceChange} required />
                                </div>
                            </Col>
                            <Col xl={12} md={12} sm={12}>
                                <div className="form-group">
                                    <label className="">
                                        Share Type
                                    </label>
                                    <select value={this.state.shareType} className="form-control" onChange={this.handleShareTypeChange}>
                                        <option value="rsu">RSU</option>
                                        <option value="espp">ESPP</option>
                                    </select>
                                </div>
                            </Col>
                            {
                                this.state.shareType == 'espp' ?
                                <Col xl={12} md={12} sm={12}>
                                    <div className="form-group">
                                        <input type="text" value={this.state.fairMarketValue} className="form-control" placeholder="Fair Market Value (Dollars)" onChange={this.handleFairMarketValueChange} required />
                                    </div>
                                </Col>
                                : ''

                            }
                            <Col xl={12} md={12} sm={12}>
                                <div className="form-group">
                                    <label className="">
                                        Number of Shares
                                    </label>
                                    <input type="number" value={this.state.numberShares} className="form-control" onChange={this.handleNumberSharesChange} required />
                                </div>
                            </Col>
                            
                        </Row>
                        <div className="actions clearfix">
                            <button type="submit" className="btn btn-primary btn-block">Add Transaction</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </Col>
        )
    }
}

export default InputTransaction
