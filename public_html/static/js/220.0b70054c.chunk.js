"use strict";(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[220],{7112:function(e,t,s){s.d(t,{Z:function(){return m}});var i=s(5671),n=s(3144),r=s(136),a=s(9388),o=s(2791),l=s(1087),c=s(7923),d=s(184),m=function(e){(0,r.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"render",value:function(){return(0,d.jsxs)(l.rU,{className:"read_article",to:this.props.to,children:[(0,d.jsx)("span",{children:"Read Article"}),(0,d.jsx)(c.r,{className:"read_article__arrow"})]})}}]),s}(o.Component)},1058:function(e,t,s){s.d(t,{Z:function(){return d}});var i=s(5671),n=s(3144),r=s(136),a=s(9388),o=s(2791),l=s(7112),c=s(184),d=function(e){(0,r.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"render",value:function(){return(0,c.jsxs)("div",{className:"related_card",children:[(0,c.jsxs)("div",{className:"related_card__top",children:[this.props.image?(0,c.jsx)("div",{className:"related_card__image",children:(0,c.jsx)("img",{src:this.props.image,alt:"first story"})}):"",this.props.category?(0,c.jsx)("p",{className:"related_card__category",children:"Insight"}):"",this.props.title?(0,c.jsx)("h2",{className:"related_card__title",children:"First Story"}):"",this.props.description?(0,c.jsx)("p",{className:"related_card__description",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour..."}):""]}),(0,c.jsx)("div",{className:"related_card__bottom",children:this.props.readLink?(0,c.jsx)(l.Z,{to:"related"}):""})]})}}]),s}(o.Component)},5569:function(e,t,s){s.d(t,{Z:function(){return _}});var i=s(4165),n=s(5861),r=s(5671),a=s(3144),o=s(136),l=s(9388),c=s(2791);var d=s.p+"static/media/left.482b7a8cfb145445f061ba6fd0059559.svg";var m=s.p+"static/media/right.860f22fa1256bcd17b01333cd0b9705b.svg",p=s(4225),u=s(2558),h=s(401),x=(s(2532),s(2326),s(4928),s(184)),f={numberOfComapniesPerView:5,numberOftestimonialsPerView:3,autoplaySpeed:4e3},_=function(e){(0,o.Z)(s,e);var t=(0,l.Z)(s);function s(e){var i;return(0,r.Z)(this,s),(i=t.call(this,e)).testimonials=[],i.handleResize=function(){var e=window.innerWidth;e>=h.y.large?f={numberOfComapniesPerView:5,numberOftestimonialsPerView:3}:e<h.y.large&&e>=h.y.medium?f={numberOfComapniesPerView:4,numberOftestimonialsPerView:2}:e<h.y.medium&&e>=h.y.small?f={numberOfComapniesPerView:3,numberOftestimonialsPerView:2}:e<h.y.small&&(f={numberOfComapniesPerView:2,numberOftestimonialsPerView:1}),i.setState(f)},i.state=null,i}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.handleResize(),window.addEventListener("resize",this.handleResize),e.next=4,this.getTestimonials();case 4:this.testimonials=e.sent,this.setState(this.testimonials);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"getTestimonials",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://v1.paxfolio.com/wp-json/wp/v2/testimonials");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getTestimonials1",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://v1.paxfolio.com/wp-json/wp/v2/testimonials");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return(0,x.jsx)(c.Fragment,{children:(0,x.jsx)(j,{values:this.testimonials})})}}]),s}(c.Component),j=function(e){var t=(0,c.useRef)(),s=e.values;return(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"testimonial__container",children:[(0,x.jsx)("p",{className:"testimonial__name",children:"TESTIMONIAL"}),(0,x.jsx)("h2",{className:"testimonial__title",children:"What people are saying about Paxform"}),(0,x.jsxs)("div",{className:"testimonial__swiper",children:[(0,x.jsx)(p.tq,{slidesPerView:f.numberOftestimonialsPerView,spaceBetween:24,slidesPerGroup:f.numberOftestimonialsPerView,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},autoHeight:!1,pagination:{clickable:!0},onBeforeInit:function(e){t.current=e},modules:[u.pt,u.tl,u.W_],className:"testimonial__slider",children:s.map((function(e,t){return(0,x.jsx)(p.o5,{children:(0,x.jsxs)("div",{className:"testimonial_card",children:[(0,x.jsx)("div",{className:"testimonial_card__description",dangerouslySetInnerHTML:{__html:e.content.rendered}}),(0,x.jsxs)("div",{className:"testimonial_card__name-box",children:[(0,x.jsx)("h3",{className:"testimonial_card__name",children:e.title.rendered}),(0,x.jsx)("p",{className:"testimonial_card__position",children:e.position})]})]})},t)}))}),(0,x.jsx)("div",{className:"slider__buttons--left",children:(0,x.jsx)("button",{onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.slidePrev()},children:(0,x.jsx)("img",{src:d,alt:"arrow left"})})}),(0,x.jsx)("div",{className:"slider__buttons--right",children:(0,x.jsx)("button",{onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.slideNext()},children:(0,x.jsx)("img",{src:m,alt:"arrow right"})})})]})]})})}},9710:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var i=s(5671),n=s(3144),r=s(7326),a=s(136),o=s(9388),l=s(2791),c=s(4913);var d=s.p+"static/media/fill-out-form.a4530d7a432a7eb7a8a09576342e85f7.svg";var m=s.p+"static/media/fill-out-form__mobile.d01238a92c2da9359f87ed3fc81d59b6.svg";var p=s.p+"static/media/personal-hero.5f0ee1a6dd163873567103a1eade2f87.svg";var u,h=s.p+"static/media/feature-organisation.088d01e8b1cf9d19b271e2145f613a3c.svg",x=["title","titleId"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var s,i,n=function(e,t){if(null==e)return{};var s,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function j(e,t){var s=e.title,i=e.titleId,n=_(e,x);return l.createElement("svg",f({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),s?l.createElement("title",{id:i},s):null,u||(u=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.64022 2.10951C5.21916 2.06329 5.76874 1.83558 6.21072 1.45881C6.70992 1.03365 7.34421 0.80014 7.99992 0.80014C8.65564 0.80014 9.28993 1.03365 9.78912 1.45881C10.2311 1.83558 10.7807 2.06329 11.3596 2.10951C12.0134 2.16176 12.6272 2.44518 13.091 2.90895C13.5548 3.37273 13.8382 3.98653 13.8904 4.64031C13.9363 5.21901 14.164 5.76891 14.5411 6.21081C14.9663 6.71001 15.1998 7.3443 15.1998 8.00001C15.1998 8.65573 14.9663 9.29002 14.5411 9.78921C14.1644 10.2312 13.9366 10.7808 13.8904 11.3597C13.8382 12.0135 13.5548 12.6273 13.091 13.0911C12.6272 13.5548 12.0134 13.8383 11.3596 13.8905C10.7807 13.9367 10.2311 14.1644 9.78912 14.5412C9.28993 14.9664 8.65564 15.1999 7.99992 15.1999C7.34421 15.1999 6.70992 14.9664 6.21072 14.5412C5.76874 14.1644 5.21916 13.9367 4.64022 13.8905C3.98643 13.8383 3.37263 13.5548 2.90886 13.0911C2.44509 12.6273 2.16167 12.0135 2.10942 11.3597C2.0632 10.7808 1.83549 10.2312 1.45872 9.78921C1.03355 9.29002 0.800049 8.65573 0.800049 8.00001C0.800049 7.3443 1.03355 6.71001 1.45872 6.21081C1.83549 5.76884 2.0632 5.21925 2.10942 4.64031C2.16167 3.98653 2.44509 3.37273 2.90886 2.90895C3.37263 2.44518 3.98643 2.16176 4.64022 2.10951V2.10951ZM11.3362 6.83631C11.5002 6.66657 11.5909 6.43923 11.5888 6.20325C11.5868 5.96728 11.4921 5.74155 11.3253 5.57468C11.1584 5.40781 10.9327 5.31316 10.6967 5.31111C10.4607 5.30906 10.2334 5.39977 10.0636 5.56371L7.09992 8.52741L5.93622 7.36371C5.76648 7.19977 5.53914 7.10906 5.30316 7.11111C5.06718 7.11316 4.84145 7.20781 4.67459 7.37468C4.50772 7.54155 4.41307 7.76728 4.41102 8.00325C4.40896 8.23923 4.49968 8.46657 4.66362 8.63631L6.46362 10.4363C6.6324 10.605 6.86128 10.6998 7.09992 10.6998C7.33857 10.6998 7.56745 10.605 7.73622 10.4363L11.3362 6.83631V6.83631Z",fill:"#AEB4BA"})))}var v=l.forwardRef(j),g=(s.p,s(5569)),b=s(953),y=s(3217),N=s(4291),w=s(1058),C=s(6562),Z=s(184),P=[{title:"Create Form Templates",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",isOpened:!0},{title:"Multiple Admins",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",isOpened:!1},{title:"View and Procees Applications",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",isOpened:!1},{title:"Use API",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",isOpened:!1},{title:"Request Information",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",isOpened:!1}],k=function(e){(0,a.Z)(s,e);var t=(0,o.Z)(s);function s(e){var n;return(0,i.Z)(this,s),(n=t.call(this,e)).position={top:0,left:0,x:0,y:0},n.descriptionHandler=function(e){document.querySelectorAll(".features__accordion-item-description").forEach((function(t){if(e.target.parentElement===t){n.position={left:t.scrollLeft,top:t.scrollTop,x:e.clientX,y:e.clientY},n.setState(n.position),t.style.cursor="grabbing",t.style.userSelect="none";var s=function(e){var s=e.clientX-n.state.x;t.scrollLeft=n.state.left-s};document.addEventListener("mousemove",s),document.addEventListener("mouseup",(function t(){document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",n.descriptionHandler),document.removeEventListener("mouseup",t),e.target.style.cursor="grab",e.target.style.removeProperty("user-select")}))}}))},n.state=n.position,n.descriptionHandler=n.descriptionHandler.bind((0,r.Z)(n)),n}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){var e=document.querySelector(".features__accordion-item-panel");e.style.maxHeight=e.scrollHeight+"px"}},{key:"render",value:function(){var e=this;return(0,Z.jsxs)("main",{className:"personal",children:[(0,Z.jsxs)("section",{className:"hero",children:[(0,Z.jsxs)("div",{className:"container hero__wrapper",children:[(0,Z.jsxs)("div",{className:"hero__content",children:[(0,Z.jsx)("p",{className:"hero__name",children:"PERSONAL"}),(0,Z.jsx)("h1",{className:"hero__title",children:"Your Personal Information in One Place Fill Any Form, Anywhere"}),(0,Z.jsx)("p",{className:"hero__description",children:"Paxform\u2019s function is simple: it completely fills any form, anytime. You can manage and save your personal data, allowing you to sign documents and send them to organisations with ease. No need to worry about security and privacy\u2014Paxform fully encrypts your data to ensure your safety."}),(0,Z.jsxs)("div",{className:"hero__button",children:[(0,Z.jsx)(c.Z,{text:"See Plan",type:"flat arrow",color:"white"}),(0,Z.jsx)(c.Z,{text:"How it works",type:"outline triangle-right",color:"white"})]})]}),(0,Z.jsx)("div",{className:"hero__image",children:(0,Z.jsx)("img",{src:p,alt:"personal hero",className:"hero__image-large"})})]}),(0,Z.jsx)("div",{className:"bottom_triangle bottom_triangle--light-green"})]}),(0,Z.jsxs)("section",{className:"flex_box",children:[(0,Z.jsxs)("div",{className:"container flex_box__container",children:[(0,Z.jsx)("div",{className:"flex_box__image",children:(0,Z.jsxs)("picture",{children:[(0,Z.jsx)("source",{media:"(max-width: 768px)",srcSet:m}),(0,Z.jsx)("img",{src:d,alt:"fill out form"})]})}),(0,Z.jsxs)("div",{className:"flex_box__content",children:[(0,Z.jsx)("h1",{className:"flex_box__content-title",children:"Repeatedly Filling Out Forms with the Same Data Requirements?"}),(0,Z.jsx)("div",{className:"flex_box__content-description",children:"Save precious time by having all your information on demand. Autocomplete forms and applications on the go. Only fill in your data once."})]})]}),(0,Z.jsx)("div",{className:"bottom_triangle bottom_triangle--green"})]}),(0,Z.jsxs)("section",{className:"features",children:[(0,Z.jsxs)("div",{className:"container",children:[(0,Z.jsx)("h1",{className:"features__title",children:"Features For Your Organisation"}),(0,Z.jsxs)("div",{className:"features__container",children:[(0,Z.jsx)("div",{className:"features__accordion",children:P.map((function(t,s){return(0,Z.jsxs)("div",{className:"features__accordion-item",children:[(0,Z.jsx)("h2",{className:"features__accordion-item-title",onClick:function(e){var t=e.target.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px",document.querySelectorAll(".features__accordion-item").forEach((function(t){t!==e.target.parentElement&&(t.lastChild.style.maxHeight=null)}))},children:t.title}),(0,Z.jsx)("div",{className:"features__accordion-item-panel",children:(0,Z.jsx)("div",{className:"features__accordion-item-description",children:(0,Z.jsx)("p",{onMouseDown:function(t){return e.descriptionHandler(t)},children:t.description})},"description-".concat(s))})]},s)}))}),(0,Z.jsx)("div",{className:"features__image",children:(0,Z.jsx)("img",{src:h,alt:"forms from Paxform"})})]})]}),(0,Z.jsx)("div",{className:"bottom_triangle bottom_triangle--white"})]}),(0,Z.jsx)("section",{className:"plans",children:(0,Z.jsxs)("div",{className:"container plans__container",children:[(0,Z.jsx)("p",{className:"plans__name section_name",children:"PERSONAL PLANS"}),(0,Z.jsx)("h1",{className:"plans__title section_title",children:"Choose a Plan That\u2019s Right for You"}),(0,Z.jsxs)("div",{className:"plans__pricing",children:[(0,Z.jsxs)("div",{className:"pricing_box pricing_box--grey",children:[(0,Z.jsxs)("div",{className:"pricing_box__top",children:[(0,Z.jsx)("div",{className:"pricing_box__dot"}),(0,Z.jsx)("h2",{className:"pricing_box__title",children:"Free"}),(0,Z.jsx)("p",{className:"pricing_box__description",children:"A simple way to get started for you new to passfolio."}),(0,Z.jsxs)("div",{className:"pricing_box__price",children:[(0,Z.jsx)("span",{className:"pricing_box__price-bt",children:"$0"}),(0,Z.jsx)("span",{className:"pricing_box__price-forever",children:"/forever"})]}),(0,Z.jsx)(c.Z,{text:"Get Started",type:"outline arrow",color:"green"})]}),(0,Z.jsx)("p",{className:"pricing_box__price-sub",children:"What\u2019s included"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"Unlimited data"})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"5 Person saved"})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"A simple way for you new started to Passfolio."})]})]})]}),(0,Z.jsxs)("div",{className:"pricing_box pricing_box--green",children:[(0,Z.jsxs)("div",{className:"pricing_box__top",children:[(0,Z.jsx)("div",{className:"pricing_box__dot pricing_box__dot--green"}),(0,Z.jsx)("h2",{className:"pricing_box__title",children:"Premium"}),(0,Z.jsx)("p",{className:"pricing_box__description",children:"Best for freelance coders & designers who need."}),(0,Z.jsxs)("div",{className:"pricing_box__price",children:[(0,Z.jsx)("span",{className:"pricing_box__price-bt",children:"$50"}),(0,Z.jsx)("span",{children:"/forever"})]}),(0,Z.jsx)(c.Z,{text:"Get Started",type:"flat arrow",color:"white"})]}),(0,Z.jsx)("p",{className:"pricing_box__price-sub",children:"What\u2019s included"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"Unlimited data"})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"5 Person saved"})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"A simple way for you new started to Passfolio."})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"A simple way for you new started to Passfolio."})]})]})]}),(0,Z.jsxs)("div",{className:"pricing_box pricing_box--blue",children:[(0,Z.jsxs)("div",{className:"pricing_box__top",children:[(0,Z.jsx)("div",{className:"pricing_box__dot pricing_box__dot--blue"}),(0,Z.jsx)("h2",{className:"pricing_box__title",children:"Family"}),(0,Z.jsx)("p",{className:"pricing_box__description",children:"Best for freelance coders & designers who need."}),(0,Z.jsx)("div",{className:"pricing_box__price",children:(0,Z.jsx)("span",{className:"pricing_box__price-bt",children:"Custom Pricing"})}),(0,Z.jsx)(c.Z,{text:"Get Started",type:"outline arrow",color:"green"})]}),(0,Z.jsx)("p",{className:"pricing_box__price-sub",children:"What\u2019s included"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"Unlimited data"})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"5 Person saved"})]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)("span",{children:"A simple way for you new started to Passfolio."})]})]})]})]}),(0,Z.jsx)(c.Z,{className:"plans__button",text:"See full pricing",type:"arrow outline",color:"green"})]})}),(0,Z.jsxs)("section",{className:"testimonial",children:[(0,Z.jsx)(g.Z,{}),(0,Z.jsx)("div",{className:"bottom_triangle bottom_triangle--dark-blue"})]}),(0,Z.jsxs)("section",{className:"platform background--dark-blue platform__title--white",children:[(0,Z.jsxs)("div",{className:"container platform__container",children:[(0,Z.jsxs)("div",{className:"platform__top",children:[(0,Z.jsxs)("div",{className:"platform__top-left",children:[(0,Z.jsx)("p",{className:"platform__name platform__name--green",children:"RESOURCES"}),(0,Z.jsx)("h2",{className:"platform__title ",children:"Stories, Updates & Ideas from Paxform."})]}),(0,Z.jsx)("div",{className:"platform__top-right",children:(0,Z.jsx)(c.Z,{type:"outline arrow",text:"See All Resources"})})]}),(0,Z.jsxs)("div",{className:"platform__content",children:[(0,Z.jsx)(w.Z,{image:b,title:"First Story",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",readLink:!0}),(0,Z.jsx)(w.Z,{image:y,title:"Second Story",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",readLink:!0}),(0,Z.jsx)(w.Z,{image:N,title:"Third Story",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",readLink:!0})]})]}),(0,Z.jsx)("div",{className:"bottom_triangle bottom_triangle--light-blue"})]}),(0,Z.jsx)(C.Z,{})]})}}]),s}(l.Component)},953:function(e,t,s){e.exports=s.p+"static/media/card1.8c66a19d718174b4b9cc.png"},3217:function(e,t,s){e.exports=s.p+"static/media/card2.0009461724c7fe1945fb.png"},4291:function(e,t,s){e.exports=s.p+"static/media/card3.0d33e41cda190c25c924.png"}}]);
//# sourceMappingURL=220.0b70054c.chunk.js.map