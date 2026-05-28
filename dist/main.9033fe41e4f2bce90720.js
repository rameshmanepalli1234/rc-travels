(()=>{"use strict";var e,a={1535:(e,a,i)=>{e.exports=i.p+"b6b264147d1993a3b7f4.png"},2741:(e,a,i)=>{e.exports=i.p+"c754b89086c58a705a5d.png"},9298:(e,a,i)=>{var t=i(4848),o=i(6540),r=i(5338),n=i(7581);const s=(0,i(6730).defineMessages)({ADITYA_CAR_ZONE:{id:"app.name",defaultMessage:"Ramesh Tours & Travels"},HOME:{id:"nav.home",defaultMessage:"Home"},ABOUT_US:{id:"nav.about",defaultMessage:"About Us"},DRIVING_SCHOOL:{id:"nav.driving-school",defaultMessage:"Driving School"},CARBON_CLEANING:{id:"nav.carbon-cleaning",defaultMessage:"Carbon Cleaning"},SERVICES:{id:"nav.services",defaultMessage:"Services"},PACKAGES:{id:"nav.packages",defaultMessage:"Packages"},GALLERY:{id:"nav.gallery",defaultMessage:"Gallery"},CONTACT_US:{id:"nav.contact",defaultMessage:"Contact Us"},TESTIMONIALS:{id:"nav.testimonials",defaultMessage:"Testimonials"},VALIDATING_ACCESS:{id:"access.validating",defaultMessage:"Validating Access..."},VALIDATING_ACCESS_MESSAGE:{id:"access.validating.message",defaultMessage:"Please wait while we verify your access credentials."},ACCESS_DENIED:{id:"access.denied",defaultMessage:"Access Denied"},ACCESS_DENIED_DESCRIPTION:{id:"access.denied.description",defaultMessage:"You dont have permission to access this application. Please check your access key and try again."},ACCESS_DENIED_MESSAGE:{id:"access.denied.message",defaultMessage:"You dont have permission to access this application. Please check your access key and try again."},RETRY_ACCESS:{id:"access.retry",defaultMessage:"Retry Access"},SOMETHING_WENT_WRONG:{id:"error.something.wrong",defaultMessage:"Something went wrong"},UNEXPECTED_ERROR:{id:"error.unexpected",defaultMessage:"An unexpected error occurred. Please try again."},TRY_AGAIN:{id:"error.try.again",defaultMessage:"Try Again"},PHONE_NUMBER:{id:"infobar.phone",defaultMessage:"+91 6363620044"},EMAIL:{id:"infobar.email",defaultMessage:"rameshtravelszone@gmail.com"},OPENING_HOURS:{id:"infobar.opening-hours",defaultMessage:"Mon - Sat: 8:00 - 20:00"}}),{FormattedMessage:d}=i(6730),c=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: white;
  /* background: linear-gradient(135deg, #ee1aee 0%, #04dfb7 100%); */
  color: black;
  text-align: center;
`,l=(n.Ay.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`,n.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,n.Ay.p`
  font-size: 1.2rem;
  margin-bottom: 1.5;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`,n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`),p=n.Ay.div`
  width: 60px;
  height: 60px;
  border: 5px solid rgba(79, 189, 57, 0.2);
  border-top: 5px solid #4fbd39;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,x=n.Ay.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4fbd39;
  letter-spacing: 2px;

  &::after {
    content: "...";
    animation: dots 1.5s steps(4, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: ".";
    }
    40% {
      content: "..";
    }
    60%,
    100% {
      content: "...";
    }
  }
`,m=(n.Ay.input`
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin: 1rem 0;
  width: 300px;
  max-width: 90%;
  text-align: center;
  font-weight: 600;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4fbd39;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`,n.Ay.button`
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #4fbd39;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #45a832;
  }

  &:active {
    transform: scale(0.98);
  }
`,({children:e})=>{const[a,i]=(0,o.useState)(null),[r,n]=(0,o.useState)(!0),[s,d]=(0,o.useState)("");return(0,o.useEffect)(()=>{(async()=>{try{const e="u34kkfe993943kkjerufj3343334h",a="u34kkfe993943kkjerufj3343334hss",t="4444";await new Promise(e=>setTimeout(e,1e3)),i(e===a||e===t)}catch(e){i(!1)}finally{n(!1)}})()},[]),r?(0,t.jsx)(c,{children:(0,t.jsxs)(l,{children:[(0,t.jsx)(p,{}),(0,t.jsx)(x,{children:"Loading"})]})}):(0,t.jsx)(t.Fragment,{children:e})}),h=n.Ay.section`
  scroll-margin-top: 120px;
`,g=({id:e,children:a})=>(0,t.jsx)(h,{id:e,children:a}),f=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  min-width: 0;
  overflow: hidden;
  position: sticky;
  top: 40px;

  h3 {
    margin: 0;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.75rem;

    h3 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 150px) {
    padding: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: auto;

    h3 {
      font-size: 1rem;
      min-width: 0;
      flex-shrink: 1;
      word-break: break-word;
      line-height: 1.2;
    }
  }
`,u=n.Ay.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem 0;

    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,b=n.Ay.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
    padding: 0.25rem;
  }

  @media (max-width: 150px) {
    font-size: 1rem;
    padding: 0.125rem;
    min-width: 32px;
    min-height: 32px;
  }
`,w=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,v=n.Ay.div`
  position: fixed;
  top: 0;
  right: ${({isOpen:e})=>e?"0":"-100%"};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  transition: right 0.3s ease;
  overflow-y: auto;
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  pointer-events: ${({isOpen:e})=>e?"auto":"none"};

  @media (max-width: 480px) {
    width: 280px;
  }

  @media (max-width: 320px) {
    width: 100%;
    right: ${({isOpen:e})=>e?"0":"-100%"};
  }

  @media (max-width: 150px) {
    width: 100%;
    right: ${({isOpen:e})=>e?"0":"-100%"};
    font-size: 0.875rem;
  }
`,y=n.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,j=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;

  h3 {
    margin: 0;
    color: #333;
    font-size: 1.25rem;
    font-weight: bold;
  }

  @media (max-width: 150px) {
    padding: 1rem 0.75rem;

    h3 {
      font-size: 1rem;
    }
  }
`,k=n.Ay.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`,N=n.Ay.nav`
  flex: 1;
  padding: 1rem 0;

  a {
    display: block;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 1rem 1.5rem;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #f8f9fa;
      color: #007bff;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 150px) {
    a {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
    }
  }
`;var z=i(9197),A=i(1223),S=i(8027);const E="home",I="aboutus",C="services",T="packages",M="gallery",O="contactus",R="testimonials",P=e=>`#${e}`,_=e=>[{name:e.formatMessage(s.HOME),href:P(E),sectionId:E,Icon:S.rQ8},{name:e.formatMessage(s.ABOUT_US),href:P(I),sectionId:I,Icon:S.x$1},{name:e.formatMessage(s.SERVICES),href:P(C),sectionId:C,Icon:S.xdT},{name:e.formatMessage(s.PACKAGES),href:P(T),sectionId:T,Icon:z.APk},{name:e.formatMessage(s.GALLERY),href:P(M),sectionId:M,Icon:S.kQE},{name:e.formatMessage(s.TESTIMONIALS),href:P(R),sectionId:R,Icon:S.x$1},{name:e.formatMessage(s.CONTACT_US),href:P(O),sectionId:O,Icon:A.OB9}],D=e=>{const a=document.getElementById(e);if(!a)return;const i=a.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:Math.max(0,i),behavior:"smooth"})},G=e=>{window.history.pushState(null,"",P(e)),D(e)};var Y=i(6512);const $="Ramesh Tours & Travels",U="+91 6363620044",L="tel:+916363620044",F="rameshtravelszone@gmail.com",H="mailto:rameshtravelszone@gmail.com",B="Near Vartha Office, Morampudi, Rajamahendravaram, Andhra Pradesh, 533107",W="Mon - Sat: 9:00 AM - 9:00 PM",q=[{id:"phone",title:"Call Us",value:U,href:L,Icon:S.Cab},{id:"email",title:"Email Us",value:F,href:H,Icon:S.maD},{id:"address",title:"Visit Us",value:B,Icon:S.vq8},{id:"hours",title:"Working Hours",value:W,Icon:S.w_X}],V=[{name:"Facebook",Icon:S.iYk,href:"https://www.facebook.com/ramesh.manepalli.560?mibextid=wwXIfr&mibextid=wwXIfr"},{name:"Instagram",Icon:S.ao$,href:"https://www.instagram.com/__.rammy_?igsh=NmttcXQwMjlvc2Rx&utm_source=qr"},{name:"LinkedIn",Icon:S.QEs,href:"https://www.linkedin.com/in/ramesh-manepalli-180901289/"},{name:"Youtube",Icon:Y.Jvf,href:"https://youtube.com/@rameshmanepalli0?si=TSA9k5PqGsQnbO8l"}],X=[{name:"Travel Services",href:"#"},{name:"Driving School",href:"#"},{name:"Rented Cars",href:"#"},{name:"Premium Car Sales",href:"#"}];var Q=i(1351),K=i(1735);const J=[{title:"Trip Consultation",description:"Discuss your travel preferences and destinations with our expert team to plan the perfect journey.",Icon:Q.zfp,id:1},{title:"Booking & Preparation",description:"Confirm your travel dates, vehicle, and itinerary, ensuring everything is ready for a smooth trip.",Icon:S.xdT,id:2},{title:"Guided Travel",description:"Enjoy a comfortable journey with our experienced drivers, exploring destinations safely and efficiently.",Icon:K.Lzr,id:3},{title:"Trip Review",description:"We follow up after your journey to gather feedback and ensure your travel experience was memorable.",Icon:S.A7C,id:4}],Z=[{id:1,name:"Sunita",summary:"I had a fantastic journey with this company. The drivers were punctual and professional, making every part of the trip smooth. Highly recommended for hassle-free travel."},{id:2,name:"Meghana",summary:"Excellent travel experience! The vehicles were extremely comfortable and well-maintained. The itinerary was perfectly planned, making our sightseeing enjoyable and stress-free."},{id:3,name:"Priya",summary:"Highly recommend their services. The staff was courteous, attentive, and always ready to help. They made our travel experience truly memorable and worry-free."},{id:4,name:"Lalitha",summary:"Wonderful experience! From booking to the end of the journey, everything was seamless. The drivers were friendly and the trips were safe and comfortable throughout."},{id:5,name:"Kavya",summary:"I loved the personalized attention we received during our trip. Every detail, from vehicle cleanliness to route planning, was taken care of. It made our vacation stress-free and enjoyable."},{id:6,name:"Mounika",summary:"Safe, comfortable, and hassle-free travel. The team ensured we reached every destination on time and made the journey fun and relaxing. I will definitely use their services again."}],ee=i.p+"124017ce71a24cb59930.jpg",ae=i.p+"2448d8753b69430bb034.jpg",ie=i.p+"e3ff67b7efd1415dfead.jpg",te=i.p+"9e866d5cd7fcc755249b.jpg",oe=i.p+"4ce71eac1b59e98513dd.jpg",re=i.p+"e0e81912c1f22ecd93f6.jpg",ne=[{id:1,image:ee,name:"Gallery 1"},{id:2,image:ae,name:"Gallery 2"},{id:3,image:ie,name:"Gallery 3"},{id:4,image:te,name:"Gallery 4"},{id:5,image:oe,name:"Gallery 5"},{id:6,image:re,name:"Gallery 6"}],se=[{id:1,title:"Tirumala Pilgrimage Package",location:"Tirupati, Andhra Pradesh",duration:"2 Days / 1 Night",price:4e3,image:ee,badge:"Most Popular",highlights:["AC transport from Rajamahendravaram","Hotel stay with breakfast","Tirumala darshan assistance","Local temple visits included"]},{id:2,title:"Vizag Beach & City Tour",location:"Visakhapatnam, Andhra Pradesh",duration:"3 Days / 2 Nights",price:5e3,image:ae,badge:"Best Value",highlights:["Beach-side hotel accommodation","RK Beach & Kailasagiri sightseeing","Breakfast & dinner included","Private cab for entire trip"]},{id:3,title:"Araku Valley Scenic Escape",location:"Araku, Andhra Pradesh",duration:"2 Days / 1 Night",price:4500,image:ie,highlights:["Scenic train / road journey options","Resort or cottage stay","Coffee plantation & Borra Caves visit","All meals & local guide included"]},{id:4,title:"Rajahmundry Godavari Cruise",location:"Rajamahendravaram",duration:"1 Day Trip",price:3200,image:te,highlights:["Godavari river boat cruise","Traditional lunch on board","Pickup & drop within city","Papikondalu viewpoint stop"]},{id:5,title:"Hyderabad Heritage Weekend",location:"Hyderabad, Telangana",duration:"3 Days / 2 Nights",price:6500,image:oe,highlights:["3-star hotel near city centre","Charminar, Golconda & Hussain Sagar tour","Breakfast included daily","Monument entry tickets covered"]},{id:6,title:"Papikondalu Hill & River Tour",location:"Papikondalu, Andhra Pradesh",duration:"2 Days / 1 Night",price:4800,image:re,highlights:["Resort stay amid lush hills","Jeep safari & nature trails","All meals included","River cruise & photography spots"]}],de=()=>{const[e,a]=(0,o.useState)(!1),i=()=>{a(!1)},r=_({formatMessage:e=>e.defaultMessage}),n=(e,a)=>{e.preventDefault(),G(a),i()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f,{"data-testid":"section-navbar",children:[(0,t.jsx)("h3",{"data-testid":"text-navbar-brand",children:"Ramesh Tours & Travels"}),(0,t.jsx)(u,{children:r.map((e,a)=>(0,t.jsx)("a",{href:e.href,onClick:a=>n(a,e.sectionId),"data-testid":`link-nav-${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name},a))}),(0,t.jsx)(b,{onClick:()=>{a(!e)},"data-testid":"button-navbar-menu",children:(0,t.jsx)(S.OXb,{})})]}),e&&(0,t.jsx)(w,{onClick:i,"data-testid":"overlay-navbar-drawer"}),(0,t.jsx)(v,{isOpen:e,children:(0,t.jsxs)(y,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)("h3",{"data-testid":"text-drawer-brand",children:"Ramesh Tours & Travels"}),(0,t.jsx)(k,{onClick:i,"data-testid":"button-drawer-close",children:(0,t.jsx)(S.QCr,{})})]}),(0,t.jsx)(N,{children:r.map((e,a)=>(0,t.jsx)("a",{href:e.href,onClick:a=>n(a,e.sectionId),"data-testid":`link-drawer-${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name},a))})]})})]})};var ce=i(6442);const le="1.25rem",pe="600",xe="\n  text-transform: inherit;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif",me=`\n  ${xe};\n  font-size: 0.875rem;\n  font-weight: ${pe};\n  line-height: ${le};`,he=`\n  ${xe};\n  font-size: 1rem;\n  font-weight: ${pe};\n  line-height: ${le};`,ge=`\n  ${xe};\n  font-size: 0.75rem;\n  font-weight: ${pe};\n  line-height: 1rem;`,fe=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-bg-tertiary);
  height: 40px;
  gap: 20px;
  overflow: hidden;
  padding: 0 50px;
  position: sticky;
  top: 0;
  z-index: 999;

  @media (max-width: 1024px) {
    padding: 0 20px;
    overflow: hidden;
  }

  .info-bar-left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    .info-bar-item,
    .info-bar-item-link {
      color: var(--color-text-default);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      ${me};
    }

    .info-bar-item-link {
      text-decoration: none;
      cursor: pointer;

      &:hover {
        opacity: 0.85;
      }
    }

    .info-bar-item {

      @media (max-width: 1024px) {
        ${ge};
      }

      @media (max-width: 700px) {
        ${me};
      }

      //not recommended to use this, but it's a workaround to hide the text on mobile
      .info-bar-item-text {
        @media (max-width: 700px) {
          display: none;
        }
      }
    }
  }

  .info-bar-right-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    color: var(--color-text-default);
    ${he};

    .info-bar-social-link {
      color: inherit;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        opacity: 0.85;
      }
    }

    @media (max-width: 1024px) {
      ${me};
    }

    @media (max-width: 700px) {
      ${he};
    }
  }
