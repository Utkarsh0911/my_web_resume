import React, { Component } from 'react'
import styles from '../css/aboutme.module.css'
class AboutMe extends Component
{
    render() {
        return (
            <div className="d-flex flex-wrap  w-100  mt-2 justify-content-center">
               <div className="d-flex flex-wrap justify-content-center bg-white"> <h1 className={`text-dark text-bold ${styles.h1}`}>AboutMe....</h1></div>
              <div className="d-flex flex-wrap pr-1 pl-1 border-5 border-secondary"> <p className={` ${styles.p}`}>"I'm innovative Software Engineer with 2+ year experience in the field of software development.My experience has provided me with the innovative and technical skills necessary to successfully provide an organisation with multifaceted technical solution accross wide range of software platforms."</p></div> 
            </div>
        )
    }
}

export default AboutMe;