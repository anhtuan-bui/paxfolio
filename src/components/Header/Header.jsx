import React, { Component } from "react";
import Button from "../Button/Button";
import { ReactComponent as Logo } from "../../assets/images/LOGO.svg";
// import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

import "./Header.scss";

import { SCREEN_SIZE } from "../../configurations/configurations";
import { NavLink } from "react-router-dom";

import withRouter from "../../lib/helper";

const menu = [
  {
    text: "Business",
    link: "https://",
    to: "business",
    submenu: [],
  },
  {
    text: "Personal",
    link: "https://",
    to: "personal",
    submenu: [],
  },
  {
    text: "Pricing",
    link: "https://",
    to: "pricing",
    submenu: [],
  },
  {
    text: "Use Cases",
    link: "https://",
    to: "use-cases",
    submenu: [
      {
        text: "Hospitality",
        description: "Lorem Ipsum is simply dummy text",
        link: "https://",
        to: "use-cases",
        image: <iconHospitality />,
      },
      {
        text: "Retail",
        description: "Lorem Ipsum is simply dummy text",
        link: "https://",
        to: "use-cases",
        image: <iconRetail />,
      },
      {
        text: "Medical Care",
        description: "Lorem Ipsum is simply dummy text",
        link: "https://",
        to: "use-cases",
        image: <iconMedical />,
      },
      {
        text: "Education",
        description: "Lorem Ipsum is simply dummy text",
        link: "https://",
        to: "use-cases",
        image: <iconEducation />,
      },
    ],
  },
  {
    text: "Resources",
    link: "https://",
    to: "resources",
    submenu: [],
  },
  {
    text: "FAQ",
    link: "https://",
    to: "faq",
    submenu: [],
  },
];

class Header extends Component {
  app = {
    width: 1440,
    hamburgerIsOpen: false,
  };

  constructor(props) {
    super(props);

    this.state = this.app;

    this.clickHamburger = this.clickHamburger.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);

    window.addEventListener("click", (e) =>
      this.handleClickOutsideHamburger(e)
    );

    this.handleHeaderColorOnHero();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("click", (e) =>
      this.handleClickOutsideHamburger(e)
    );
  }

  componentDidUpdate() {
    this.handleHeaderColorOnHero();
  }

  clickHamburger() {
    this.app.hamburgerIsOpen = !this.app.hamburgerIsOpen;
    this.handleHamburger();
    this.setState(this.app);
  }

  handleHeaderColorOnHero() {
    const header = document.querySelector(".header");
    const hero = document.querySelector(".hero");
    const hamburger__lines = document.querySelectorAll(".hamburger__line");
    if (!hero) {
      return;
    }

    if (hero.getAttribute("background") === "light") {
      header.classList.add("header--on-light");
      hamburger__lines.forEach((line) =>
        line.classList.add("hamburger__line--on-light")
      );
    } else {
      if (header.classList.contains("header--on-light")) {
        header.classList.remove("header--on-light");
        hamburger__lines.forEach((line) =>
          line.classList.remove("hamburger__line--on-light")
        );
      }
    }
  }

  handleClickOutsideHamburger(e) {
    if (
      this.state.hamburgerIsOpen === true &&
      !e.target.classList.contains("nav") &&
      !e.target.classList.contains("nav__second-level-li-description") &&
      e.target.getAttribute("name") !== "hamburger" &&
      e.target.tagName !== "BUTTON" &&
      e.target.tagName !== "SPAN" &&
      e.target.tagName !== "A" &&
      e.target.tagName !== "PATH"
    ) {
      this.app.hamburgerIsOpen = false;
      this.handleHamburger();
    }
    this.setState(this.app);
  }

  handleHamburger() {
    const headerRight = document.querySelector(".header_right");
    const hamburger = document.querySelector(".hamburger");
    if (this.app.hamburgerIsOpen) {
      headerRight.classList.add("header_right--active");
      hamburger.classList.add("active");
    } else {
      headerRight.classList.remove("header_right--active");
      hamburger.classList.remove("active");
    }
  }

  handleScroll() {
    const hamburgerLines = document.querySelectorAll(".hamburger__line");
    const header = document.querySelector(".header");

    // The header changes after scrolling down
    if (window.scrollY >= 20) {
      header.classList.add("header--active");
      hamburgerLines.forEach((line) => {
        line.classList.add("hamburger__line--scrolled");
      });

      if (this.app.hamburgerIsOpen) {
        this.app.hamburgerIsOpen = false;
        this.handleHamburger();
      }
    } else {
      header.classList.remove("header--active");
      hamburgerLines.forEach((line) => {
        line.classList.remove("hamburger__line--scrolled");
      });
    }
    this.setState(this.app);
  }

  handleResize = () => {
    const hamburger = document.querySelector(".hamburger");
    const headerRight = document.querySelector(".header_right");
    this.app.width = window.innerWidth;
    if (this.app.hamburgerIsOpen) {
      this.app.hamburgerIsOpen = false;
      this.handleHamburger();
    }
    try {
      if (this.app.width <= SCREEN_SIZE.large) {
        hamburger.classList.add("hamburger--active");
        headerRight.classList.remove("header_right--active");
      } else {
        hamburger.classList.remove("hamburger--active");
        headerRight.classList.add("header_right--active");
      }
    } catch (e) {
      throw new Error(e);
    }
    this.setState(this.app);
  };

  clickLogo = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <div className="logo">
            <Logo onClick={this.clickLogo} />
          </div>

          <div className="header_right__wrapper">
            <div className="header_right header_right--active">
              <nav className="nav">
                <ul className="nav__first-level">
                  {menu.map((item, index) => {
                    return (
                      <li key={index} className="nav__first-level-li">
                        <NavLink
                          to={item.submenu.length > 0 ? "" : item.to}
                          className="nav__first-level-li-link"
                          onClick={
                            item.submenu.length > 0
                              ? (e) => e.preventDefault()
                              : undefined
                          }
                        >
                          <span className="span--hover">{item.text}</span>
                        </NavLink>
                        {item.submenu.length > 0 && (
                          <ul className="nav__second-level">
                            {item.submenu.map((subitem, index) => {
                              return (
                                <li
                                  key={index}
                                  className="nav__second-level-li"
                                >
                                  <div className="nav__second-level-li-text">
                                    <NavLink
                                      to={subitem.to}
                                      className="nav__second-level-li-link"
                                    >
                                      <span>{subitem.text}</span>
                                    </NavLink>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="button__wrapper">
                <Button type="arrow outline" text="Sign Up" color="white" />
              </div>
            </div>
            <div
              className="hamburger"
              name="hamburger"
              onClick={this.clickHamburger}
            >
              <div className="hamburger__line" name="hamburger"></div>
              <div
                className="hamburger__line hamburger__line--hidden"
                name="hamburger"
              ></div>
              <div className="hamburger__line" name="hamburger"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);