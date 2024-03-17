import React, { useEffect } from "react";
import "./FindUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="g-wrapper" id="findUs">
      <div className="paddings innerWidth g-container" data-aos="zoom-in">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Let's try our products now!</span>
          <span className="secondaryText">
            Subscribe for compelling price quotes.
            <br />
            Discover your audio haven soon.
          </span>
          <button
            className="button"
            onClick={() =>
              window.open("https://maps.app.goo.gl/wUJRc8sHzos8zaxd9", "_blank")
            }
          >
            Find Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
