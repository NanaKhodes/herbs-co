import React, { useEffect, useState } from "react";

const Butters = () => {
   const [product, setProducts] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("./butters.json");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
   <>
    <ul>
           {product.map((product) => (
             <div key={product.id}>
               <img src="" alt="" />
   
               <div>
                 <p>{product.name}</p>
                 <p>{product.price}</p>
               </div>
             </div>
           ))}
         </ul>
   </>
  )
}

export default Butters