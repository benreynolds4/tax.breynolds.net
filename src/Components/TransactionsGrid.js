import React, { Component } from 'react'

import {Row, Col, Table} from 'react-bootstrap'

export class TransactionsGrid extends Component {
    render() {
        const {transactions} = this.props
        return (
            <Col xl={8} lg={8} md={8} sm={12} className="">
                <div className="login-screen">
                    <div className="login-box">
                        <div className="login-logo">
                            <h2>Transactions</h2>
                            <p>
                            </p>
                        </div>
                        <Row className="gutters">
                            <Table responsive>
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Acquired Price $</th>
                                    <th>Acquired Price Eur</th>
                                    <th>Sale Price $</th>
                                    <th>Sale Price Eur</th>
                                    <th>Share Type</th>
                                    <th>FMV</th>
                                    <th># Shares</th>
                                    <th>Total Sale Value</th>
                                    <th>Capital Gain</th>
                                    <th>Exc Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        transactions.map(transaction => 
                                            <tr key={transaction.acquiredPriceDollars+transaction.salePriceDollars}>
                                                <td>{transaction.transactionDate}</td>
                                                <td>{transaction.acquiredPriceDollars}</td>
                                                <td>{transaction.acquiredPriceEuro.toFixed(2)}</td>
                                                <td>{transaction.salePriceDollars}</td>
                                                <td>{transaction.salePriceEuro.toFixed(2)}</td>
                                                <td>{transaction.shareType}</td>
                                                <td>{transaction.fairMarketValue}</td>
                                                <td>{transaction.numberShares}</td>
                                                <td>{transaction.totalSaleValue.toFixed(2)}</td>
                                                <td>{transaction.capitalGain.toFixed(2)}</td>
                                                <td>{transaction.exchangeRate}</td>
                                            </tr>
                                            )
                                    }
                                    
                                </tbody>
                            </Table>
                        </Row>
                    </div>
                    
                </div>
          </Col>
        )
    }
}

export default TransactionsGrid
