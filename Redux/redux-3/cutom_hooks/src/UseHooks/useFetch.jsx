import React, { useEffect, useState } from "react";
import axios from "axios"

const useFetch = ({url}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);

  const fetching = (url) => {
    setLoading(true);
 
     axios.get(url)
      .then((res) => {
        console.log(res.data)
        setLoading(false)
        setItem(res.data)
        
      })
      .catch((err) => {
        setError(err);
      });
  };

     useEffect(()=> {
        fetching(url)
     },[])


  return {item, error, loading}
};

export default useFetch;
