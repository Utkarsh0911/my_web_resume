import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from '../css/mybutton.module.css'
class MyButton extends Component
{
    render() {
        return (
         
  <Button  onClick={this.props.onClick} className={`btn btn-success mr-3 align-self-center ${styles.button}`} variant={this.props.variant}>{this.props.title}</Button>
       
       
       
        )
    }
}
export default MyButton