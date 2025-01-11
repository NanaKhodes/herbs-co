import React from 'react'
import style from './Footer.module.css'
import { GiClover } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.one}>
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
    </footer>
  );
}

export default Footer