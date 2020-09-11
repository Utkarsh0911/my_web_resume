import React, { Component, useState } from 'react'
import { Carousel,Image } from 'react-bootstrap';
import tcsImage from '../Images/experience/tcs.jpg'
import styles from '../css/exp.module.css'
import MyImage from '../Components/MyRoundedImage'

class Experience extends Component{
    
    
    render() {

       
      
        return (
            <Carousel className={styles.container}>
            <Carousel.Item className={styles.Item}> 
              <Image roundedCircle
                className={styles.image}
                src={tcsImage}
                alt="First slide"
              />
             
              <Carousel.Caption>
                <h1>First slide label</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>




            <Carousel.Item className={styles.Item}> 
              <Image roundedCircle
                className={styles.image}
                src={tcsImage}
                alt="First slide"
              />
             
              <Carousel.Caption>
                <h1>First slide label</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>


            
          </Carousel>
        )
    }
    }

export default Experience