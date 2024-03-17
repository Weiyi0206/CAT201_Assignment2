import React, { useState, useEffect } from "react";
import "./LatestProduct1.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion1";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestProduct1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2500, delay: 100 });
  }, []);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v1-container">
        {/* left side */}
        <div className="flexColStart v1-left" data-aos="fade-right">
          <span className="orangeText">This Month's Pick</span>
          <span className="primaryText">EpicWave Pro-X</span>
          <span className="secondaryText">
            RM <span style={{ color: "orange" }}>3,099</span>
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* right side */}
        <div className="flexEnd v1-right " data-aos="flip-left">
          <div className="image-container">
            <img src="./latestHeadset.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct1;
