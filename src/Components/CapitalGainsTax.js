import React, { Component } from 'react'


import {Row, Col} from 'react-bootstrap'
import InputGrid from './InputGrid'

export class CapitalGainsTax extends Component {
    render() {
        const {cgtToPay, year} = this.props
        return (
                cgtToPay > 0 ? 
                    <Col xl={12} lg={12} md={12} sm={12}>
                    <div className="login-screen">
                        <div className="login-box">
                            <div className="login-logo">
                                <h2>Capital Gains Tax: {year}</h2>
                                <p>
                                    <ul>
                                        <li>
                                            Gain made between January and November must be paid and filed on CGTa by 15/12/{year}
                                        </li>
                                        <li>
                                            Gain made in December must be paid and filed on CGTb by 31/01/{parseInt(year) + 1}
                                        </li>
                                        <li>
                                            <a href="https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/when-how-do-you-pay-and-file-cgt.aspx" target="_blank">More info</a>
                                        </li>
                                    </ul>
                                    
                                </p>
                                <Row>
                                    <InputGrid width={12} value={cgtToPay} field="Annual Total Capital Gains Tax to Pay" />
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
