import React from "react";
import Pagination from "./Pagination";

const GitData = ({ data ,page, setPage }) => {
  return (
    <div>
     
        {
          data?.map((abc) => {
            return (
              <div key={abc.id}>
                <img src={abc.avatart_url} alt="image" />
                <h1>{abc.login}</h1>
                
              </div>
            );
          })}
          <Pagination page={page} setPage={setPage} />

    </div>
  );
};

export default GitData;
