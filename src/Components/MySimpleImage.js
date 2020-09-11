import React, { Component } from 'react'
import image from '../Images/LandingPage/experience.png'
import Image from 'react-bootstrap/Image'
import styles from '../css/image.module.css'
class MySimpleImage extends Component
{
    render() {
        return (
            <Image src={image} className={styles.image} fluid />
        )
    }
}
export default MySimpleImage;