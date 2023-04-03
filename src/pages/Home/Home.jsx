import React, { Component } from "react";
import Button from "../../components/Button/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";

import homeHeroIllustrator from "../../assets/images/home/Hero Illustration.png";
import businessIllustration from "../../assets/images/home/Business Illustration.png";

import bgBusinessIlustration from "../../assets/images/home/Bg-bi.svg";

import personalIllustration from "../../assets/images/home/Personal illustration.png";
import bgPersonalIlustration from "../../assets/images/home/Bg-personal.svg";

// import securityPolicyImage from "../../assets/images/home/security policy.svg";
// import bgSecurityPolicy from "../../assets/images/home/Bg-security.svg";

// import { ReactComponent as HeroRight } from '../../assets/images/large-hero.svg';
// import { ReactComponent as CertificateIllustrator } from '../../assets/images/certificate-illustrator.svg';

import flipreach from "../../assets/images/flipreach.svg";
import amazon from "../../assets/images/amazon.svg";
import flowbase from "../../assets/images/flowbase.svg";
import linkedin from "../../assets/images/linkedin.svg";
import paypal from "../../assets/images/paypal.svg";

import icon11 from "../../assets/images/icon1-1.svg";
import icon12 from "../../assets/images/icon1-2.svg";
import icon13 from "../../assets/images/icon1-3.svg";
// import businessImg from "../../assets/images/Business Image.svg";

import icon21 from "../../assets/images/icon2-1.svg";
import icon22 from "../../assets/images/icon2-2.svg";
import icon23 from "../../assets/images/icon2-3.svg";
import icon24 from "../../assets/images/icon2-4.svg";
import icon25 from "../../assets/images/icon2-5.svg";
// import personalPlatformImg from "../../assets/images/Personal Platform Image.svg";

// import securityPolicy from "../../assets/images/security-policy.svg";

import information from "../../assets/images/home/simplify1.svg";
// import information from "../../assets/images/all information.svg";
import mostForms from "../../assets/images/home/simplify2.svg";
// import mostForms from "../../assets/images/most forms.svg";

import SecurityPolicy from "../../components/SecurityPolicy/SecurityPolicy";
import Testimonial from "../../components/Testimonial/Testimonial";
import GetStarted from "../../components/GetStarted/GetStarted";
import { SCREEN_SIZE } from "../../configurations/configurations";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./Home.scss";

const businessPlatform = [
	{
		image: icon11,
		title:
			"Create forms that suit your organization’s needs and send them to customers",
		description:
			"The personal data you submit is captured after one use and stored safely in the app for future use—any time, any form. New information is saved automatically as you complete each form.",
	},
	{
		image: icon12,
		title: "Eliminate transcription & administrative rework",
		description:
			"Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates.",
	},
	{
		image: icon13,
		title: "Reduce form abandonment rates",
		description:
			"Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.",
	},
	{
		image: icon13,
		title: "Reduce form abandonment rates",
		description:
			"Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.",
	},
];

const personalPlatform = [
	{
		image: icon21,
		title:
			"Capture, save and use personal information to complete forms and applications",
		description:
			"The personal data you submit is captured after one use and stored safely in the app for future use—any time, any form. New information is saved automatically as you complete each form.",
	},
	{
		image: icon22,
		title: "Share forms and applications with other parties and organizations",
		description:
			"Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates.",
	},
	{
		image: icon23,
		title: "Complete simple and complex forms",
		description:
			"Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.",
	},
	{
		image: icon24,
		title: "Link your family's data",
		description:
			"The personal data you submit is captured after one use and stored safely in the app for future use—any time, any form. New information is saved automatically as you complete each form.",
	},
	{
		image: icon25,
		title: "Electronically sign documents",
		description:
			"Experience a new level of convenience by using your stored signatures to electronically sign your documents.",
	},
];

var home = {
	numberOfComapniesPerView: 4,
	autoplaySpeed: 4000,
};

