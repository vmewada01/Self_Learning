import React, { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import CityRow from "./components/CityRow";
import axios from "axios";
import Pagination from 'react-js-pagination';

export default function App() {
  const [data, setData] = useState([{}]);

  const [info, setInfo] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = info.slice(startIndex, endIndex);


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
         const data = res.data 
         console.log(res.data)
         const extractData = data.map((country)=>{
          return (
            {
              name:  country.name.common,
              id: country.cca3,
              population: country.population,
              city: country.region
            }
          )
         })
         setInfo(extractData)
         setTotalItems(extractData.length)
         console.log(info)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  



  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
          </tr>
         {
          info.map((ans)=>{
            return (
              <tr>
                <td>{ans.id}</td>
                <td>{ans.city}</td>
                <td>{ans.name}</td>
                <td>{ans.population}</td>
              </tr>
            )
          })
         }
          <div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={totalItems}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
   
       
      </table>

      <div>
        <ButtonComponent  id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent title="PREV" id="PREV" />
        <ButtonComponent id="NEXT" title="NEXT" />
      </div>
    </div>
  );
}
