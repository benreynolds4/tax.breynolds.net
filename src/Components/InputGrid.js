import React, { Component } from 'react'

import {Col} from 'react-bootstrap'

export class InputGrid extends Component {
    render() {
        const {width, value, field} = this.props
        return (
            <Col sm={width}>
                <div className="counter">
                    <h2 className="count-title ">{value}</h2>
                    <p className="count-text ">{field}</p>
                </div>
            </Col>
        )
    }
}

export default InputGrid
