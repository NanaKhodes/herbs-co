import React from 'react'
import style from './Categories.module.css'
import image1 from '../assets/images/How to Dry Basil Leaves.jpg'
import image2 from '../assets/images/DIY Infused Olive Oils.jpg'
import image3 from '../assets/images/Saffron Tea_ Health Benefits.jpg'
import image4 from '../assets/images/Mango Butter For Hair_ Benefits And How To Use.jpg'
import image5 from '../assets/images/18bd6801-486d-4493-9414-9ed253a76f8b.jpg'

const Categories = () => {

  return (
    <div>
        <h3>Categories</h3>
     
      <div className={style.container}>
        <div className={style.items}>
          <div>
            <img src={image1} alt="" />
          </div>
          <a href="">Timeless Herbs</a>
        </div>

        <div>
          <div>
            <img src={image2} alt="" />
          </div>
          <a href="">Carrier Oils</a>
        </div>

        <div>
          <div>
            <img src={image3} alt="" />
          </div>
          <a href="">Aromatic Spices</a>
        </div>

        <div>
          <div>
            <img src={image4} alt="" />
          </div>
          <a href="">Plant Butters</a>
        </div>

        <div>
          <div>
            <img src={image5}alt="" />
          </div>
          <a href="">Essential Oils</a>
        </div>
      </div>
    </div>
  );
}

export default Categories;