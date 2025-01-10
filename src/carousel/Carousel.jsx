import React from "react";
import style from './Carousel.module.css'
import image1 from '../assets/images/Calendula _ découvrez ses vertus, usages et recettes bien-être _ Plantes sauvages comestibles, Herbe.jpg'
import image2 from '../assets/images/How to Make Chamomile Tea with Dried Flowers.jpg'
import image3 from '../assets/images/Lavender Flowers, Organic French 1lb BULK _ Tea _ Culinary Buds _ Food Grade _ for Sachets.jpg'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";

const Carousel = () => {
  return (
    <div className={style.container}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className={style.layer2}>
        <div className={style.items}>
          <TbTruckDelivery
            size={40}
            style={{ marginLeft: "30px", color: "plum" }}
          />
          <p>FREE DELIVERY</p>
        </div>
        <div>
          <RiCustomerService2Fill
            size={40}
            style={{ marginLeft: "30px", color: "plum" }}
          />
          <p>247 SUPPORT</p>
        </div>
        <div>
          <FaCcMastercard
            size={40}
            style={{ marginLeft: "35px", color: "plum" }}
          />
          <p>SECURE PAYMENT</p>
        </div>
        <div>
          <MdHighQuality
            size={40}
            style={{ marginLeft: "35px", color: "plum" }}
          />
          <p>HIGH QUALITY</p>
        </div>
      </div>
    </div>
  );

 
};

export default Carousel;
