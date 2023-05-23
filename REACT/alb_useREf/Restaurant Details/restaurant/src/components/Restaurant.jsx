import React, { useEffect, useState } from 'react'
import styles from "./Restaurant.module.css"
import Title from './Title'
import Rating from './Rating'
import Image from './Image'

const Restaurant = ({item}) => {
    const {dishes,id, min_price,name,payments,price,rating, reviews,url,votes } = item

  return (
    <div className='Parent'>
     
      <h1>Restaurant</h1>
       <div className={styles.container}>
        <div>
         <Image src={url} />  
        </div>
        <div className={styles.title}>
        <Title dishes={dishes} min_price={min_price} name={name} payments={payments} price={price} />
        </div>
        <div className={styles.rating_div}>
          <Rating rating={rating} votes={votes} reviews={reviews} />
        </div>
       </div>
 
      <div className={styles.footer}>
        <div className={styles.order}>Order Online > </div>
      </div>


    </div>
  )
}

export default Restaurant