import React, { useEffect, useState } from "react";
import style from "./Carrier.module.css"

const Carrier = () => {
   const [product, setProducts] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("./carrier.json");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
   <div className={style.carrier}>
    <ul>
           {product.map((product) => (
             <div key={product.id}>
               <img src="" alt="" />
   
               <div className={style.details}>
                 <p>{product.name}</p>
                 <p>{product.price}</p>
               </div>
             </div>
           ))}
         </ul>
   </div>
  )
}

export default Carrier