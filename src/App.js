
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import InputTransaction from './Components/InputTransaction';

import {Container, Row, Col} from 'react-bootstrap'
import TransactionsGrid from './Components/TransactionsGrid';
import Result from './Components/Result';

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       transactions: []
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

  render() {
    const {transactions} = this.state
    return (
      <Container>
        <Row className=" justify-content-md-center">
          <InputTransaction transactions={transactions} addTransaction={this.addTransaction} />
          <TransactionsGrid transactions={transactions} />
          <Result transactions={transactions} />
        </Row>
      </Container>
    )
  }
}

export default App

