import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  const [search , setSearch] = useSearchParams();
  const [text, setText] = useState(search.get("q")|| "")
 const [page, setPage] = useState(Number(search.get("page"))|| 1)


  useEffect(() => {
    fetch(`http://localhost:8080/products?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
       // console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(()=>{
    setSearch({
      page,
      q:text
    })
  },[page,text])

  console.log(data)
  return (
    <div>
      <div><input type="text" placeholder="enter something here" value={text} onChange={(e)=> setText(e.target.value)}  /></div>
     
     <button disabled={page==1} onClick={()=> setPage(1)}>1</button>
     <button disabled={page==2} onClick={()=> setPage(2)}>2</button>
  
    <div style={{display: "flex", justifyContent:"center"}}>
     
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {data?.map((abc) => {
       return   <tr key={abc.id}>
            <td>{abc.id}</td>
            <td>{abc.name}</td>
            <td>{abc.price}</td>
           <Link to={`/products/${abc.id}`}>More Details</Link>
          </tr>;
        })}
      </table>
    </div>
    </div>
  );
};

export default Products;
