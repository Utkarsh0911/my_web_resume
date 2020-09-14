import React, { Component } from 'react'
import MyButton from './MyButton'
import { ProgressBar } from 'react-bootstrap'
import MyAccordian from './MyAccordian';

class MyProgressBar extends Component
{
    render() {
        return (
            <ProgressBar now={this.props.now} variant={this.props.variant} style={{width:"100%"}}/>
               )
    }
}
export default MyProgressBar;