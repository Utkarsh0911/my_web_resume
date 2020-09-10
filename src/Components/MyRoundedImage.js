import React, { Component } from 'react'
import { Col,Image } from 'react-bootstrap';
import styles from '../css/image.module.css'

class MyRoundedImage extends Component
{
    render() {
        return (
            
            <Image src={this.props.src} roundedCircle className={styles.roundImage} />
        
        )
    }
}
export default MyRoundedImage;