`,ue=()=>{const e=[{name:(a=(0,ce.A)()).formatMessage(s.PHONE_NUMBER),Icon:S.Cab,href:L},{name:a.formatMessage(s.EMAIL),Icon:S.maD,href:H},{name:a.formatMessage(s.OPENING_HOURS),Icon:z.w_X}];var a;return(0,t.jsxs)(fe,{"data-testid":"section-infobar",children:[(0,t.jsx)("div",{className:"info-bar-left-container",children:e.map((e,a)=>{const i=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.Icon,{}),(0,t.jsx)("span",{className:"info-bar-item-text",children:e.name})]});return e.href?(0,t.jsx)("a",{href:e.href,className:"info-bar-item info-bar-item-link",children:i},a):(0,t.jsx)("div",{className:"info-bar-item",children:i},a)})}),(0,t.jsx)("div",{className:"info-bar-right-container",children:V.map((e,a)=>(0,t.jsx)("a",{href:e.href,className:"info-bar-social-link",target:"_blank",rel:"noopener noreferrer","aria-label":e.name,children:(0,t.jsx)(e.Icon,{})},a))})]})},be=[{name:"Driving School"},{name:"Cars"},{name:"Carbon Cleaning"}],we=n.Ay.div`
  display: flex;
  align-items: center;
  /* background: grey; */
  /* border-radius: 12px; */
  padding: 10px;
  /* margin: 10px; */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: none;

  .menu-bar-item {
    flex: 1;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 8px;
    margin: 0 4px;
    position: relative;
    overflow: hidden;
    /* background: rgba(255, 255, 255, 0.1); */
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: grey;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background: grey;
      transform: translateY(-2px);
      /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); */
      color: white;
    }

    &.active {
      background: #4fbd39;
      color: white;
      transform: translateY(-2px);
      /* box-shadow: 0 8px 25px rgba(238, 90, 36, 0.3); */
      border: 1px solid rgba(255, 255, 255, 0.3);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          transparent 30%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 70%
        );
        animation: shimmer 2s infinite;
      }
    }

    .tab-icon {
      font-size: 20px;
      margin-bottom: 4px;
      display: block;
      transition: transform 0.3s ease;

      ${e=>e.className?.includes("active")&&"\n        transform: scale(1.1);\n      "}
    }

    .tab-text {
      font-size: 12px;
      text-align: center;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      padding: 0 4px;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    /* Tablet styles */
    @media (max-width: 768px) {
      height: 50px;

      .tab-icon {
        font-size: 18px;
        margin-bottom: 2px;
      }

      .tab-text {
        font-size: 11px;
      }
    }

    /* Mobile styles */
    @media (max-width: 480px) {
      height: 45px;
      margin: 0 2px;

      .tab-icon {
        font-size: 16px;
        margin-bottom: 1px;
      }

      .tab-text {
        font-size: 10px;
        padding: 0 2px;
      }
    }

    /* Small mobile styles */
    @media (max-width: 360px) {
      height: 40px;

      .tab-icon {
        font-size: 14px;
        margin-bottom: 0;
      }

      .tab-text {
        font-size: 9px;
      }
    }
  }

  /* Container responsive adjustments */
  @media (max-width: 768px) {
    margin: 12px;
    padding: 6px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    margin: 8px;
    padding: 4px;
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    margin: 6px;
    padding: 3px;
  }
