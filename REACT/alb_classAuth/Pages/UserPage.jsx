import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function UserPage() {
  const params = useParams();
  const location = useLocation();
  // console.log(params)
  // console.log(location)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //console.log(params.id)
  useEffect(() => {
    setLoading(true);
    axios({
      url: `https://reqres.in/api/users/${params.id}`,
      params: {
        page: 1
      }
    })
      .then((res) => {
        //console.log(res.data)
        setLoading(false);
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(true);
        //console.log(err)
      });
  }, [params.id]);

  if (loading) {
    return <div>Loading</div>;
  }

  let new_data = data.data;

  console.log(new_data);

  return (
    <>
      <div key={new_data?.id}>
        <div>Id : {new_data?.id}</div>
        <img src={new_data?.avatar} alt="img-icon" />
        <div> Email : {new_data?.email}</div>
        <div>
          {" "}
          Name : {new_data?.first_name} {new_data?.last_name}
        </div>
      </div>
    </>
  );
}

export default UserPage;
