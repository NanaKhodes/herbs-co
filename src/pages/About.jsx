import React from "react";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <div className="about-content">
          
          <div className="about-image">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Herbal Products"
            />
          </div>

         
          <div className="about-text">
            <h3 className="about-subtitle">Welcome to Nature's Bliss</h3>
            <p>
              At <strong>Nature's Bliss</strong>, we bring you the finest
              collection of natural products designed to enrich your life. From
              nutrient-packed butters to aromatic essential oils, we are
              passionate about connecting you to the pure, healing power of
              nature.
            </p>

            <h3 className="about-subtitle">What We Offer</h3>
            <ul className="about-list">
              <li>
                <strong>Butters:</strong> Rich, creamy butters like shea, mango,
                and cocoa to nourish and hydrate your skin.
              </li>
              <li>
                <strong>Plant Oils:</strong> High-quality oils like argan,
                jojoba, and avocado for skincare, haircare, and beyond.
              </li>
              <li>
                <strong>Essential Oils:</strong> Pure, therapeutic-grade oils
                for aromatherapy and wellness.
              </li>
              <li>
                <strong>Herbs:</strong> Dried herbs and blends to support
                holistic health and well-being.
              </li>
            </ul>
          </div>
        </div>

       
        <div className="about-cta">
          <a href="#products" className="about-button">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
