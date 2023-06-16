import { useEffect, useState } from "react";
import styles from "./CityRow.module.css";
import axios from "axios";

function CityRow({}) {
  // const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all")
  //     .then((res) => {
  //        const data = res.data 
  //        const extractData = data.map((country)=>{
  //         return (
  //           {
  //             name:  country.name.common,
  //             id: country.cca3,
  //             population: country.population,
  //             city: country.region
  //           }
  //         )
  //        })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <tr data-testid="countries-container" className={styles.container}>
      <td> ID </td>
      <td> City Name </td>
      <td> Country Name </td>
      <td> Population </td>
    </tr>
  );
}

export default CityRow;
