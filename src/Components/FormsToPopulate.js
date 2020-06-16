import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import InputGrid from './InputGrid'

export class FormsToPopulate extends Component {
    render() {
        const {transactions, esppTransactions, totalCapitalGainToPayForYear, year} = this.props

        let rtsos = esppTransactions.map(transaction => {
            let transactionDate = new Date(transaction.transactionDate);
            transactionDate.setDate(transactionDate.getDate() + 30);
            return <InputGrid key={transaction.transactionDate} width={6}  value="RTSO" field={`Deadline: Pay and file by ${transactionDate}. See RTSO document generator above`} />      
        })

        if(transactions.length  > 0) {
            return (
                <Col xl={12} lg={12} md={12} sm={12} >
                    <div className="login-screen">
                        <div className="login-box">
                            <div className="login-logo">
                                <h2>Forms to Populate: {year} </h2>
                                <p>
                                    The Following Forms need to be populated / actioned for the tax year {year}
                                </p>
                                <Row>
                                    <InputGrid width={6} value="Form 11" field={`Deadline: File by 31/10/${parseInt(year)+1}`} />
                                    {
                                        rtsos
                                    }
                                    {
                                        totalCapitalGainToPayForYear > 0 ? 
                                            <InputGrid width={6} value="CGT" field={`Deadline: Pay and file by 15/12/${year}`} />  :
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
