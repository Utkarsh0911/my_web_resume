import React, { Component } from 'react'
import styles from '../css/acc.module.css'
import { Button ,Card,Accordion} from 'react-bootstrap';
class MyAccordian extends Component
{

render() {
    return (
      
            <Accordion className={styles.container}>
  <Card className={styles.card}>
    <Card.Header>
    <h3 className={styles.h3}>{this.props.cource}</h3> 
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       know more...
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{this.props.description}</Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>
    
    )
}

}
export default MyAccordian