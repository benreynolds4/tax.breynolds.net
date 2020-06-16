import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import InputGrid from './InputGrid'

export class Form11 extends Component {
    render() {
        const {totalChargeableAmount, AnnualRTSOPaid, chargeableAssestsAcquired, chargeableGain, totalCapitalGainToPayForYear, year } = this.props
        return (
            <Col xl={12} lg={12} md={12} sm={12} >
                <div className="login-screen">
                    <div className="login-box">
                        <div className="login-logo">
                             <h2>Form 11: {year} </h2>
                            <p>
                                A form11 needs to be filled for tax year {year}. 
                            </p>
                            <p>
                                Fill in sections in the form11 with values as below
                            </p>
                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>PAYE/BIK/Pensions (1)</h4>
                                        <p>
                                            mostly from p60 > get from workday > maintain documents
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>PAYE/BIK/Pensions (2)</h4>
                                        <p>
                                            Share Options exercised, released or assigned in tax year
                                        </p>
                                        <Row>
                                            <InputGrid width={6} value={totalChargeableAmount} field="Total Chargeable Amount" />
                                            <InputGrid width={6} value={AnnualRTSOPaid} field="Relevant Tax on a Share Option (RTSO) paid" />
                                        </Row>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>Personal Tax Credits</h4>
                                        <ul>
                                            <li>
                                                Personal Tax Credit Click Calculate
                                            </li>
                                            <li>
                                                Employee Tax Credit Check Box
                                            </li>
                                            <li>
                                                Medical Insurance Relief Go to myvhi> docs> policy renewal for relevant period. <br /> 
                                                <b>Note</b> claim for each dependant you are paying.
                                                <ul>
                                                    <li>
                                                        <b>(ii) Amount of the Gross premium attributable to this individual </b><br />
                                                        Add "Gross premium" for dental + health together for tax year
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <Row>
                                            <InputGrid width={6} value={0.0} field="(iv) Amount of any contribution towards this premium made by you to your employer" />
                                            <InputGrid width={6} value={12} field="(v) Number of months in tax year where the policy was active I put 12, but technically the policy starts from 01/05/yyyy to 30/04/yyyy ." />
                                        </Row>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>Capital Gains</h4>
                                        <Row>
                                            <InputGrid width={12} value={1270} field="Under 'gains lossesnet chargeable gains' Mark Personal Exemption (max €1270 per spouse,non-transferable)" />
                                        </Row>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>Chargeable Assets</h4>
                                        
                                        <Row>
                                            <InputGrid width={12} value={chargeableAssestsAcquired} field="Shares(quoted and unquoted)" />
                                        </Row>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>'Other' Health Expenses</h4>
                                        <p>
                                            The amount on visits that were not covered by health insurance? physio, GP, orthotics, medications, etc? injections?
                                        </p>
                                        <ul>
                                            <li>
                                                <b>Enter total of 'Other' Health Expenses incurred in tax year</b><br />
                                                Total cost of all valid items, visits/meds etc. for the year
                                            </li>
                                            <li>
                                                <b>Deductions (Sums received/receivable in respect of 'other' health expenses) > Under any policy of medical insurance</b><br />
                                                Eg, physio costs 60, we get 50% back. so this is the 50 returned by VHI.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>'Other' Health Expenses</h4>
                                        
                                        <ul>
                                            <li>
                                                <b>"I confirm agreement with the figures at (a) to (c)(ii) inclusive as computed above in column A."</b><br />
                                                Select "yes" then click "transfer balances to self assessment column b"... then tick "I declare the above to be my Self Assessment to Income Tax for the year yyyy "
                                            </li>
                                            <li>
                                                <b>Seems we do not need to enter anything for field (h) as it erors when trying to submit as "figures don't match revenues files". I cleared it.</b><br />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="login-screen">
                                <div className="login-box">
                                    <div className="login-logo">
                                        <h4>CGT Self Assessment</h4>
                                        <p>
                                            Share Options exercised, released or assigned in tax year
                                        </p>
                                        <Row>
                                            <InputGrid width={6} value={chargeableGain} field="(i) Amount of chargeable gains arising for this period" />
                                            <InputGrid width={6} value={totalCapitalGainToPayForYear} field="(ii) and (iii)" />
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Form11
