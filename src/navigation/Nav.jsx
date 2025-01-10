import React from 'react'
import styles from './Nav.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { ImCart } from "react-icons/im";
import { GiClover } from "react-icons/gi";
import { TbShoppingCartHeart } from "react-icons/tb";

const nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.herbs}>
        <h1>Herbs.Co</h1>
      </div>

      <div className={styles.second}>
        <ul className={styles.flist}>
          <li>
            <a href="">Language</a>
          </li>
          <li>
            <a href="">Currency</a>
          </li>
        </ul>
      </div>

      <div className={styles.third}>
        <div className={styles.left}>
         <GiClover size={32} />
          <ul>
            <li>
              <a href="">SHOP</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <FaMagnifyingGlass size={20} />
          <CiUser size={20} />
          <TbShoppingCartHeart size={20} />
          <ImCart size={20} />
        </div>
      </div>
    </div>
  );
}

export default nav