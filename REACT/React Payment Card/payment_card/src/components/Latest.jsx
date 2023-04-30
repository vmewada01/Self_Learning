import React from 'react'
import styles from "./latest.module.css"

const  Latest = () => {
  return (
    <div className={styles.main}>
    <div className={styles.cont1}>
      <div>17 Sep 2020</div>
      <div className={styles.one}>Case Study</div>
      <div className={styles.two}>Amazon Gift</div>
      <div className={styles.two}>Pay</div>
      <div>MacOS- Mobile</div>
    </div>

    <div className={styles.cont2}>
      <div><i class="fa-brands fa-apple"></i></div>
      <div><i class="fa-solid fa-arrow-right"></i></div>

    </div>




    </div>
  )
}

export default Latest