`,ve=()=>{const[e,a]=(0,o.useState)(0);return(0,t.jsx)(we,{"data-testid":"section-menu-bar",children:be.map((i,o)=>(0,t.jsxs)("div",{className:"menu-bar-item "+(e===o?"active":""),onClick:()=>(e=>{a(e)})(o),"data-testid":`tab-company-${o+1}`,children:[(0,t.jsxs)("span",{className:"tab-icon",children:[0===o&&"🚗",1===o&&"🏎️",2===o&&"🧹"]}),(0,t.jsx)("span",{className:"tab-text",children:i.name})]},o))})},ye=n.Ay.div`
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 100px 150px 70px 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 1200px) {
    padding: 100px 50px 70px 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 80px 30px 50px 30px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 60px 40px 40px 20px;
    gap: 25px;
  }

  > * {
    flex: 1;
    min-width: 0;
  }

  .home-container-carbon-clearning-left-section {
    width: 100%;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
    position: relative;
    display: block;
    min-height: 400px;
    /* overflow: hidden; */

    @media (max-width: 768px) {
      height: 300px;
      min-height: 300px;
    }

    @media (max-width: 480px) {
      height: 250px;
      min-height: 250px;
    }
  }

  .home-carbon-cleaning-background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.3s ease;
    border-radius: 15px;
  }

  .home-container-carbon-clearning-left-section:hover
    .home-carbon-cleaning-background-image {
    /* transform: scale(1.05); */
  }

  .home-carbon-cleaning-floating-image-container {
    position: absolute;
    bottom: -15px;
    left: -15px;
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px;
    border-radius: 10px;
    overflow: hidden;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    z-index: 2;

    @media (max-width: 450px) {
      width: 130px;
    }
  }

  .home-carbon-cleaning-floating-image {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .experience-badge {
    position: absolute;
    top: 20px;
    right: -20px;
    color: white;
    text-align: center;
    box-shadow: rgba(79, 189, 57, 0.3) 0px 5px 15px;
    background: #4fbd39;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    z-index: 3;

    @media (max-width: 450px) {
      width: 150px;
    }
  }

  .years {
    font-size: 2.5rem;
    font-weight: 700;
    display: block;
    line-height: 1;

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }

  .home-carbon-cleaning-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #000000;
    text-transform: uppercase;
    line-height: 45px;

    @media (max-width: 580px) {
      text-transform: capitalize;
    }
  }

  .home-carbon-cleaning-description {
    color: rgb(33, 37, 41);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  .home-carbon-cleaning-services-container {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgb(248, 249, 250);
    border-radius: 10px;
    transition: 0.3s;

    @media (max-width: 580px) {
      width: 100%;
    }

    &:hover {
      transform: translateY(-3px);
      background: #e8f5e5;
    }
  }

  .feature-icon {
    font-size: 26px;
    color: #4fbd39;
  }
`,je=i.p+"4a480150a4b054694722.png",ke=()=>(0,t.jsxs)(ye,{children:[(0,t.jsxs)("div",{className:"home-container-carbon-clearning-left-section",children:[(0,t.jsx)("img",{src:je,alt:"Carbon Cleaning Background",className:"home-carbon-cleaning-background-image"}),(0,t.jsxs)("div",{className:"experience-badge",children:[(0,t.jsx)("span",{className:"years",children:"2+"}),"Years Experience"]}),(0,t.jsx)("div",{className:"home-carbon-cleaning-floating-image-container",children:(0,t.jsx)("img",{src:i(2741),alt:"Carbon Cleaning Floating Image",className:"home-carbon-cleaning-floating-image"})})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"home-carbon-cleaning-title",children:"Leading Tourism & Travel Specialists Since 2023"}),(0,t.jsxs)("p",{className:"home-carbon-cleaning-description",children:["We ensure comfortable travel experiences with well-maintained vehicles and professional service with every trip smooth, and enjoyable for our customers",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Our skilled team brings together driving expertise and customer-focused service to provide dependable transportation. We've successfully completed thousands of trips, earning the trust of our travelers."]})]}),(0,t.jsxs)("div",{className:"home-carbon-cleaning-services-container",children:[(0,t.jsxs)("div",{className:"feature-item",children:[(0,t.jsx)(S.x4q,{className:"feature-icon"}),"Premium Tours and Travel Services"]}),(0,t.jsxs)("div",{className:"feature-item",children:[(0,t.jsx)(S.YiW,{className:"feature-icon"}),"Reliable & Efficient Travel Service"]})]})]})]}),Ne=i.p+"fbf443079cef2c2bbda9.jpg",ze=n.Ay.div`
  /* height: 600px;
  width: 100%;
  background-image: url(${Ne});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  /* position: relative; */
  min-height: 400px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Ne});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: rgba(255, 255, 255, 0.8);

  .footer-container {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
  }

  .footer-top {
    display: flex;
    flex-direction: row;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    /* border-bottom: 1px solid red; */
    padding: 80px 60px 0 60px;
    gap: 20px;
    /* flex-grow: 1;
    flex-basis: 0;
    min-width: 0; */
    flex-wrap: wrap;

    @media (max-width: 560px) {
      padding: 40px 20px 0 20px;
    }
  }

  .footer-top > * {
    flex: 1;
  }

  .footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
  }

  .footer-copyright-link {
    color: #4fbd39;
  }

  .footer-top-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
    color: white;
  }

  .footer-top-section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 35px;
    color: white;
  }

  .footer-top-section-title-span {
    padding-bottom: 15px;
    border-bottom: 2px solid #4fbd39;
  }

  .footer-top-title-description {
    margin-bottom: 25px;
  }

  .footer-top-title-icons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 18px;
  }

  .footer-top-title-icon {
    transition: all 0.3s ease;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: white;
      color: #4fbd39;
    }
  }

  .footer-top-section-links {
    display: flex;
    flex-direction: column;
  }

  .footer-top-section-links-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .footer-top-section-links-list-icon {
    font-size: 24px;
    color: #4fbd39;
  }

  .footer-top-section-links-list-item {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  .footer-top-section-links-quick-links {
    display: flex;
    flex-direction: column;
    margin-left: 40px;

    @media (max-width: 560px) {
      margin-left: 0;
    }
  }

  .footer-top-section-contact-info-address {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    gap: 12px;
    color: white;
    margin-bottom: 20px;
  }

  .footer-top-section-contact-info-address-icon {
    font-size: 20px;
    color: #4fbd39;
    margin-top: 4px;
  }

  .footer-top-section-contact-info-phone-icon {
    font-size: 16px;
    color: #4fbd39;
    margin-top: 4px;
  }

  .footer-top-section-contact-info-phone-number {
    color: rgba(255, 255, 255, 0.8);
  }

  .footer-bottom-copyright-text {
    text-align: center;
    word-break: break-word;
  }

  .footer-bottom-copyright-info {
    text-align: center;
    word-break: break-word;
  }
`;var Ae=i(9879);const Se=()=>{const e=_({formatMessage:e=>e.defaultMessage});return(0,t.jsx)(ze,{children:(0,t.jsxs)("div",{className:"footer-container",children:[(0,t.jsxs)("div",{className:"footer-top",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"footer-top-title",children:$}),(0,t.jsx)("div",{className:"footer-top-title-description",children:"Professional travel services designed for comfort and convenience. Experienced drivers and clean vehicles you can trust. Making every journey stress-free and memorable."}),(0,t.jsx)("div",{className:"footer-top-title-icons",children:V.map((e,a)=>(0,t.jsx)("a",{href:e.href,className:"footer-top-title-icon",target:"_blank",rel:"noopener noreferrer","aria-label":e.name,children:(0,t.jsx)(e.Icon,{})},a))})]}),(0,t.jsxs)("div",{className:"footer-top-section-links-quick-links",children:[(0,t.jsxs)("div",{className:"footer-top-section-title",children:[(0,t.jsx)("span",{className:"footer-top-section-title-span",children:" Quick "}),"Links"]}),(0,t.jsx)("ul",{className:"footer-top-section-links-list",children:e.map((e,a)=>(0,t.jsxs)("li",{className:"footer-top-section-links-list-item",children:[(0,t.jsx)(Ae.mf,{className:"footer-top-section-links-list-icon"}),(0,t.jsx)("a",{href:e.href,onClick:a=>{a.preventDefault(),G(e.sectionId)},children:e.name})]},a))})]}),(0,t.jsxs)("div",{className:"footer-top-section-links",children:[(0,t.jsxs)("div",{className:"footer-top-section-title",children:[(0,t.jsx)("span",{className:"footer-top-section-title-span",children:" Our S"}),"ervices"]}),(0,t.jsx)("ul",{className:"footer-top-section-links-list",children:X.map((e,a)=>(0,t.jsxs)("li",{className:"footer-top-section-links-list-item",children:[(0,t.jsx)(Ae.mf,{className:"footer-top-section-links-list-icon"}),(0,t.jsxs)("div",{children:[" ",e.name," "]})]},a))})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"footer-top-section-title",children:[(0,t.jsx)("span",{className:"footer-top-section-title-span",children:" Conta"}),"ct Info"]}),(0,t.jsxs)("div",{className:"footer-top-section-contact-info-address",children:[(0,t.jsx)(z.sIY,{className:"footer-top-section-contact-info-address-icon"}),B]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,t.jsxs)("div",{className:"footer-top-section-contact-info-address",children:[(0,t.jsx)(z.Cab,{className:"footer-top-section-contact-info-phone-icon"}),(0,t.jsxs)("div",{children:["Call Us:",(0,t.jsx)("a",{href:L,className:"footer-top-section-contact-info-phone-number",children:U})]})]})}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,t.jsxs)("div",{className:"footer-top-section-contact-info-address",children:[(0,t.jsx)(z.maD,{className:"footer-top-section-contact-info-phone-icon"}),(0,t.jsxs)("div",{children:["Email Us:",(0,t.jsx)("a",{href:H,className:"footer-top-section-contact-info-phone-number",children:F})]})]})}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,t.jsxs)("div",{className:"footer-top-section-contact-info-address",children:[(0,t.jsx)(z.w_X,{className:"footer-top-section-contact-info-phone-icon"}),(0,t.jsxs)("div",{children:["Working Hours:",(0,t.jsx)("div",{className:"footer-top-section-contact-info-phone-number",children:W})]})]})})]})]}),(0,t.jsxs)("div",{className:"footer-bottom",children:[(0,t.jsxs)("div",{className:"footer-bottom-copyright-info",children:["© 2025 ",$," All rights reserved."]}),(0,t.jsxs)("div",{className:"footer-bottom-copyright-text",children:["Design and Developed by"," ",(0,t.jsx)("span",{className:"footer-copyright-link",children:$})," ","Pvt Ltd."]})]})]})})},Ee=n.Ay.div`
  background: white;
  padding: 20px;
  min-height: 250px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  .testimonial-card-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .testimonial-card-user-info {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .testimonial-card-name {
    font-size: 25px;
    font-weight: 500;
    color: #000000;
  }
`,Ie=i.p+"22b59ae4f2f037fb1503.png",Ce=({item:e})=>(0,t.jsxs)(Ee,{"data-testid":"testimonial-card",children:[(0,t.jsxs)("div",{className:"testimonial-card-summary",children:['"',e.summary,'"']}),(0,t.jsxs)("div",{className:"testimonial-card-user-info",children:[(0,t.jsx)("img",{src:Ie,alt:e.name,className:"testimonial-card-image"}),(0,t.jsx)("h4",{className:"testimonial-card-name",children:e.name})]})]}),Te=i.p+"01f81e560b79049ddc77.avif",Me=n.Ay.section`
  padding: 60px 0 70px;
  background-color: #4fbd39;
  color: black;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Te});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 500px) {
    padding: 20px 0 20px 0;
  }

  .testimonials-title {
    font-size: 35px;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
  }

  .testimonials-label {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    display: block;
    color: white;
  }

  .testimonials-cards-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    padding: 0 120px;

    @media (max-width: 1000px) {
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
  }
