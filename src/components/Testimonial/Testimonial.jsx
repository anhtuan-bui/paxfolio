import React, { Component, useRef } from "react";
import "./Testimonial.scss";

import arrowLeft from "../../assets/images/left.svg";
import arrowRight from "../../assets/images/right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SCREEN_SIZE } from "../../configurations/configurations";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import { GET_ALL_TESTIMONIALS } from "../../lib/graphqlQuery";
import { useTranslation } from "react-i18next";
import { queryLanguageCode } from "../../lib/util";

var home = {
  numberOftestimonialsPerView: 3,
  autoplaySpeed: 4000,
};

export default class Testimonial extends Component {
  testimonials = [];

  constructor(props) {
    super(props);

    this.state = null;
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    this.setState(this.testimonials);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= SCREEN_SIZE.large) {
      home = {
        numberOftestimonialsPerView: 4,
      };
    } else if (
      screenWidth < SCREEN_SIZE.large &&
      screenWidth >= SCREEN_SIZE.medium
    ) {
      home = {
        numberOftestimonialsPerView: 2,
      };
    } else if (
      screenWidth < SCREEN_SIZE.medium &&
      screenWidth >= SCREEN_SIZE.small
    ) {
      home = {
        numberOftestimonialsPerView: 2,
      };
    } else if (screenWidth < SCREEN_SIZE.small) {
      home = {
        numberOftestimonialsPerView: 1,
      };
    }
    this.setState(home);
  };

  render() {
    return <TestimonialSwiper values={this.testimonials} />;
  }
}

const TestimonialSwiper = () => {
  const swiperRef = useRef();
  const { t } = useTranslation();

  const { loading, data } = useQuery(GET_ALL_TESTIMONIALS, {variables: {
    language: queryLanguageCode(),
    first: 10
  }});

  const testimonials = !loading
    ? data?.testimonials?.nodes
    : Array.from({ length: 4 });

  return (
    <div className="container">
      <div className="testimonial__container">
        <p className="testimonial__name section_name">
          {t("testimonial.name")}
        </p>
        <h2 className="testimonial__title">{t("testimonial.title")}</h2>
        <div className="testimonial__swiper">
          <Swiper
            slidesPerView={home.numberOftestimonialsPerView}
            spaceBetween={24}
            slidesPerGroup={home.numberOftestimonialsPerView}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            autoHeight={false}
            pagination={{
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonial__slider"
          >
            {testimonials?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="slider__buttons--left">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={arrowLeft} alt="arrow left" />
            </button>
          </div>
          <div className="slider__buttons--right">
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ data }) => {
  const content = data?.content;
  const title = data ? data?.title : <Skeleton width={"40%"} />;
  const position = data ? data?.position : <Skeleton width={"50%"} />;

  return (
    <div className="testimonial_card">
      {content ? (
        <div
          className="testimonial_card__description"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      ) : (
        <div className="testimonial_card__description">
          <Skeleton count={5} />
          <Skeleton width={"75%"} />
        </div>
      )}
      <div className="testimonial_card__name-box">
        <h3 className="testimonial_card__name">{title}</h3>
        <p className="testimonial_card__position">{position}</p>
      </div>
    </div>
  );
};
