import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const pageSize = 20;

  //const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  //console.log(page);

  const prev = () => {
    setPage(page - 1);
  };
  const next = () => {
    setPage(page + 1);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: `https://fakestoreapi.com/products?limit=${pageSize}&page=${page}`,
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
  }, [page]);

  //   if (!loading) {
  //     return <div>Loading........</div>;
  //   }

  return (
    <div>
      <br />
      <br />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
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
              }}
            >
              <div>
                <h1></h1>
              </div>

              <img src={api_data.image} alt="image" width="150px" />
              <h3>{api_data.category}</h3>
              {/* <h4>Price : {api_data.price} Rs</h4>
                <p>{api_data.title}</p>
                <button style={{backgroundColor:"#ff3366" , borderRadius: "5px"}}>BUY NOW</button> */}
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <button
         disabled={page ===1}
          onClick={prev}
          style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
        >
          Prev
        </button>
        <button
        disabled={page===2}
          onClick={next}
          style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