`,Oe=()=>(0,t.jsxs)(Me,{"data-testid":"testimonials",children:[(0,t.jsx)("h1",{className:"testimonials-title",children:"TESTIMONIALS"}),(0,t.jsx)("label",{className:"testimonials-label",children:"What Our Customers Say"}),(0,t.jsx)("div",{className:"testimonials-cards-container",children:Z.map(e=>(0,t.jsx)(Ce,{item:e},e.id))})]}),Re=n.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,Pe=i(1535),_e=n.Ay.div`
  width: 100%;
  height: 100%;
  background: url(${Pe}) no-repeat center / cover;
  color: white;
  background:
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${Pe}) no-repeat center / cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 70px;

  @media (max-width: 1640px) {
    padding: 70px 30px;
  }

  @media (max-width: 670px) {
    padding: 70px 0;
  }

  .carbon-cleaning-container-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    /* gap: 30px; */
  }

  .carbon-cleaning-container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 120px;

    @media (max-width: 1570px) {
      padding: 0 30px;
    }

    @media (max-width: 1400px) {
      padding: 0 20px;
    }

    @media (max-width: 710px) {
      padding: 0;
    }
  }

  .carbon-cleaning-our-specialty {
    font-size: 18px;
    font-weight: 700;
    color: #4fbd39;
    text-transform: uppercase;
    text-align: center;
  }

  .carbon-cleaning-process {
    font-size: 35px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;

    @media (max-width: 670px) {
      text-transform: capitalize;
      word-break: break-word;
      padding: 0 20px;
      text-align: center;
      font-size: 28px;
    }

    @media (max-width: 575px) {
      text-transform: capitalize;
      word-break: break-word;
      padding: 0 20px;
      text-align: center;
      font-size: 26px;
    }
  }

  .carbon-cleaning-advanced-technology {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    margin-top: 5px;

    @media (max-width: 670px) {
      font-size: 1.1rem;
      word-break: break-word;
    }

    @media (max-width: 575px) {
      font-size: 1rem;
      word-break: break-word;
    }
  }
