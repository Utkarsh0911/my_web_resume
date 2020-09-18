import React, { Component ,Text,StyleSheet} from 'react'
import Logo from '../Images/SiteLogo/logo.jpg'
import MyNav from '../Components/MyNav'
import styles from '../css/landing.module.css'
import { Button, Container } from 'react-bootstrap'
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
import MyJumbo from '../Components/MyJumbo'


class LandingPage extends Component
{
    render() {
        return (
         

          <div className={ `w-100 d-flex flex-column align-items-center m-0 position-absolute ${styles.container} `} >  
              
              <div className="container ">
            <MyNav title="MyResume" items={["ABOUT","BLOG","CONTACT"]}/>
            </div>

            <div className="d-flex justify-content-center ">
<h1 className={`font-weight-bold text-white text-center  ${styles.h1}`}>WELCOME TO MY STUDIO!!</h1>
</div>


            <div className="d-flex flex-wrap justify-content-center mt-2 ">
             



            <a href={resume} target="_blank" rel="noopener noreferrer" download>  
            
           <MyButton   title="Download CV" variant="success"/></a>




<MyButton  title="Subscribe" variant="success"/>
      
     
           </div> 

        
<div className="d-flex  flex-wrap clearfix  mt-1 flex-wrap justify-content-center align-items-center">
        <MyRoundedImage src={Myphoto}/>
        </div>


 <AboutMe /> 
<MyJumbo title="EXPERIENCE"/>

  

 <div className={styles.expContainer}>
<Experience/>

</div> 



<MyJumbo title="SKILLS"/>
<Skills/>



<MyJumbo title="EDUCATION"/>
<Education/>


{/* <MyFooter/> */}

            </div>
          
        )
    }
}




export default LandingPage