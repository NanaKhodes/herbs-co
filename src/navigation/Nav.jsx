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
        {/* <ul className={styles.flist}> */}
        <div className={styles.flist}>
          <button
            class="btn btn- dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Language
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                English
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                French
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                German
              </a>
            </li>
          </ul>

          <div class="dropdown">
            <button
              class="btn btn- dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Currency
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Naira
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dollars
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Pounds
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Euro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <li>
            <a href="">Language</a>
          </li>
          <li>
            <a href="">Currency</a>
          </li>
        </ul> */}
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