`,De=n.Ay.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 320px;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: #4fbd39;

    .process-card-icon-image {
      transform: scaleX(-1);
    }
  }

  .process-card-icon {
    position: relative;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    background: #4fbd39;
    border-radius: 50%;
    /* transition: 0.3s; */
  }

  .process-card-icon-image {
    font-size: 28px;
    /* font-weight: 700; */
    color: white;
    transition: transform 0.3s ease;
  }

  .process-card-icon-step-number {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    background: black;
    border-radius: 50%;
  }

  .process-card-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: white;
    /* text-align: center; */
  }

  .process-card-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0px;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    font-weight: 600;
  }
`,Ge=({item:e})=>(0,t.jsxs)(De,{"data-testid":"process-card",children:[(0,t.jsxs)("div",{className:"process-card-icon",children:[(0,t.jsx)(e.Icon,{className:"process-card-icon-image"}),(0,t.jsxs)("span",{className:"process-card-icon-step-number",children:["0",e.id]})]}),(0,t.jsx)("h3",{className:"process-card-title",children:e.title}),(0,t.jsx)("div",{className:"process-card-description",children:e.description})]}),Ye=()=>(0,t.jsxs)(_e,{children:[(0,t.jsxs)("div",{className:"carbon-cleaning-container-top",children:[(0,t.jsx)("div",{className:"carbon-cleaning-our-specialty",children:"Our Specialty"}),(0,t.jsx)("div",{className:"carbon-cleaning-process",children:"Premium Tours and Travel Services"}),(0,t.jsx)("div",{className:"carbon-cleaning-advanced-technology",children:"Reliable & Efficient Travel Service"})]}),(0,t.jsx)("div",{className:"carbon-cleaning-container-bottom",children:J.map(e=>(0,t.jsx)(Ge,{item:e},e.title))})]}),$e=n.Ay.section`
  position: relative;
  width: 100%;
  padding: 72px 0 88px;
  overflow: hidden;
  color: #ffffff;
  background: linear-gradient(
    145deg,
    #0d9488 0%,
    #059669 22%,
    #2563eb 55%,
    #7c3aed 85%,
    #5b21b6 100%
  );

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    opacity: 0.45;
  }

  &::before {
    width: 420px;
    height: 420px;
    top: -120px;
    right: -80px;
    background: #fbbf24;
  }

  &::after {
    width: 360px;
    height: 360px;
    bottom: -100px;
    left: -60px;
    background: #4fbd39;
  }

  .gallery-header {
    position: relative;
    z-index: 1;
    max-width: 640px;
    margin: 0 auto 36px;
    padding: 0 24px;
    text-align: center;
  }

  .gallery-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #fde68a;
    margin-bottom: 14px;
    padding: 6px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(253, 230, 138, 0.35);
  }

  .gallery-title {
    font-size: 44px;
    font-weight: 800;
    margin: 0 0 16px;
    line-height: 1.15;
    background: linear-gradient(90deg, #ffffff 0%, #d1fae5 50%, #fef3c7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 34px;
    }
  }

  .gallery-label {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.9);
    display: block;
    margin: 0;
  }

  .gallery-buttons-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 14px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }

  .gallery-button {
    border: 2px solid rgba(255, 255, 255, 0.45);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: #ffffff;
    padding: 12px 26px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      background 0.25s ease,
      border-color 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.7);
    }

    &.gallery-button-active {
      border-color: transparent;
      background: linear-gradient(135deg, #4fbd39 0%, #22d3ee 100%);
      box-shadow:
        0 8px 28px rgba(79, 189, 57, 0.45),
        0 0 0 1px rgba(255, 255, 255, 0.2) inset;

      &:hover {
        box-shadow:
          0 12px 32px rgba(79, 189, 57, 0.55),
          0 0 0 1px rgba(255, 255, 255, 0.25) inset;
      }
    }
  }

  .gallery-images-container {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
    max-width: 1400px;
    margin: 40px auto 0;
    padding: 0 40px;

    @media (max-width: 768px) {
      padding: 0 20px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }
  }

  .gallery-card {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow:
      0 16px 40px rgba(15, 23, 42, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    transition:
      transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.35s ease;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        transparent 45%,
        rgba(15, 23, 42, 0.55) 100%
      );
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
      border-radius: 18px;
    }

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow:
        0 24px 48px rgba(15, 23, 42, 0.35),
        0 0 0 2px rgba(253, 230, 138, 0.4);

      &::after {
        opacity: 1;
      }

      .gallery-image {
        transform: scale(1.08);
      }
    }
  }

  .gallery-image {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 0.5s ease;

    @media (max-width: 500px) {
      height: 220px;
    }
  }
`;var Ue=i(5066);const Le=()=>{const[e,a]=(0,o.useState)("photos");return(0,t.jsxs)($e,{children:[(0,t.jsxs)("header",{className:"gallery-header",children:[(0,t.jsx)("span",{className:"gallery-eyebrow",children:"Travel Memories"}),(0,t.jsx)("h2",{className:"gallery-title",children:"GALLERY"}),(0,t.jsx)("p",{className:"gallery-label",children:"Stunning journeys, happy travellers, and unforgettable destinations captured by Ramesh Tours & Travels."})]}),(0,t.jsxs)("div",{className:"gallery-buttons-container",children:[(0,t.jsxs)("button",{type:"button",className:"gallery-button "+("photos"===e?"gallery-button-active":""),onClick:()=>a("photos"),children:[(0,t.jsx)(Ue.ReI,{}),(0,t.jsx)("span",{children:"Photos"})]}),(0,t.jsxs)("button",{type:"button",className:"gallery-button "+("videos"===e?"gallery-button-active":""),onClick:()=>a("videos"),children:[(0,t.jsx)(S.HiP,{}),(0,t.jsx)("span",{children:"Videos"})]})]}),(0,t.jsx)("div",{className:"gallery-images-container",children:ne.map(e=>(0,t.jsx)("div",{className:"gallery-card",children:(0,t.jsx)("img",{src:e.image,alt:e.name,className:"gallery-image"})},e.id))})]})},Fe=n.Ay.div`
  width: 100%;
  background-color: black;
  /* padding: 0 30px; */

  .about-us-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: white(0, 0, 0, 0.1) 0px 5px 15px;
    margin-right: 100px;

    @media (max-width: 450px) {
      width: 86%;
      height: 400px;
      margin: 20px auto 0 auto;
    }
  }

  .about-us-main-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    color: white;
    margin-top: 30px;

    @media (max-width: 450px) {
      font-size: 35px;
      margin-bottom: 10px;
    }
  }

  .about-us-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    color: white;

    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  .about-us-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 60px 0 30px;

    @media (max-width: 450px) {
      padding: 0;
    }
  }

  .about-us-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    padding: 0 100px;

    @media (max-width: 450px) {
      padding: 0 10px;
      gap: 0;
    }
  }

  .about-us-description {
    padding: 0 40px;
    text-align: justify;

    @media (max-width: 450px) {
      padding: 0 20px;
    }
  }

  .about-us-contact-us {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;
    background-color: white;
    margin-top: 20px;
    padding: 20px;
  }

  .about-us-contact-us-title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: black;

    @media (max-width: 450px) {
      font-size: 30px;
    }
  }

  .about-us-contact-us-subtitle {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    color: black;

    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  .about-us-contact-us-button {
    width: 200px;
    height: 35px;
    background-color: #4fbd39;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
  }

  .about-us-vision-mission-title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: white;
    margin: 40px 0;

    @media (max-width: 450px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  .vission-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;

    @media (max-width: 450px) {
      flex-direction: column-reverse;
      padding: 0 20px;
      margin-bottom: 20px;
    }
  }

  .vision-image {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: white(0, 0, 0, 0.1) 0px 5px 15px;

    @media (max-width: 450px) {
      width: 90%;
      height: 300px;
      margin: 0 auto;
    }
  }

  .vision-content {
    color: white;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 450px) {
      padding: 0 20px;
    }
  }

  .vision-content-title {
    font-size: 25px;
    font-weight: 600;
  }

  .mission-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;
    margin-bottom: 70px;

    @media (max-width: 450px) {
      flex-direction: column;
      padding: 0 20px;
    }
  }

  .mission-image {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: white(0, 0, 0, 0.1) 0px 5px 15px;

    @media (max-width: 450px) {
      width: 90%;
      height: 300px;
      margin: 0 auto;
    }
  }

  .mission-content {
    color: white;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 450px) {
      padding: 0 20px;
    }
  }

  .mission-content-title {
    font-size: 25px;
    font-weight: 600;
  }

  .about-us-main-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 450px) {
      flex-direction: column;
    }
  }
`,He=i.p+"44fccc2a0c0fdcaea0d3.jpg",Be=i.p+"6c315a036f1495d47c66.jpg",We=i.p+"a1dc3485bf5d54747e0a.jpg",qe=()=>(0,t.jsxs)(Fe,{children:[(0,t.jsx)("h1",{className:"about-us-main-title",children:"About Us"}),(0,t.jsxs)("div",{className:"about-us-main-container",children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"about-us-container",children:(0,t.jsxs)("div",{className:"about-us-content",children:[(0,t.jsx)("h1",{className:"about-us-title",children:"Welcome to Ramesh Tours & Travels"}),(0,t.jsx)("p",{className:"about-us-description",children:"Experience the ultimate travel comfort with our expertly crafted tours and travel services. We specialize in creating unforgettable journeys using carefully planned itineraries, trusted partners, and seamless logistics. Whether it's a relaxing getaway, an adventurous expedition, or a business trip, our professional team ensures every detail is handled with precision and care. Your journey deserves the best, and we deliver exceptional experiences that turn every trip into a lasting memory."}),(0,t.jsx)("p",{className:"about-us-description",children:"Whether you're planning a short weekend escape or a complete international tour, we've got you covered! From flights and accommodations to sightseeing and guided tours, our experienced travel experts take care of everything. We work with high-quality service providers to ensure comfort, safety, and value at every step. Your satisfaction is our top priority, and we're committed to making your travel smooth, enjoyable, and truly unforgettable—start your next adventure with us today! 🌍✈️"})]})})}),(0,t.jsx)("img",{src:He,alt:"About Us",className:"about-us-image"})]}),(0,t.jsxs)("div",{className:"about-us-contact-us",children:[(0,t.jsx)("label",{className:"about-us-contact-us-title",children:"First Time Ever in Rajahmundry"}),(0,t.jsx)("label",{className:"about-us-contact-us-subtitle",children:"Premium Tours and Travel Services"}),(0,t.jsx)("button",{className:"about-us-contact-us-button",children:"Contact Us"})]}),(0,t.jsx)("div",{className:"about-us-vision-mission-title",children:"VISION & MISSION"}),(0,t.jsxs)("div",{className:"vission-container",children:[(0,t.jsxs)("div",{className:"vision-content",children:[(0,t.jsx)("label",{className:"vision-content-title",children:"Vision"}),(0,t.jsx)("p",{children:"Our vision is to become a trusted leader in the tours and travel industry by creating meaningful, memorable, and enriching travel experiences for every traveler. We aim to inspire people to explore the world with confidence, comfort, and curiosity, while promoting sustainable tourism and cultural understanding. Through innovation, personalized service, and a passion for travel, we strive to connect people to destinations in a way that leaves lasting impressions and lifelong memories."})]}),(0,t.jsx)("img",{src:Be,alt:"Vision",className:"vision-image"})]}),(0,t.jsxs)("div",{className:"mission-container",children:[(0,t.jsx)("img",{src:We,alt:"Mission",className:"mission-image"}),(0,t.jsxs)("div",{className:"mission-content",children:[(0,t.jsx)("label",{className:"mission-content-title",children:"Mission"}),(0,t.jsx)("p",{children:"Our mission is to provide exceptional tours and travel services that combine comfort, safety, and value for our customers. We are committed to designing well-planned itineraries, offering reliable transportation and accommodations, and delivering personalized support at every step of the journey. By focusing on customer satisfaction, quality service, and ethical travel practices, we aim to make every trip smooth, enjoyable, and unforgettable for individuals, families, and groups alike."})]})]})]}),Ve=n.Ay.section`
  width: 100%;
  padding: 60px 24px 80px;
  background: linear-gradient(180deg, #f8faf8 0%, #ffffff 45%, #f4f9f3 100%);

  @media (max-width: 768px) {
    padding: 48px 16px 64px;
  }

  .packages-header {
    max-width: 720px;
    margin: 0 auto 48px;
    text-align: center;
  }

  .packages-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 12px;
  }

  .packages-title {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .packages-subtitle {
    font-size: 18px;
    font-weight: 500;
    color: #555;
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .packages-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      max-width: 420px;
    }
  }
`,Xe=n.Ay.article`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(79, 189, 57, 0.12);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(79, 189, 57, 0.18);
  }

  .package-card-image-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .package-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover .package-card-image {
    transform: scale(1.06);
  }

  .package-card-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: #4fbd39;
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 6px 12px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(79, 189, 57, 0.35);
  }

  .package-card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 22px 22px 24px;
    gap: 12px;
  }

  .package-card-location {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #4fbd39;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .package-card-title {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
    margin: 0;
  }

  .package-card-duration {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #666;
  }

  .package-card-price-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    padding: 14px 0 4px;
    border-top: 1px solid #eee;
    margin-top: 4px;
  }

  .package-card-price {
    font-size: 28px;
    font-weight: 800;
    color: #4fbd39;
    line-height: 1;
  }

  .package-card-price-note {
    font-size: 13px;
    font-weight: 500;
    color: #888;
  }

  .package-card-highlights {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .package-card-highlight {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    color: #444;
    line-height: 1.45;

    &::before {
      content: "✓";
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(79, 189, 57, 0.15);
      color: #4fbd39;
      font-size: 11px;
      font-weight: 700;
      border-radius: 50%;
      margin-top: 1px;
    }
  }

  .package-card-cta {
    margin-top: 8px;
    width: 100%;
    padding: 14px 20px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    text-decoration: none;
    text-align: center;
    display: block;
    box-sizing: border-box;

    &:hover {
      opacity: 0.92;
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`,Qe=()=>{const e=P(O);return(0,t.jsxs)(Ve,{children:[(0,t.jsxs)("header",{className:"packages-header",children:[(0,t.jsx)("span",{className:"packages-eyebrow",children:"Tour Packages"}),(0,t.jsx)("h2",{className:"packages-title",children:"Explore Our Travel Packages"}),(0,t.jsx)("p",{className:"packages-subtitle",children:"Handpicked tours across Andhra Pradesh and beyond — transparent pricing, comfortable stays, and memorable experiences with Ramesh Tours & Travels."})]}),(0,t.jsx)("div",{className:"packages-grid",children:se.map(a=>{return(0,t.jsxs)(Xe,{children:[(0,t.jsxs)("div",{className:"package-card-image-wrap",children:[(0,t.jsx)("img",{src:a.image,alt:a.title,className:"package-card-image"}),a.badge&&(0,t.jsx)("span",{className:"package-card-badge",children:a.badge})]}),(0,t.jsxs)("div",{className:"package-card-body",children:[(0,t.jsxs)("span",{className:"package-card-location",children:[(0,t.jsx)(S.vq8,{"aria-hidden":!0})," ",a.location]}),(0,t.jsx)("h3",{className:"package-card-title",children:a.title}),(0,t.jsxs)("span",{className:"package-card-duration",children:[(0,t.jsx)(S.w_X,{"aria-hidden":!0})," ",a.duration]}),(0,t.jsxs)("div",{className:"package-card-price-row",children:[(0,t.jsx)("span",{className:"package-card-price",children:(i=a.price,new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(i))}),(0,t.jsx)("span",{className:"package-card-price-note",children:"per person"})]}),(0,t.jsx)("ul",{className:"package-card-highlights",children:a.highlights.map(e=>(0,t.jsx)("li",{className:"package-card-highlight",children:e},e))}),(0,t.jsx)("a",{href:e,className:"package-card-cta",children:"Book Now"})]})]},a.id);var i})})]})},Ke=n.Ay.section`
  width: 100%;
  padding: 60px 24px 80px;
  background: linear-gradient(180deg, #f8faf8 0%, #ffffff 40%, #eef8eb 100%);

  @media (max-width: 768px) {
    padding: 48px 16px 64px;
  }

  .contact-header {
    max-width: 720px;
    margin: 0 auto 48px;
    text-align: center;
  }

  .contact-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 12px;
  }

  .contact-title {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .contact-subtitle {
    font-size: 18px;
    font-weight: 500;
    color: #555;
    line-height: 1.6;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 36px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  .contact-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }
`,Je=n.Ay.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 22px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(79, 189, 57, 0.15);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(79, 189, 57, 0.14);
  }

  .contact-info-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 16px;
  }

  .contact-info-title {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #4fbd39;
    margin-bottom: 8px;
  }

  .contact-info-value {
    font-size: 15px;
    font-weight: 500;
    color: #333;
    line-height: 1.5;
    margin: 0;
    word-break: break-word;
  }

  .contact-info-link {
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover .contact-info-value {
      color: #4fbd39;
    }
  }
