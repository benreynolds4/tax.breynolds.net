import React, { Component } from 'react'
import {Col} from 'react-bootstrap'

export class Notice extends Component {
    render() {
        return (
            <React.Fragment>
                <Col xl={6} lg={6} md={6} sm={6} className="col-12">
                    <div className="login-screen">
                        <div className="login-box">
                            <div className="login-logo">
                                <h2>WARNING: NOT LEGAL OR FINANCIAL ADVICE</h2>
                                <ul>
                                    <li>
                                        I think this is right, but double check your figures.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} className="col-12">
                    <div className="login-screen">
                        <div className="login-box">
                            <div className="login-logo">
                                <h2>Useful Information</h2>
                                <ul>
                                    <li>
                                        Public Spreadsheet:  <a href="https://docs.google.com/spreadsheets/d/1SWeYRHplL5KsFf_FKDwak_o4dHmzhZovYdUEL247b-I/edit#gid=1670547628" target="_blank">here</a>
                                    </li>
                                    <li>
                                        RTSO1  Document Generator: <a href="https://espp.breynolds.net"  target="_blank">here</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        )
    }
}

export default Notice
