import React, { Component ,Text,StyleSheet} from 'react'
import Logo from '../Images/SiteLogo/logo.jpg'
import MyNav from '../Components/MyNav'
import styles from '../css/landing.module.css'
import { Button } from 'react-bootstrap'
import MyButton from '../Components/MyButton'
import Myphoto from '../Images/MyPhoto/photo.png'
import MyRoundedImage from '../Components/MyRoundedImage'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Skills from './Skills'
import MySimpleImage from '../Components/MySimpleImage'
import Education from './Education'
import resume from '../docs/resume.pdf'
import MyFooter from '../Components/MyFooter'



class LandingPage extends Component
{
    render() {
        return (
         

          <div className={styles.container}>
              <div className={styles.navContainer}>
            <MyNav title="MyResume" items={["ABOUT","BLOG","CONTACT"]}/>
            </div>

            <div className={styles.textContainer}>
<h1 className={styles.welcomeText}>WELCOME TO MY STUDIO!!</h1>

</div>

            <div className={styles.buttonContainer}>
            <a href={resume} target="_blank" rel="noopener noreferrer" download>  <MyButton    className={styles.downloadButton} title="Download CV" variant="success"/></a>
           <MyButton className={styles.subscribeButton} title="Subscribe" variant="success"/>
           </div>

        
<div className={styles.imageContainer}>
        <MyRoundedImage src={Myphoto}/>
        </div>


<AboutMe />

<div className={styles.expImageContainer}>
<MySimpleImage/>
</div>

<div className={styles.expContainer}>
<Experience/>
  
</div>

<div className={styles.headWord}><h1 className={styles.headText}>SKILLS</h1></div>
<Skills/>
<div className={styles.headWord}><h1 className={styles.headText}>EDUCATION</h1></div>
<Education/>


<MyFooter/>

            </div>
          
        )
    }
}




export default LandingPage