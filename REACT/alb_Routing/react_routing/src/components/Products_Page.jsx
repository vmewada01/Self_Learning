import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Products_Page = () => {
  const [data, setData] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/products" + `/${params.user_id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <h1>Products_Page</h1>
      <div>Product Id is : {data.id}</div>
      <div>Product Name is : {data.name}</div>
      <div>Products Price is: {data.price}</div>
      <Link to="/products">Go Back</Link>
    </div>
  );
};

export default Products_Page;
