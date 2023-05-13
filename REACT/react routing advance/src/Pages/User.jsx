import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function User() {
  //   let user=[
  //     { id: 1, name: "vishal"},
  //     { id: 2, name: "safal"},
  //     { id: 3, name: "jatin"},
  //     { id: 4, name: "vinod"},
  //     { id: 5, name: "naresh"}
  // //   ]
  //   console.log(user)
  const [searchparams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(Number(searchparams.get("page")) ?? 1);

  useEffect(() => {
    setLoading(true);
    setSearchParams({
      page
    });
    axios({
      url: "https://reqres.in/api/users",
      params: {
        page: page
      }
    })
      .then((res) => {
        // console.log(res.data)
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(true);
        // console.log(err)
      });
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }

  let new_data = data.data;

  console.log(new_data);

  console.log(page);

  return (
    <div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          Prev{" "}
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          Next
        </button>
      </div>
      {new_data?.map((result) => {
        return (
          <div key={result.id}>
            <div>Id : {result.id}</div>
            <img src={result.avatar} alt="img-icon" />
            <div> Email : {result.email}</div>
            <div> Name : {result.first_name}</div>
            <div>
              <Link to={`/User/${result.id}`}>See More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default User;
