import React, { Component ,Text,StyleSheet} from 'react'
import Logo from '../Images/SiteLogo/logo.jpg'
import MyNav from '../Components/MyNav'
import styles from '../css/landing.module.css'
import { Button } from 'react-bootstrap'
import MyButton from '../Components/MyButton'
import Myphoto from '../Images/MyPhoto/photo.png'
import MyRoundedImage from '../Components/MyRoundedImage'
import AboutMe from './AboutMe'
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
           <MyButton className={styles.downloadButton} title="Download CV" variant="success"/>
           <MyButton className={styles.subscribeButton} title="Subscribe" variant="success"/>
           </div>

        
<div className={styles.imageContainer}>
        <MyRoundedImage src={Myphoto}/>
        </div>


<AboutMe className={styles.AboutMe}/>

            </div>
          
        )
    }
}




export default LandingPage