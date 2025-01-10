import React from "react";
import style from './NewProducts.module.css'

const NewProducts = () => {
  return (
    <div>
      <h3>New Products</h3>
      <div className={style.container}>
        <div className={style.item}>lorem ipsum</div>
        <div className={style.item}>lorem ipsum</div>
        <div className={style.item}>3</div>
        <div className={style.item}>4</div>
        <div className={style.item}>5</div>
        <div className={style.item}>6</div>
        <div className={style.item}>7</div>
        <div className={style.item}>8</div>
        <div className={style.item}>9</div>
      </div>

      <div>
        <h3>GET 10% OFF YOUR FIRST ORDER</h3>
        <p>Subscribe to get more offers and once-in-a-lifetime deals</p>
         <form action="#" method="post">
            <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
            <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewProducts;
