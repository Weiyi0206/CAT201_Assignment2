import React, { useState, useEffect } from "react";
import "./TeamMember.css";
import { TeamMemberData } from "../../utils/TeamMemberData";
import { color } from "framer-motion";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const TeamMember = () => {
  const [selected, setSelected] = useState(0);
  const tLength = TeamMemberData.length;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="s-wrapper" id="TM">
      <div className="paddings innerWidth s-container" data-aos="flip-left">
        {/* left side */}
        <div className="s-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
          ></motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          ></motion.div>
          <motion.img
            key={selected}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 2, type: "spring" }}
            src={TeamMemberData[selected].image}
            alt=""
          />
          <div className="arrows">
            <img
              onClick={() =>
                selected === 0
                  ? setSelected(tLength - 1)
                  : setSelected((prev) => prev - 1)
              }
              src={leftArrow}
              alt=""
            />
            <img
              onClick={() =>
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1)
              }
              src={rightArrow}
              alt=""
            />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart s-right">
          <span className="orangeText">Team Members</span>
          <span className="primaryText">What people are saying about us</span>
          <span className="secondaryText">
            {TeamMemberData[selected].review}
          </span>
          <span style={{ color: "rgb(48, 218, 207)" }}>
            {TeamMemberData[selected].name} -{" "}
            {TeamMemberData[selected].position}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
