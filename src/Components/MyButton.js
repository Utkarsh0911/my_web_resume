import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from '../css/mybutton.module.css'
class MyButton extends Component
{
    render() {
        return (
         
        <Button className={styles.button} variant={this.props.variant}>{this.props.title}</Button>
       
       
       
        )
    }
}
export default MyButton