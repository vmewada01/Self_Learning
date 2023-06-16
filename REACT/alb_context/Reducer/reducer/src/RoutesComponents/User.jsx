import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const User = () => {
  const ids = [1, 2, 3, 4, 5];
  const [data, setData] = useState([]);
const [searchParam, setSearchParams] = useSearchParams();
const [text, setText]= useState(searchParam.get("q")|| "")
 const [page, setPage] = useState(Number(searchParam.get("page"))|| 1)

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, [page]);

 useEffect(()=>{
  setSearchParams({
    page,
    q: text
  })
 },[page, text])

 
  return (
    <div>
      <h1>User</h1>
      <div> <input placeholder="enter here" type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)} /></div>
     
      <button disabled={page==1} onClick={()=> setPage(1)}>1</button>
      <button disabled={page==2} onClick={()=> setPage(2)}>2</button>
      {data.map((item) => {
        return (
          <div key={item}>
            <div>
              <img src={item.avatar} alt="" />
            </div>
            <div>{item.first_name}</div>
            <Link to={`/user/${item.id}`}>Get More Details </Link>
          </div>
        );
      })}
    </div>
  );
};

export default User;
