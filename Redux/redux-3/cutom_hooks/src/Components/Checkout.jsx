import React from 'react'
import useTimeout from '../UseHooks/useTimeout'

const Checkout = () => {
    const data = useTimeout()
  return (
    <div>
        <h1>Checkout </h1>
        <h2>{data ? "I M ready To Change" : "I m not ready"}</h2>
    </div>
  )
}

export default Checkout