
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import InputTransaction from './Components/InputTransaction';

import {Container, Row, Col} from 'react-bootstrap'
import TransactionsGrid from './Components/TransactionsGrid';
import Result from './Components/Result';
import Notice from './Components/Notice';

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       transactions: [] // Some sample data below.
    }

    this.addTransaction = this.addTransaction.bind(this)
  }

  addTransaction(transaction) {
    let newTransactionsState = this.state.transactions
    newTransactionsState.push(transaction)
    this.setState({
      transactions: newTransactionsState
    })
  }

  getDatesByYear(transactions) {
    let dict = {}
    transactions.forEach(transaction => {
      let date = new Date(transaction.transactionDate)
      let transactionYear = date.getFullYear()
      dict[transactionYear] !== undefined ? 
        dict[transactionYear].push(transaction) : 
        dict[transactionYear] = [transaction]
    });

    return dict
  }

  render() {
    const {transactions} = this.state
    let datesByYear = this.getDatesByYear(transactions)
    let results = []
    for(var year in datesByYear) { 
      results.push(<Result transactions={datesByYear[year]} year={year} />)
    }

    return (
      <Container>
        <Row className=" justify-content-md-center">
          <Notice />
          <InputTransaction transactions={transactions} addTransaction={this.addTransaction} />
          <TransactionsGrid transactions={transactions} />
          {
            results
          }
         
        </Row>
      </Container>
    )
  }
}

export default App

/* 
Test Data: 

      
      {
       acquiredPriceDollars: "152.25",
       acquiredPriceEuro: 138.1202939298,
       capitalGain: 363.17699355610387,
       exchangeRate: 0.9071940488,
       fairMarketValue: 162.496598021056,
       numberShares: "19",
       salePriceDollars: "173.32",
       salePriceEuro: 157.234872538016,
       shareType: "espp",
       totalSaleValue: 2987.462578222304,
       transactionDate: "2019-12-02" },
       {
       acquiredPriceDollars: "142.63",
       acquiredPriceEuro: 127.35958568252201,
       capitalGain: 902.2412715791482,
       exchangeRate: 0.8929368694,
       fairMarketValue: 182.26627378192802,
       numberShares: "19",
       salePriceDollars: "195.81",
       salePriceEuro: 174.84596839721402,
       shareType: "espp",
       totalSaleValue: 3322.0733995470664,
       transactionDate: "2019-05-06"},
       {
        acquiredPriceDollars: "142.63",
        acquiredPriceEuro: 127.35958568252201,
        capitalGain: 902.2412715791482,
        exchangeRate: 0.8929368694,
        fairMarketValue: 0.0,
        numberShares: "19",
        salePriceDollars: "195.81",
        salePriceEuro: 174.84596839721402,
        shareType: "rsu",
        totalSaleValue: 3322.0733995470664,
        transactionDate: "2019-05-06"},
        {
        acquiredPriceDollars: "152.25",
        acquiredPriceEuro: 138.1202939298,
        capitalGain: 363.17699355610387,
        exchangeRate: 0.9071940488,
        fairMarketValue: 162.496598021056,
        numberShares: "19",
        salePriceDollars: "173.32",
        salePriceEuro: 157.234872538016,
        shareType: "espp",
        totalSaleValue: 2987.462578222304,
        transactionDate: "2020-12-02" },
        {
        acquiredPriceDollars: "142.63",
        acquiredPriceEuro: 127.35958568252201,
        capitalGain: 902.2412715791482,
        exchangeRate: 0.8929368694,
        fairMarketValue: 182.26627378192802,
        numberShares: "19",
        salePriceDollars: "195.81",
        salePriceEuro: 174.84596839721402,
        shareType: "espp",
        totalSaleValue: 3322.0733995470664,
        transactionDate: "2020-05-06"},
        {
         acquiredPriceDollars: "142.63",
         acquiredPriceEuro: 127.35958568252201,
         capitalGain: 902.2412715791482,
         exchangeRate: 0.8929368694,
         fairMarketValue: 0.0,
         numberShares: "19",
         salePriceDollars: "195.81",
         salePriceEuro: 174.84596839721402,
         shareType: "rsu",
         totalSaleValue: 3322.0733995470664,
         transactionDate: "2020-05-06"}
*/