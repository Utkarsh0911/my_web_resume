import React, { Component ,Text,StyleSheet} from 'react'
import Logo from '../Images/SiteLogo/logo.jpg'
import MyNav from '../Components/MyNav'
import styles from '../css/landing.module.css'
class LandingPage extends Component
{
    render() {
        return (
         

          <div className={styles.container}>
            <MyNav title="MyResume" items={["ABOUT","BLOG","CONTACT"]}/>
            </div>
          
        )
    }
}




export default LandingPage