export default class Home extends Component {
	registerLink = process.env.REACT_APP_REGISTER_LINK;
	constructor(props) {
		super(props);

		this.state = home;
		// bind handleResize to this component
		this.handleResize = this.handleResize.bind(this);

		//bind handleHeroImageSize to this component
		this.handleHeroImageSize = this.handleHeroImageSize.bind(this);
	}
	componentDidMount() {
		this.handleResize();
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize() {
		const screenWidth = window.innerWidth;
		if (screenWidth >= SCREEN_SIZE.large) {
			home = {
				numberOfComapniesPerView: 4,
			};
		} else if (
			screenWidth < SCREEN_SIZE.large &&
			screenWidth >= SCREEN_SIZE.medium
		) {
			home = {
				numberOfComapniesPerView: 4,
			};
		} else if (
			screenWidth < SCREEN_SIZE.medium &&
			screenWidth >= SCREEN_SIZE.small
		) {
			home = {
				numberOfComapniesPerView: 2,
			};
		} else if (screenWidth < SCREEN_SIZE.small) {
			home = {
				numberOfComapniesPerView: 2,
			};
		}

		this.handleHeroImageSize();
		this.setState(home);
	}

	handleHeroImageSize() {
		// select hero image, get height and width
		const heroImage = document.querySelector(".hero__image-large");
		const heroImageHeight = heroImage.clientHeight;
		const heroImageWidth = heroImage.clientWidth;

		// select hero empty box and set height and width
		const heroEmptyBox = document.querySelector(".hero__empty-box");
		heroEmptyBox.style.minHeight = heroImageHeight + 60 + "px";
		heroEmptyBox.style.height = heroImageHeight + 60 + "px";
		heroEmptyBox.style.width = heroImageWidth + "px";
	}

	render() {
		return (
			<main className="home">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<h1 className="hero__title">
								Forms
								<br /> without forms.
							</h1>
							<p className="hero__description">
								Paxform allows users to securely save and manage their personal
								data for immediate reference, enabling them to easily sign
								documents and share information with others.
							</p>
							<div className="hero__button">
								<Button text="Sign Up" type="flat-green arrow" color="white" href={this.registerLink}/>
								<Button
									text="How it works"
									type="outline triangle-right"
									color="white"
								/>
							</div>
						</div>
						<div className="hero__empty-box"></div>
						<div className="hero__image">
							<img
								className="hero__image-large"
								src={homeHeroIllustrator}
								alt="large hero illustrator"
							/>
						</div>
					</div>
					<div className="bottom_triangle"></div>
				</section>
				<section className="slider">
					<div className="container ">
						<div className="slider__container">
							<Swiper
								spaceBetween={30}
								slidesPerView={home.numberOfComapniesPerView}
								loop={true}
								loopFillGroupWithBlank={true}
								autoplay={{
									delay: 4000,
								}}
								modules={[Autoplay]}
								className="slider__swiper"
							>
								<SwiperSlide>
									<div className="slider__image">
										<img src={flowbase} alt="flowbase" />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slider__image">
										<img src={flipreach} alt="flipreach" />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slider__image">
										<img src={amazon} alt="amazon" />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slider__image">
										<img src={linkedin} alt="linkedin" />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="slider__image">
										<img src={paypal} alt="paypal" />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</section>

				<section className="platform">
					<div className="container platform__container">
						<div className="platform__top">
							<div className="platform__top-left">
								<p className="platform__name">BUSINESS PLATFORM</p>
								<h2 className="platform__title">
									Your business information at your fingertips
								</h2>
							</div>
							<div className="platform__top-right">
								<Button
									type="flat-green arrow"
									color="white"
									text="Learn more about Business"
									href='/business'
								/>
							</div>
						</div>
						<div className="business_platform__content">
							<div className="business_platform__content-grid">
								{businessPlatform.map((item, index) => {
									return (
										<div
											className="business_platform__content-item"
											key={index}
										>
											<div className="business_platform__content-item-image">
												<img src={item.image} alt="icon" />
											</div>
											<h3 className="business_platform__content-item-title">
												{item.title}
											</h3>
											<p className="business_platform__content-item-description">
												{item.description}
											</p>
										</div>
									);
								})}
								<div className="business_platform__image">
									<img src={businessIllustration} alt="Business" />
								</div>
							</div>
						</div>
					</div>
					<img
						className="image__background"
						src={bgBusinessIlustration}
						alt=""
						aria-hidden="true"
					/>
					<div className="bottom_triangle bottom_triangle--dark-blue"></div>
				</section>

				<section className="platform background--dark-blue platform__title--white">
					<div className="container platform__container">
						<div className="platform__top">
							<div className="platform__top-left">
								<p className="platform__name platform__name--green">
									PERSONAL PLATFORM
								</p>
								<h2 className="platform__title ">
									Your personal information at your fingertips
								</h2>
							</div>
							<div className="platform__top-right">
								<Button
									type="outline arrow"
									color="green"
									text="Learn more about Personal"
									href='/personal'
								/>
							</div>
						</div>
						<div className="personal_platform__content">
							<div className="business_platform__content-grid">
								{personalPlatform.map((item, index) => {
									return (
										<div
											className="personal_platform__content-item"
											key={index}
										>
											<div className="personal_platform__content-item-image">
												<img src={item.image} alt="icon" />
											</div>
											<h3 className="personal_platform__content-item-title">
												{item.title}
											</h3>
											<p className="personal_platform__content-item-description">
												{item.description}
											</p>
										</div>
									);
								})}
								<div className="personal_platform__image">
									<img src={personalIllustration} alt="Personel" />
								</div>
							</div>
						</div>
					</div>

					<img
						className="image__background-personal"
						src={bgPersonalIlustration}
						alt=""
						aria-hidden="true"
					/>
					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>

				<SecurityPolicy />

				<section className="testimonial">
					<Testimonial />
					<div className="bottom_triangle bottom_triangle--blue"></div>
				</section>

				<section className="simplify">
					<div className="container simplify__container">
						<p className="simplify__why section_name">WHY PAXFORM</p>
						<h2 className="simplify__title">We simplify your work</h2>
						<div className="simplify_flexbox">
							<div className="simplify_flexbox__content">
								<h3 className="simplify_flexbox__content-title">
									Find all your information in one place
								</h3>
								<p>
									It can be a hassle looking for where you have stored different
									information. With Paxform, you can keep all your information
									like biodatas, signatures and documents, including your
									contacts, all in one app.
								</p>

								<p>
									{" "}
									Better yet, all the data is encrypted and only you and the
									person you share it with can have access to it.
								</p>
							</div>
							<div className="simplify_flexbox__image">
								<img src={information} alt="all information" />
							</div>
						</div>

						<div className="simplify_flexbox rtl">
							<div className="simplify_flexbox__content ltr">
								<h3 className="simplify_flexbox__content-title">
									Most forms are too complex
								</h3>
								<p>
									Completing forms manually is an incredibly long process, prone
									to typos and form abandonment that often result in delays. To
									make matters worse, nearly 30% of people have difficulties
									understanding basic forms.
								</p>

								<p>
									With Paxform, you fill in your data once and it will
									automatically match that data no matter which form you are
									filling in. Say goodbye to manually inputting the same data
									over and over again.
								</p>
							</div>
							<div className="simplify_flexbox__image">
								<img src={mostForms} alt="most forms" />
							</div>
						</div>
					</div>

					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>

				<GetStarted />
			</main>
		);
	}
}
