import React, { Component } from "react";
import Button from "../../components/Button/Button";
// import fillOutForm from '../../assets/images/fill-out-form.svg';
// import fillOutFormMObile from '../../assets/images/fill-out-form__mobile.svg';
import "./Personal.scss";

// import personelHero from '../../assets/images/personal-hero.svg';
import personalIllustration from "../../assets/images/Personal/Hero Illustration.png";
import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";

// import featuresImg from '../../assets/images/feature-organisation.svg';
import { ReactComponent as Tick } from "../../assets/images/tick.svg";
import Testimonial from "../../components/Testimonial/Testimonial";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import RelatedCard from "../../components/RelatedCard/RelatedCard";
import GetStarted from "../../components/GetStarted/GetStarted";

const features = [
  {
    title: "Create Form Templates",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    isOpened: true,
  },
  {
    title: "Multiple Admins",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isOpened: false,
  },
  {
    title: "View and Procees Applications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isOpened: false,
  },
  {
    title: "Use API",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
  {
    title: "Request Information",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
];

const plans = [
  {
    mainColor: "grey",
    title: "Free",
    price: [0, "forever"],
    description: "A simple way to get started for you new to passfolio.",
    features: [
      "Unlimited data",
      "5 Person saved",
      "A simple way for you new started to Passfolio.",
      "A simple way for you new started to Passfolio.",
    ],
  },
  {
    mainColor: "green",
    title: "Premium",
    price: [50, "forever"],
    description: "Best for freelance coders & designers who need.",
    features: [
      "Unlimited data",
      "5 Person saved",
      "A simple way for you new started to Passfolio.",
      "A simple way for you new started to Passfolio.",
    ],
  },
  {
    mainColor: "blue",
    title: "Family",
    price: ["Custom Pricing", ""],
    description: "Best for freelance coders & designers who need.",
    features: [
      "Unlimited data",
      "5 Person saved",
      "A simple way for you new started to Passfolio.",
      "A simple way for you new started to Passfolio.",
    ],
  },
];

export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = this.position;
  }

  componentDidMount() {
    const panel = document.querySelector(".features__accordion-item-panel");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  handleAccorionTitleClick = (e) => {
    const panel = e.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    document.querySelectorAll(".features__accordion-item").forEach((item) => {
      if (item !== e.target.parentElement) {
        item.lastChild.style.maxHeight = null;
      }
    });
  };

  render() {
    return (
      <main className="personal">
        <section className="hero">
          <div className="container hero__wrapper">
            <div className="hero__content">
              <p className="hero__name">PERSONAL</p>
              <h1 className="hero__title">
                Your Personal Information in One Place Fill Any Form, Anywhere
              </h1>
              <p className="hero__description">
                Paxform’s function is simple: it completely fills any form,
                anytime. You can manage and save your personal data, allowing
                you to sign documents and send them to organisations with ease.
                No need to worry about security and privacy—Paxform fully
                encrypts your data to ensure your safety.
              </p>
              <div className="hero__button">
                <Button text="See Plan" type="flat arrow" color="white" />
                <Button
                  text="How it works"
                  type="outline triangle-right"
                  color="white"
                />
              </div>
            </div>
            <div className="hero__image">
              <img
                src={personalIllustration}
                alt="personal hero"
                className="hero__image-large"
              />
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--light-green"></div>
        </section>

        <section className="flex_box">
          <div className="container flex_box__container">
            <div className="flex_box__image">
              <img src={repeatlyIllustration} alt="fill out form" />
            </div>
            <div className="flex_box__content">
              <h1 className="flex_box__content-title">
                Repeatedly Filling Out Forms with the Same Data Requirements?
              </h1>
              <div className="flex_box__content-description">
                Save precious time by having all your information on demand.
                Autocomplete forms and applications on the go. Only fill in your
                data once.
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--green"></div>
        </section>

        <section className="features">
          <div className="container">
            <div className="features__container">
              <div className="features__image">
                <img src={repeatlyIllustration} alt="forms from Paxform" />
              </div>
              <div className="features__accordion">
                <p className="features__name section_name">Features</p>
                <h1 className="features__title">
                  Features For Your Organisation
                </h1>
                {features.map((feature, index) => (
                  <div className="features__accordion-item" key={index}>
                    <h2
                      className="features__accordion-item-title"
                      onClick={(e) => this.handleAccorionTitleClick(e)}
                    >
                      {feature.title}
                    </h2>
                    <div className={`features__accordion-item-panel`}>
                      <div
                        className="features__accordion-item-description"
                        key={`description-${index}`}
                      >
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>

        <section className="plans">
          <div className="container plans__container">
            <div className="plans__top">
              <div className="plans__top-title">
                <p className="plans__name section_name">PERSONAL PLANS</p>
                <h1 className="plans__title section_title">
                  Choose a Plan That’s Right for You
                </h1>
              </div>
              <div className="plans__top-button">
                <Button
                  className="plans__button"
                  text="See full pricing"
                  type="arrow outline"
                  color="green"
                />
              </div>
            </div>

            <div className="plans__pricing">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing_box ${
                    plan.mainColor === "green"
                      ? "pricing_box--green"
                      : plan.mainColor === "blue"
                      ? "pricing_box--blue"
                      : plan.mainColor === "grey"
                      ? "pricing_box--grey"
                      : ""
                  }`}
                >
                  <div className="pricing_box__top">
                    <div
                      className={`pricing_box__dot ${
                        plan.mainColor === "green"
                          ? "pricing_box__dot--green"
                          : plan.mainColor === "blue"
                          ? "pricing_box__dot--blue"
                          : ""
                      }`}
                    ></div>
                    <h2 className="pricing_box__title">{plan.title}</h2>
                    <p className="pricing_box__description">
                      {plan.description}
                    </p>
                    <div className="pricing_box__price">
                      <span className="pricing_box__price-bt">
                        {typeof plan.price[0] === "number"
                          ? `$${plan.price[0]}`
                          : plan.price[0]}
                      </span>
                      <span className="pricing_box__price-forever">
                        {plan.price[1] === "forever" ? "/forever" : ""}
                      </span>
                    </div>
                  </div>
                  <div className="pricing_box__bottom">
                    {plan.mainColor === "green" ? (
                      <Button
                        text="Get Started"
                        type="flat arrow"
                        color="white"
                      />
                    ) : (
                      <Button
                        text="Get Started"
                        type="outline arrow"
                        color="green"
                      />
                    )}

                    <p className="pricing_box__price-sub">What’s included</p>
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <Tick
                            className={`tick ${
                              plan.mainColor === "green"
                                ? "tick--green"
                                : plan.mainColor === "blue"
                                ? "tick--blue"
                                : ""
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="testimonial">
          <Testimonial />
          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>

        <section className="platform background--dark-blue platform__title--white">
          <div className="container platform__container">
            <div className="platform__top">
              <div className="platform__top-left">
                <p className="platform__name platform__name--green section_name">
                  Blog
                </p>
                <h2 className="platform__title ">
                  Stories, Updates & Ideas from Paxform.
                </h2>
              </div>
              <div className="platform__top-right">
                <Button type="outline arrow" text="See All Resources" />
              </div>
            </div>
            <div className="platform__content">
              <RelatedCard
                image={card1}
                title="First Story"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                readLink={true}
              />
              <RelatedCard
                image={card2}
                title="Second Story"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                readLink={true}
              />
              <RelatedCard
                image={card3}
                title="Third Story"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                readLink={true}
              />
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--light-blue"></div>
        </section>

        <GetStarted />
      </main>
    );
  }
}
