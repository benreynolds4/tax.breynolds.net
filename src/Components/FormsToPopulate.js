import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import InputGrid from './InputGrid'

export class FormsToPopulate extends Component {
    render() {
        const {transactions, esppTransactions, totalCapitalGainToPayForYear, year} = this.props

        let rtsos = esppTransactions.map(transaction => {
            let transactionDate = new Date(transaction.transactionDate);
            transactionDate.setDate(transactionDate.getDate() + 30);
            return <InputGrid key={transaction.transactionDate} width={6}  value="RTSO" field={`Pay anf file bys ${transactionDate} `} />      
        })

        if(transactions.length  > 0) {
            return (
                <Col xl={6} lg={6} md={6} sm={6} >
                    <div className="login-screen">
                        <div className="login-box">
                            <div className="login-logo">
                                <h2>Forms to Populate</h2>
                                <p>
                                    The Following Forms need to be populated / actioned
                                </p>
                                <Row>
                                    <InputGrid width={6} value="Form 11" field={`Pay and file by 31/10/${year+1}`} />
                                    {
                                        rtsos
                                    }
                                    {
                                        totalCapitalGainToPayForYear > 0 ? 
                                            <InputGrid width={6} value="CGT" field={`Pay and file by 15/12/${year}`} />  :
                                            ''  
                                    }
                                    
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
    
            )
        }
        return ('')
        
    }
}

export default FormsToPopulate
