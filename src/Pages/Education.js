import React, { Component } from 'react'

import MyAccoordion from '../Components/MyAccordian';
import styles from '../css/education.module.css'

class Education extends Component
{
    render() {
        return (
            <div className={styles.container}>
   <MyAccoordion  cource="Bachelor of Technology." description="Completed B.Tech ( CSE ) from Bharat Institute of Technology with an aggregate of 78%."/>
   <MyAccoordion cource="Intermediate" description="Completed XII from Kendriya Vidyalaya No. 2 , Delhi Cantt, New Delhi with the aggregate of 71%"/>
   <MyAccoordion cource="High School" description="Completed X from Kendriya Vidyalaya No. 1 , Pathankot, Punjab with the aggregate of 84%"/>
            </div>
        )
    }
}
export default Education;