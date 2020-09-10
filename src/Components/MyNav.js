import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../css/mynav.module.css'


class MyNav extends Component{


    render() {
      
        return (
         
            <Navbar className={ styles.navContainer} bg='dark' expand="lg" fixed="top">
            <Navbar.Brand href="#home"><h6 className={styles.navTitle}>{this.props.title}</h6></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`ml-auto ${styles.linkContainer}`}>
                <Nav.Link  href="#home"><h6 className={styles.aboutLink}>ABOUT</h6></Nav.Link>
                <Nav.Link  href="#home"><h6 className={styles.blogLink}>BLOG</h6></Nav.Link>
                <Nav.Link  href="#home"><h6 className={styles.contactLink}>CONTACT</h6></Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar> 
         
           
        )
    }
}
export default MyNav