import React, { useEffect } from "react";
import "./Product.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="r-wrapper" id="Product">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText" data-aos="fade-down">
            Best Choices
          </span>
          <span className="primaryText" data-aos="fade-up">
            HOT SELLER
          </span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card" data-aos="zoom-in">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span>RM </span>
                  <span style={{ color: "orange" }}>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Product;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