`,Ze=n.Ay.form`
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(79, 189, 57, 0.12);

  @media (max-width: 480px) {
    padding: 24px 20px;
  }

  .contact-form-title {
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 8px;
  }

  .contact-form-subtitle {
    font-size: 14px;
    color: #666;
    margin: 0 0 24px;
    line-height: 1.5;
  }

  .contact-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .contact-form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    &.contact-form-field-full {
      grid-column: 1 / -1;
    }
  }

  .contact-form-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  .contact-form-input,
  .contact-form-textarea,
  .contact-form-select {
    width: 100%;
    padding: 12px 14px;
    font-size: 15px;
    font-family: inherit;
    color: #1a1a1a;
    background: #f8faf8;
    border: 1px solid #e0e8de;
    border-radius: 10px;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #4fbd39;
      box-shadow: 0 0 0 3px rgba(79, 189, 57, 0.15);
      background: #ffffff;
    }

    &::placeholder {
      color: #999;
    }
  }

  .contact-form-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .contact-form-submit {
    width: 100%;
    margin-top: 8px;
    padding: 16px 24px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
    box-shadow: 0 8px 24px rgba(79, 189, 57, 0.3);

    &:hover {
      opacity: 0.95;
      transform: translateY(-1px);
      box-shadow: 0 12px 28px rgba(79, 189, 57, 0.38);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .contact-form-success {
    margin-top: 16px;
    padding: 14px 16px;
    border-radius: 10px;
    background: rgba(79, 189, 57, 0.12);
    color: #2d7a22;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
  }
`,ea={name:"",email:"",phone:"",subject:"general",message:""},aa=()=>{const[e,a]=(0,o.useState)(ea),[i,r]=(0,o.useState)(!1),n=(e,t)=>{a(a=>({...a,[e]:t})),i&&r(!1)},s=e=>e.href?(0,t.jsx)("a",{href:e.href,className:"contact-info-link",children:(0,t.jsx)("p",{className:"contact-info-value",children:e.value})}):(0,t.jsx)("p",{className:"contact-info-value",children:e.value});return(0,t.jsxs)(Ke,{children:[(0,t.jsxs)("header",{className:"contact-header",children:[(0,t.jsx)("span",{className:"contact-eyebrow",children:"Get In Touch"}),(0,t.jsx)("h2",{className:"contact-title",children:"Contact Us"}),(0,t.jsx)("p",{className:"contact-subtitle",children:"Plan your next trip with Ramesh Tours & Travels. Reach out for packages, custom itineraries, or any travel enquiry — we're happy to help."})]}),(0,t.jsxs)("div",{className:"contact-layout",children:[(0,t.jsx)("div",{className:"contact-info-grid",children:q.map(e=>(0,t.jsxs)(Je,{children:[(0,t.jsx)("div",{className:"contact-info-icon-wrap",children:(0,t.jsx)(e.Icon,{"aria-hidden":!0})}),(0,t.jsx)("div",{className:"contact-info-title",children:e.title}),s(e)]},e.id))}),(0,t.jsxs)(Ze,{onSubmit:e=>{e.preventDefault(),r(!0),a(ea)},children:[(0,t.jsx)("h3",{className:"contact-form-title",children:"Send Us a Message"}),(0,t.jsx)("p",{className:"contact-form-subtitle",children:"Fill in the form and our team will get back to you shortly."}),(0,t.jsxs)("div",{className:"contact-form-row",children:[(0,t.jsxs)("div",{className:"contact-form-field",children:[(0,t.jsx)("label",{className:"contact-form-label",htmlFor:"contact-name",children:"Full Name"}),(0,t.jsx)("input",{id:"contact-name",className:"contact-form-input",type:"text",placeholder:"Your name",required:!0,value:e.name,onChange:e=>n("name",e.target.value)})]}),(0,t.jsxs)("div",{className:"contact-form-field",children:[(0,t.jsx)("label",{className:"contact-form-label",htmlFor:"contact-phone",children:"Phone Number"}),(0,t.jsx)("input",{id:"contact-phone",className:"contact-form-input",type:"tel",placeholder:"+91 98765 43210",required:!0,value:e.phone,onChange:e=>n("phone",e.target.value)})]})]}),(0,t.jsxs)("div",{className:"contact-form-field",children:[(0,t.jsx)("label",{className:"contact-form-label",htmlFor:"contact-email",children:"Email Address"}),(0,t.jsx)("input",{id:"contact-email",className:"contact-form-input",type:"email",placeholder:"you@example.com",required:!0,value:e.email,onChange:e=>n("email",e.target.value)})]}),(0,t.jsxs)("div",{className:"contact-form-field",children:[(0,t.jsx)("label",{className:"contact-form-label",htmlFor:"contact-subject",children:"Enquiry Type"}),(0,t.jsxs)("select",{id:"contact-subject",className:"contact-form-select",value:e.subject,onChange:e=>n("subject",e.target.value),children:[(0,t.jsx)("option",{value:"general",children:"General Enquiry"}),(0,t.jsx)("option",{value:"package",children:"Tour Package Booking"}),(0,t.jsx)("option",{value:"custom",children:"Custom Itinerary"}),(0,t.jsx)("option",{value:"group",children:"Group Travel"})]})]}),(0,t.jsxs)("div",{className:"contact-form-field",children:[(0,t.jsx)("label",{className:"contact-form-label",htmlFor:"contact-message",children:"Message"}),(0,t.jsx)("textarea",{id:"contact-message",className:"contact-form-textarea",placeholder:"Tell us about your travel plans...",required:!0,value:e.message,onChange:e=>n("message",e.target.value)})]}),(0,t.jsx)("button",{type:"submit",className:"contact-form-submit",children:"Send Message"}),i&&(0,t.jsx)("p",{className:"contact-form-success",role:"status",children:"Thank you! Your message has been received. We will contact you soon."})]})]})]})},ia=()=>{const e=window.location.hash.replace(/^#/,"").trim()||null;e&&requestAnimationFrame(()=>{D(e)})},{IntlProvider:ta}=i(6730),{FormattedMessage:oa}=i(6730),ra=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`,na=n.Ay.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`,sa=n.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,da=n.Ay.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`,ca=n.Ay.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;class la extends o.Component{constructor(e){super(e),this.handleRetry=()=>{this.setState({hasError:!1,isAccessDenied:!1}),window.location.reload()},this.renderAccessDenied=()=>(0,t.jsxs)(ra,{children:[(0,t.jsx)(na,{children:"🚫"}),(0,t.jsx)(sa,{children:(0,t.jsx)(oa,{...s.ACCESS_DENIED})}),(0,t.jsx)(da,{children:(0,t.jsx)(oa,{...s.ACCESS_DENIED_MESSAGE})}),(0,t.jsx)(ca,{onClick:this.handleRetry,children:(0,t.jsx)(oa,{...s.RETRY_ACCESS})})]}),this.renderError=()=>(0,t.jsxs)(ra,{children:[(0,t.jsx)(na,{children:"⚠️"}),(0,t.jsx)(sa,{children:(0,t.jsx)(oa,{...s.SOMETHING_WENT_WRONG})}),(0,t.jsx)(da,{children:this.state.error&&this.state.error.message?this.state.error.message:(0,t.jsx)(oa,{...s.UNEXPECTED_ERROR})}),(0,t.jsx)(ca,{onClick:this.handleRetry,children:(0,t.jsx)(oa,{...s.TRY_AGAIN})})]}),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,a){}render(){return this.state.hasError?this.state.isAccessDenied?this.renderAccessDenied():this.renderError():this.props.children}}const pa=la,xa=n.DU`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  :root {
    --color-bg-default: #fff;
    --color-bg-tertiary: #000;

    --color-text-default: #fff;
  }
`,ma=document.getElementById("root");if(!ma)throw new Error("Failed to find the root element");(0,r.H)(ma).render((0,t.jsx)(o.StrictMode,{children:(0,t.jsxs)(pa,{children:[(0,t.jsx)(xa,{}),(0,t.jsx)(()=>((0,o.useEffect)(()=>{ia();const e=()=>{ia()};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),(0,t.jsx)(ta,{locale:"en",defaultLocale:"en",children:(0,t.jsx)(m,{children:(0,t.jsxs)(Re,{children:[(0,t.jsx)(ue,{}),(0,t.jsx)(ve,{}),(0,t.jsx)(de,{}),(0,t.jsx)(g,{id:E,children:(0,t.jsx)(ke,{})}),(0,t.jsx)(g,{id:I,children:(0,t.jsx)(qe,{})}),(0,t.jsx)(g,{id:C,children:(0,t.jsx)(Ye,{})}),(0,t.jsx)(g,{id:T,children:(0,t.jsx)(Qe,{})}),(0,t.jsx)(g,{id:M,children:(0,t.jsx)(Le,{})}),(0,t.jsx)(g,{id:R,children:(0,t.jsx)(Oe,{})}),(0,t.jsx)(g,{id:O,children:(0,t.jsx)(aa,{})}),(0,t.jsx)(Se,{})]})})})),{})]})}))}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,t),r.exports}t.m=a,e=[],t.O=(a,i,o,r)=>{if(!i){var n=1/0;for(l=0;l<e.length;l++){for(var[i,o,r]=e[l],s=!0,d=0;d<i.length;d++)(!1&r||n>=r)&&Object.keys(t.O).every(e=>t.O[e](i[d]))?i.splice(d--,1):(s=!1,r<n&&(n=r));if(s){e.splice(l--,1);var c=o();void 0!==c&&(a=c)}}return a}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,o,r]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/",(()=>{var e={792:0};t.O.j=a=>0===e[a];var a=(a,i)=>{var o,r,[n,s,d]=i,c=0;if(n.some(a=>0!==e[a])){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)var l=d(t)}for(a&&a(i);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},i=self.webpackChunkaditya_car_zone=self.webpackChunkaditya_car_zone||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))})(),t.nc=void 0;var o=t.O(void 0,[142],()=>t(9298));o=t.O(o)})();
//# sourceMappingURL=main.9033fe41e4f2bce90720.js.map