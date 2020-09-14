import React, { Component, useState } from 'react'

import tcsImage from '../Images/experience/tcs.jpg'
import styles from '../css/exp.module.css'
import MyImage from '../Components/MyRoundedImage'

import MyCard from '../Components/MyCard'
import tcsimg from '../Images/experience/tcs.jpg'
import mmimg from '../Images/experience/mapmyindia.jpg'
class Experience extends Component{
    
    
    render() {

       
      
        return (
          <div className={styles.container} >
        <MyCard className={styles.mycard} src={tcsimg} title="Tata Consultancy Services" text="Currently working with TCS as a System Engineer." date="From Jan 2020 To Present" location="Location - Noida,UP"/>
        <MyCard classname={styles.mycard} src={mmimg} title="MapMyIndia" text="Worked with MapMyIndia as a Software Development Engineer." date="From Mar 2018 To Jan 2019" location="Location - Okhla,Delhi"/>
      </div>
        )
  
    }
    }

export default Experience