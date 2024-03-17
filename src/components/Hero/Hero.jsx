import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* left hand side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="green-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
            >
              Discover <br />
              <span className="exceptional-text">Exceptional</span> <br />
              Sound Solutions
            </motion.h1>
          </div>

          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Discover an array of premium audio devices at EpicEcho
            </span>
            <span className="secondaryText">
              End the search for your ideal earphones and speakers!
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button
              className="button"
              onClick={() => window.open("https://www.google.com/")}
            >
              Search
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={320} end={400} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={19700} end={20000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={23} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* right hand side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.jpeg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
