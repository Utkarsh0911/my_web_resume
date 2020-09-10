import React, { Component } from 'react'
import styles from '../css/aboutme.module.css'
class AboutMe extends Component
{
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.text}>AboutMe....</h1>
                <div className={styles.aboutContainer}>
                <h1 className={styles.aboutText}>"I'm innovative Software Engineer with 2+ year experience in the field of software development.My experience has provided me with the innovative and technical skills necessary to successfully provide an organisation with multifaceted technical solution accross wide range of software platforms."</h1>
            </div>
            </div>
        )
    }
}

export default AboutMe;