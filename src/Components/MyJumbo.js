import React, { Component } from 'react'
import styles from '../css/jumbo.module.css'
class MyJumbo extends Component
{
    render() {
        return (
            <div className=" d-flex justify-content-center w-100 m-0 jumbotron jumbotron-fluid flex-wrap w-100 mt-2">

<div className={`d-flex justify-content-center ${styles.jumbo}`}>
        <h1 className={`font-weight-bold text-dark text-center  ${styles.h1}`}>{this.props.title}</h1>
</div>

</div>
        )
    }
}

export default MyJumbo;