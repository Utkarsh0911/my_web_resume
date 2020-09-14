import React, { Component } from 'react'
import { Carousel,Image ,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import styles from '../css/card.module.css'
class MyCard extends Component

{
    render() {
        return (
            <div >
            <Card style={{ width: '18rem' }} className={styles.card}>
    <Card.Img variant="top" src={this.props.src} className={styles.img} />
    <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
       {this.props.text}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>{this.props.date}</ListGroupItem>
        <ListGroupItem>{this.props.location}</ListGroupItem>
      {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">know more..</Card.Link>
      {/* <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
        
       </div>
        )
    }
}
export default MyCard