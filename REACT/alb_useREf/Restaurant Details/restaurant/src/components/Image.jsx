import React from 'react'
import styles from "./Restaurant.module.css"
const Image = ({src}) => {
  return (
    <div>
         <img className={styles.image} src={src} alt="img" />
    </div>
  )
}

export default Image