import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [count, setCount]= useState(0)
  const [sortvalue, SetSortValue] = useState("");

  const sortingFunc = (e) => {
    const ans = e.target.value;
    SetSortValue(ans);
  };

  useEffect(() => {
    axios({
      url: "https://fakestoreapi.com/products/category/jewelery",
      method: "GET",
    })
      .then((res) => {
        //console.log(res.data);

        if (sortvalue == "asc") {
          // ?sort=desc
          const ascending = data.sort((a, b) => {
            return a.price - b.price;
          });
          setData(ascending);
          console.log(data);
          //  console.log(sortvalue)
        }
        if (sortvalue == "dsc") {
          // ?sort=desc
          const descending = data.sort((a, b) => {
            return b.price - a.price;
          });
          setData(descending);
          //  console.log(data)
          //  console.log(sortvalue)
        } else {
          setData(res.data);
        }
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <br />
      <div>
        <select onChange={sortingFunc} style={{ backgroundColor: "#ff3366" }}>
          <option value="">Sorting</option>
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
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

export default Products;
