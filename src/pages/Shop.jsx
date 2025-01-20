import React, { useEffect, useState } from 'react'
import styles  from "./Shop.module.css"

const Shop = () => {
  const [shop, setShop] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch("./herbs.json");
         const data = await response.json();
         setShop(data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

     fetchData();
   }, []); 
  return (
    <div className={styles.shop}>
      <ul>
        {shop.map((shop) => (
          <div key={shop.id} className={styles.item}>
            <img src="" alt="" />
            
            <div className={styles.details}>
              <p>{shop.name}</p>
              <p>{shop.price}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Shop