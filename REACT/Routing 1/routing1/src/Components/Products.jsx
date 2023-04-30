import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const showdata = async () => {
      const res = await fetch("http://localhost:8080/products");

      const ans = await res.json();

      setdata(ans);
    //   console.log(data);
    };
    showdata();
  }, []);

  return (
    <div>
      Products:
      <div>
      <Outlet/>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr "}}  >
        {data.map((abc) => (
          <div key={abc.id}>
            <Link to={`/products/${abc.id}`}>{abc.name}</Link>
          </div>
        ))}
      </div>
      <Outlet/>
      </div>
    </div>
  );
};

export default Products;
