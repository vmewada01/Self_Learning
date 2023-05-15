import axios from "axios";
import React, { useEffect, useState } from "react";

const Mens = () => {
  const [data, setData] = useState([]);
  const [count, setCount]= useState(0)

  useEffect(() => {
    axios({
      url: "https://fakestoreapi.com/products/category/men's clothing",
      method: "GET",
    })
      .then((res) => {
       // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <br />
      <br />

      <div>
        {data.map((api_data) => {
          return (
            <div
              key={api_data.id}
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "60%",
                gap: "5px",
              }}
            >
              <img src={api_data.image} alt="image" width="300px" />
              <h3>{api_data.category}</h3>
              <h4>Price : {api_data.price} Rs</h4>
              <p>{api_data.title}</p>
              <div>
              <button
              disabled={count==5}
              onClick={()=>setCount(count+1)}
                style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
              >
               +
              </button>
              {count}
              <button
              disabled={count==0}
              onClick={()=>setCount(count-1)}
                style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
              >
             -
              </button>
           
              <button
                style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
              >
                BUY NOW
              </button>
              </div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mens;
