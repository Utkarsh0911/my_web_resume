import React, { Component } from 'react'

import MyProgressBar from '../Components/MyProgressBar'

import styles from '../css/skills.module.css'

class Skills extends Component
{
    render() {
        return (
            <div className={styles.container} >
                <h3>Java</h3>
             <MyProgressBar variant="success" now="70"/>
             <h3>ReactJS</h3>
             <MyProgressBar variant="danger" now="50"/>
             
             <h3>React Native</h3>
             <MyProgressBar variant="warning" now="60"/>

            </div>
        )
    }
}
export default Skills