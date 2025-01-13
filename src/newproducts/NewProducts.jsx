import React from "react";
import style from "./NewProducts.module.css";
import image1 from "../assets/images/DIY Infused Olive Oils.jpg";

const NewProducts = () => {
  return (
    <div className={style.NewProducts}>
      <h3>New Products</h3>
      <div className={style.container}>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info} v>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.items}>
            <img src={image1} alt="" />

            <div className={style.info}>
              <h4>Product Name</h4>
              <p>Price: N1000</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.get}>
        <h3>GET 10% OFF YOUR FIRST ORDER</h3>
         <p>Subscribe to get more offers and once-in-a-lifetime deals</p> 
        <div className={style.subscribe}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
