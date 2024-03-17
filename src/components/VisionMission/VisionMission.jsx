import React, { useEffect } from "react";
import "./VisionMission.css";
import AOS from "aos";
import "aos/dist/aos.css";
const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: -70 });
  }, []);
  return (
    <section className="vm-wrapper" id="VM">
      <div className="paddings innerWidth flexColCenter vm-container">
        <span className="waviy orangeText" data-aos="fade-down">
          VISION
        </span>
        <span className="secondaryText">
          Revolutionizing Sound to Create Timeless and Unforgettable Moments.
        </span>
        <span className="waviy orangeText" data-aos="fade-up">
          MISSION
        </span>
        <span className="secondaryText">
          We innovate superior sound devices to elevate every moment,
          {/* </span>
        <span className="secondaryText"> */}
          setting new standard in audio excellence and enhancing live
          {/* </span>
        <span className="secondaryText"> */}
          through exceptional sound experiences.
        </span>
      </div>
    </section>
  );
};

export default VisionMission;
