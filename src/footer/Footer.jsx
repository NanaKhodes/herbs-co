import React from "react";
import style from "./Footer.module.css";
import { GiClover } from "react-icons/gi";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.one}>
        <GiClover size={50} />
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

      <div className={style.two}>
        <div className={style.list}>
          <h5>Link</h5>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <h5>Link</h5>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <h5>Link</h5>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <h5>Link</h5>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <h5>Link</h5>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <h5>Link</h5>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.icons}>
        <TbBrandFacebookFilled size={25} />
        <FaInstagram size={25} />
       <SiGmail size={25} />
      </div>
    </footer>
  );
};

export default Footer;
