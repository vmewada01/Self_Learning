import React from 'react'
import styles from "./Restaurant.module.css"
const Rating = ({rating,votes,reviews}) => {
  return (
    <div>
           <div className={styles.rating}>{rating}</div>
            <div> {votes} votes</div>
            <div>{reviews} reviews</div>
    </div>
  )
}

export default Rating