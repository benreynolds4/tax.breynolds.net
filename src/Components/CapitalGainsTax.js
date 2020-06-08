import React, { Component } from 'react'


import {Row, Col} from 'react-bootstrap'
import InputGrid from './InputGrid'

export class CapitalGainsTax extends Component {
    render() {
        const {cgtToPay, payByDate} = this.props
        return (
                cgtToPay > 0 ? 
                    <Col xl={12} lg={12} md={12} sm={12}>
                    <div className="login-screen">
                        <div className="login-box">
                            <div className="login-logo">
                                <h2>Capital Gains Tax</h2>
                                <p>
                                    To be paid by: {payByDate}
                                </p>
                                <Row>
                                    <InputGrid width={12} value={cgtToPay} field="Total Capital Gains Tax to Pay" />
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
                : 
                ''
        )
    }
}

export default CapitalGainsTax
