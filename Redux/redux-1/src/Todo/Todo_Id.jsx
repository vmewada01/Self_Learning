import React, { useEffect } from "react";

const Todo_Id = () => {

   useEffect(()=> {
    axios({
      url: "http://localhost:8080/todos/id",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch(todosSuccess(res.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(todosFailure());
      });
   },[])


  return (
    <div>
      <div>l;djfal;dfj asf</div>
      <div>asdfasdfas</div>
    </div>
  );
};

export default Todo_Id;
