import axios from "axios";
import { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";


const CatalogList = () => {
    const [campervans, setCampervans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://66211e173bf790e070b1e4b9.mockapi.io/advert');
        setCampervans(response.data);
      } catch (error) {
        console.log(error);
      } }
    

      fetchData();
  }, []);

 

  return (
    <div className="campervanList">
      {campervans.map((campervan) => (
        <CatalogItem key={campervan._id} campervan={campervan} />
      ))}
    </div>
  );
};

export default CatalogList