import React, { useState } from 'react'
import styles from './Nav.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { ImCart } from "react-icons/im";
import { GiClover } from "react-icons/gi";
import { TbShoppingCartHeart } from "react-icons/tb";
import { Link } from 'react-router-dom';

const nav = () => {
  // const[searchTerm, setSearchTerm] = useState("");


  //  const handleSearch = (e) => {
  //    const value = e.target.value;
  //    setSearchTerm(value);
     
  //     console.log("Search Term in Nav:", value);

  //    // Trigger the search function passed from parent (if available)
  //    if (onSearch) {
  //      onSearch(value);
  //    }
  //  };
  
  return (
    <div className={styles.nav}>

      <div className={styles.third}>
        <h4>Herbs.co</h4>
        <div className={styles.left}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
  
          <CiUser size={20} />
          <TbShoppingCartHeart size={20} />
          <ImCart size={20} />
        </div>
      </div>
    </div>
  );
}

export default nav