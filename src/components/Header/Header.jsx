import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings  innerWidth h-container">
        <a href="/" style={{ cursor: "pointer" }}>
          <img src="./LOGO2.jpeg" alt="logo" width={100} />
        </a>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link
              to="Product"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Product
            </Link>
            <Link to="VM" spy={true} smooth={true} offset={-8} duration={500}>
              Vision & Mission
            </Link>
            <Link to="TM" spy={true} smooth={true} offset={-100} duration={500}>
              Team Members
            </Link>
            <Link
              to="findUs"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Find Us
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
            <button
              className="button"
              onClick={() =>
                window.open("https://www.instagram.com/jiawei_0920/")
              }
            >
              <a>Shop now</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
