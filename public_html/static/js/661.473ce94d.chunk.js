"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[661],{5569:function(e,a,i){i.d(a,{Z:function(){return b}});var s=i(5671),t=i(3144),n=i(136),r=i(9388),o=i(168),l=i(2791);var c=i.p+"static/media/left.482b7a8cfb145445f061ba6fd0059559.svg";var m,d=i.p+"static/media/right.860f22fa1256bcd17b01333cd0b9705b.svg",f=i(4225),h=i(2558),p=i(401),u=(i(2532),i(2326),i(4928),i(7743)),_=i(3173),x=i(184),g=(0,u.Ps)(m||(m=(0,o.Z)(["\n  query GetAllTestimonials {\n    testimonials {\n      nodes {\n        title\n        content\n        position\n      }\n    }\n  }\n"]))),v={numberOftestimonialsPerView:3,autoplaySpeed:4e3},b=function(e){(0,n.Z)(i,e);var a=(0,r.Z)(i);function i(e){var t;return(0,s.Z)(this,i),(t=a.call(this,e)).testimonials=[],t.handleResize=function(){var e=window.innerWidth;e>=p.y.large?v={numberOftestimonialsPerView:3}:e<p.y.large&&e>=p.y.medium||e<p.y.medium&&e>=p.y.small?v={numberOftestimonialsPerView:2}:e<p.y.small&&(v={numberOftestimonialsPerView:1}),t.setState(v)},t.state=null,t}return(0,t.Z)(i,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize),this.setState(this.testimonials)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return(0,x.jsx)(y,{values:this.testimonials})}}]),i}(l.Component),y=function(e){var a=(0,l.useRef)(),i=(0,_.a)(g),s=i.loading,t=i.error,n=i.data;if(s)return(0,x.jsx)("div",{children:"Loading..."});if(t)return(0,x.jsxs)("div",{children:["Error: ",t]});var r=n.testimonials.nodes;return(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"testimonial__container",children:[(0,x.jsx)("p",{className:"testimonial__name section_name",children:"TESTIMONIAL"}),(0,x.jsx)("h2",{className:"testimonial__title",children:"What people are saying about Paxform"}),(0,x.jsxs)("div",{className:"testimonial__swiper",children:[(0,x.jsx)(f.tq,{slidesPerView:v.numberOftestimonialsPerView,spaceBetween:24,slidesPerGroup:v.numberOftestimonialsPerView,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},autoHeight:!1,pagination:{clickable:!0},onBeforeInit:function(e){a.current=e},modules:[h.pt,h.tl,h.W_],className:"testimonial__slider",children:r.map((function(e,a){return(0,x.jsx)(f.o5,{children:(0,x.jsxs)("div",{className:"testimonial_card",children:[(0,x.jsx)("div",{className:"testimonial_card__description",dangerouslySetInnerHTML:{__html:e.content}}),(0,x.jsxs)("div",{className:"testimonial_card__name-box",children:[(0,x.jsx)("h3",{className:"testimonial_card__name",children:e.title}),(0,x.jsx)("p",{className:"testimonial_card__position",children:e.position})]})]})},a)}))}),(0,x.jsx)("div",{className:"slider__buttons--left",children:(0,x.jsx)("button",{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.slidePrev()},children:(0,x.jsx)("img",{src:c,alt:"arrow left"})})}),(0,x.jsx)("div",{className:"slider__buttons--right",children:(0,x.jsx)("button",{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.slideNext()},children:(0,x.jsx)("img",{src:d,alt:"arrow right"})})})]})]})})}},8933:function(e,a,i){i.r(a),i.d(a,{default:function(){return T}});var s=i(5671),t=i(3144),n=i(7326),r=i(136),o=i(9388),l=i(2791),c=i(4913),m=i(4225),d=i(2558),f=i.p+"static/media/Hero Illustration.d389792ff61bd47407f6.png",h=i.p+"static/media/Business Illustration.757845ed053513a89809.png";var p=i.p+"static/media/Bg-bi.61700ddfb31724a4011c7676e6d5f8a2.svg",u=i.p+"static/media/Personal illustration.171746727b14a20db56e.png";var _=i.p+"static/media/Bg-personal.bba0acbb235f1db9c96babb09e169d39.svg";var x=i.p+"static/media/flipreach.3f184a17af4c9b4ff6c2edb6a6c3042b.svg";var g=i.p+"static/media/amazon.e7c5cd6fab3a6b295e65e45c2fd71b42.svg";var v=i.p+"static/media/flowbase.44dedd89764e9a1352f01f136f4be13d.svg";var b=i.p+"static/media/linkedin.fcb3bb1b5a14aa08c0e710ca2ba46807.svg";var y=i.p+"static/media/paypal.21d72e0dd294dbfe83db60533efc2606.svg";var j=i.p+"static/media/icon1-1.74fff56b0827e75f678c3846a8430fae.svg";var N=i.p+"static/media/icon1-2.6b825c1b365d71d4f71bb2a5c4e8d654.svg";var w=i.p+"static/media/icon1-3.4577f8b9eec0cfd333507d0f4c05120b.svg";var k=i.p+"static/media/icon2-1.d0e08f4c9653c995cfb1951e4f3709c7.svg";var P=i.p+"static/media/icon2-2.9f0138d4b1c147850ce070739777eea2.svg";var z=i.p+"static/media/icon2-3.d2c48ed49be1ad45940316f6e3962cce.svg";var S=i.p+"static/media/icon2-4.85f0257b27045e51d76b04fb871a9cce.svg";var R=i.p+"static/media/icon2-5.3e7ca51e9ddb0270adb04bd79a0b5d6a.svg";var Z=i.p+"static/media/simplify1.593ef3a2fce090c10b0939abc313a1f8.svg";var O=i.p+"static/media/simplify2.e13de96f80a70fb8f2fb071978ebfa3a.svg",W=i(4905),C=i(5569),I=i(6270),L=i(401),V=(i(2532),i(2326),i(4928),i(184)),B=[{image:j,title:"Create forms that suit your organization\u2019s needs and send them to customers",description:"The personal data you submit is captured after one use and stored safely in the app for future use\u2014any time, any form. New information is saved automatically as you complete each form."},{image:N,title:"Eliminate transcription & administrative rework",description:"Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates."},{image:w,title:"Reduce form abandonment rates",description:"Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant."},{image:w,title:"Reduce form abandonment rates",description:"Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant."}],E=[{image:k,title:"Capture, save and use personal information to complete forms and applications",description:"The personal data you submit is captured after one use and stored safely in the app for future use\u2014any time, any form. New information is saved automatically as you complete each form."},{image:P,title:"Share forms and applications with other parties and organizations",description:"Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates."},{image:z,title:"Complete simple and complex forms",description:"Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant."},{image:S,title:"Link your family's data",description:"The personal data you submit is captured after one use and stored safely in the app for future use\u2014any time, any form. New information is saved automatically as you complete each form."},{image:R,title:"Electronically sign documents",description:"Experience a new level of convenience by using your stored signatures to electronically sign your documents."}],H={numberOfComapniesPerView:4,autoplaySpeed:4e3},T=function(e){(0,r.Z)(i,e);var a=(0,o.Z)(i);function i(e){var t;return(0,s.Z)(this,i),(t=a.call(this,e)).state=H,t.handleResize=t.handleResize.bind((0,n.Z)(t)),t.handleHeroImageSize=t.handleHeroImageSize.bind((0,n.Z)(t)),t}return(0,t.Z)(i,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){var e=window.innerWidth;e>=L.y.large||e<L.y.large&&e>=L.y.medium?H={numberOfComapniesPerView:4}:(e<L.y.medium&&e>=L.y.small||e<L.y.small)&&(H={numberOfComapniesPerView:2}),this.handleHeroImageSize(),this.setState(H)}},{key:"handleHeroImageSize",value:function(){var e=document.querySelector(".hero__image-large"),a=e.clientHeight,i=e.clientWidth,s=document.querySelector(".hero__empty-box");s.style.minHeight=a+60+"px",s.style.height=a+60+"px",s.style.width=i+"px"}},{key:"render",value:function(){return(0,V.jsxs)("main",{className:"home",children:[(0,V.jsxs)("section",{className:"hero",children:[(0,V.jsxs)("div",{className:"container hero__wrapper",children:[(0,V.jsxs)("div",{className:"hero__content",children:[(0,V.jsxs)("h1",{className:"hero__title",children:["Forms",(0,V.jsx)("br",{})," without forms."]}),(0,V.jsx)("p",{className:"hero__description",children:"Paxform allows users to securely save and manage their personal data for immediate reference, enabling them to easily sign documents and share information with others."}),(0,V.jsxs)("div",{className:"hero__button",children:[(0,V.jsx)(c.Z,{text:"Sign Up",type:"flat-green arrow",color:"white"}),(0,V.jsx)(c.Z,{text:"How it works",type:"outline triangle-right",color:"white"})]})]}),(0,V.jsx)("div",{className:"hero__empty-box"}),(0,V.jsx)("div",{className:"hero__image",children:(0,V.jsx)("img",{className:"hero__image-large",src:f,alt:"large hero illustrator"})})]}),(0,V.jsx)("div",{className:"bottom_triangle"})]}),(0,V.jsx)("section",{className:"slider",children:(0,V.jsx)("div",{className:"container ",children:(0,V.jsx)("div",{className:"slider__container",children:(0,V.jsxs)(m.tq,{spaceBetween:30,slidesPerView:H.numberOfComapniesPerView,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:4e3},modules:[d.pt],className:"slider__swiper",children:[(0,V.jsx)(m.o5,{children:(0,V.jsx)("div",{className:"slider__image",children:(0,V.jsx)("img",{src:v,alt:"flowbase"})})}),(0,V.jsx)(m.o5,{children:(0,V.jsx)("div",{className:"slider__image",children:(0,V.jsx)("img",{src:x,alt:"flipreach"})})}),(0,V.jsx)(m.o5,{children:(0,V.jsx)("div",{className:"slider__image",children:(0,V.jsx)("img",{src:g,alt:"amazon"})})}),(0,V.jsx)(m.o5,{children:(0,V.jsx)("div",{className:"slider__image",children:(0,V.jsx)("img",{src:b,alt:"linkedin"})})}),(0,V.jsx)(m.o5,{children:(0,V.jsx)("div",{className:"slider__image",children:(0,V.jsx)("img",{src:y,alt:"paypal"})})})]})})})}),(0,V.jsxs)("section",{className:"platform",children:[(0,V.jsxs)("div",{className:"container platform__container",children:[(0,V.jsxs)("div",{className:"platform__top",children:[(0,V.jsxs)("div",{className:"platform__top-left",children:[(0,V.jsx)("p",{className:"platform__name",children:"BUSINESS PLATFORM"}),(0,V.jsx)("h2",{className:"platform__title",children:"Your business information at your fingertips"})]}),(0,V.jsx)("div",{className:"platform__top-right",children:(0,V.jsx)(c.Z,{type:"flat-green arrow",color:"white",text:"Learn more about Business"})})]}),(0,V.jsx)("div",{className:"business_platform__content",children:(0,V.jsxs)("div",{className:"business_platform__content-grid",children:[B.map((function(e,a){return(0,V.jsxs)("div",{className:"business_platform__content-item",children:[(0,V.jsx)("div",{className:"business_platform__content-item-image",children:(0,V.jsx)("img",{src:e.image,alt:"icon"})}),(0,V.jsx)("h3",{className:"business_platform__content-item-title",children:e.title}),(0,V.jsx)("p",{className:"business_platform__content-item-description",children:e.description})]},a)})),(0,V.jsx)("div",{className:"business_platform__image",children:(0,V.jsx)("img",{src:h,alt:"Business"})})]})})]}),(0,V.jsx)("img",{className:"image__background",src:p,alt:"","aria-hidden":"true"}),(0,V.jsx)("div",{className:"bottom_triangle bottom_triangle--dark-blue"})]}),(0,V.jsxs)("section",{className:"platform background--dark-blue platform__title--white",children:[(0,V.jsxs)("div",{className:"container platform__container",children:[(0,V.jsxs)("div",{className:"platform__top",children:[(0,V.jsxs)("div",{className:"platform__top-left",children:[(0,V.jsx)("p",{className:"platform__name platform__name--green",children:"PERSONAL PLATFORM"}),(0,V.jsx)("h2",{className:"platform__title ",children:"Your personal information at your fingertips"})]}),(0,V.jsx)("div",{className:"platform__top-right",children:(0,V.jsx)(c.Z,{type:"outline arrow",color:"green",text:"Learn more about Personal"})})]}),(0,V.jsx)("div",{className:"personal_platform__content",children:(0,V.jsxs)("div",{className:"business_platform__content-grid",children:[E.map((function(e,a){return(0,V.jsxs)("div",{className:"personal_platform__content-item",children:[(0,V.jsx)("div",{className:"personal_platform__content-item-image",children:(0,V.jsx)("img",{src:e.image,alt:"icon"})}),(0,V.jsx)("h3",{className:"personal_platform__content-item-title",children:e.title}),(0,V.jsx)("p",{className:"personal_platform__content-item-description",children:e.description})]},a)})),(0,V.jsx)("div",{className:"personal_platform__image",children:(0,V.jsx)("img",{src:u,alt:"Personel"})})]})})]}),(0,V.jsx)("img",{className:"image__background-personal",src:_,alt:"","aria-hidden":"true"}),(0,V.jsx)("div",{className:"bottom_triangle bottom_triangle--light-blue"})]}),(0,V.jsx)(W.Z,{}),(0,V.jsxs)("section",{className:"testimonial",children:[(0,V.jsx)(C.Z,{}),(0,V.jsx)("div",{className:"bottom_triangle bottom_triangle--blue"})]}),(0,V.jsxs)("section",{className:"simplify",children:[(0,V.jsxs)("div",{className:"container simplify__container",children:[(0,V.jsx)("p",{className:"simplify__why section_name",children:"WHY PAXFORM"}),(0,V.jsx)("h2",{className:"simplify__title",children:"We simplify your work"}),(0,V.jsxs)("div",{className:"simplify_flexbox",children:[(0,V.jsxs)("div",{className:"simplify_flexbox__content",children:[(0,V.jsx)("h3",{className:"simplify_flexbox__content-title",children:"Find all your information in one place"}),(0,V.jsx)("p",{children:"It can be a hassle looking for where you have stored different information. With Paxform, you can keep all your information like biodatas, signatures and documents, including your contacts, all in one app."}),(0,V.jsxs)("p",{children:[" ","Better yet, all the data is encrypted and only you and the person you share it with can have access to it."]})]}),(0,V.jsx)("div",{className:"simplify_flexbox__image",children:(0,V.jsx)("img",{src:Z,alt:"all information"})})]}),(0,V.jsxs)("div",{className:"simplify_flexbox rtl",children:[(0,V.jsxs)("div",{className:"simplify_flexbox__content ltr",children:[(0,V.jsx)("h3",{className:"simplify_flexbox__content-title",children:"Most forms are too complex"}),(0,V.jsx)("p",{children:"Completing forms manually is an incredibly long process, prone to typos and form abandonment that often result in delays. To make matters worse, nearly 30% of people have difficulties understanding basic forms."}),(0,V.jsx)("p",{children:"With Paxform, you fill in your data once and it will automatically match that data no matter which form you are filling in. Say goodbye to manually inputting the same data over and over again."})]}),(0,V.jsx)("div",{className:"simplify_flexbox__image",children:(0,V.jsx)("img",{src:O,alt:"most forms"})})]})]}),(0,V.jsx)("div",{className:"bottom_triangle bottom_triangle--light-blue"})]}),(0,V.jsx)(I.Z,{})]})}}]),i}(l.Component)}}]);
//# sourceMappingURL=661.473ce94d.chunk.js.map