import React from 'react'
import styles from "./Restaurant.module.css"
const Title = ({dishes, min_price ,name , payments,price}) => {
  return (
    <div>
            <div className={styles.heading}>{name}</div>
            <div className={styles.gray}> {dishes}</div>
            <div className={styles.gray}>Cost ${price} for one</div>
            <div>Min ${min_price} Up to 30 min</div>
            <div>Accepts {payments} payments only</div>
    </div>
  )
}

export default Title