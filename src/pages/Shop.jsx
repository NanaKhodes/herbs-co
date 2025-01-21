import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./herbs.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  return (
    <div className={styles.shop}>
      <ul>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.item}>
            <img src="" alt="" />

            <div className={styles.details}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </ul>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
