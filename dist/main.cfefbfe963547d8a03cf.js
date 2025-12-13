(()=>{"use strict";var e,i={726:(e,i,r)=>{var a=r(848),n=r(540),t=r(338),o=r(581);const s=(0,r(730).defineMessages)({ADITYA_CAR_ZONE:{id:"app.name",defaultMessage:"Aditya Car Zone"},HOME:{id:"nav.home",defaultMessage:"Home"},ABOUT_US:{id:"nav.about",defaultMessage:"About Us"},DRIVING_SCHOOL:{id:"nav.driving-school",defaultMessage:"Driving School"},CARBON_CLEANING:{id:"nav.carbon-cleaning",defaultMessage:"Carbon Cleaning"},SERVICES:{id:"nav.services",defaultMessage:"Services"},PACKAGES:{id:"nav.packages",defaultMessage:"Packages"},GALLERY:{id:"nav.gallery",defaultMessage:"Gallery"},CONTACT_US:{id:"nav.contact",defaultMessage:"Contact Us"},VALIDATING_ACCESS:{id:"access.validating",defaultMessage:"Validating Access..."},VALIDATING_ACCESS_MESSAGE:{id:"access.validating.message",defaultMessage:"Please wait while we verify your access credentials."},ACCESS_DENIED:{id:"access.denied",defaultMessage:"Access Denied"},ACCESS_DENIED_DESCRIPTION:{id:"access.denied.description",defaultMessage:"You dont have permission to access this application. Please check your access key and try again."},ACCESS_DENIED_MESSAGE:{id:"access.denied.message",defaultMessage:"You dont have permission to access this application. Please check your access key and try again."},RETRY_ACCESS:{id:"access.retry",defaultMessage:"Retry Access"},SOMETHING_WENT_WRONG:{id:"error.something.wrong",defaultMessage:"Something went wrong"},UNEXPECTED_ERROR:{id:"error.unexpected",defaultMessage:"An unexpected error occurred. Please try again."},TRY_AGAIN:{id:"error.try.again",defaultMessage:"Try Again"},PHONE_NUMBER:{id:"infobar.phone",defaultMessage:"+91 9849199569"},EMAIL:{id:"infobar.email",defaultMessage:"adityacarzone@gmail.com"},OPENING_HOURS:{id:"infobar.opening-hours",defaultMessage:"Mon - Sat: 9:00 - 20:00"}}),{FormattedMessage:d}=r(730),c=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`,l=o.Ay.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`,h=o.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,m=o.Ay.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`,f=o.Ay.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,x=({children:e})=>{const[i,r]=(0,n.useState)(null),[t,o]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{(async()=>{try{const e="u34kkfe993943kkjerufj3343334h",i="u34kkfe993943kkjerufj3343334h";await new Promise(e=>setTimeout(e,1e3)),r(e===i)}catch(e){r(!1)}finally{o(!1)}})()},[]),t?(0,a.jsxs)(c,{children:[(0,a.jsx)(f,{}),(0,a.jsx)(h,{children:(0,a.jsx)(d,{...s.VALIDATING_ACCESS})}),(0,a.jsx)(m,{children:(0,a.jsx)(d,{...s.VALIDATING_ACCESS_MESSAGE})})]}):i?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsxs)(c,{children:[(0,a.jsx)(l,{children:"🚫"}),(0,a.jsx)(h,{children:(0,a.jsx)(d,{...s.ACCESS_DENIED})}),(0,a.jsx)(m,{children:(0,a.jsx)(d,{...s.ACCESS_DENIED_DESCRIPTION})})]})},g=o.Ay.div`
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
`,p=o.Ay.div`
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
`,u=o.Ay.button`
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
`,b=o.Ay.div`
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
`,v=o.Ay.div`
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
`,y=o.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,j=o.Ay.div`
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
`,w=o.Ay.button`
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
`,A=o.Ay.nav`
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
`;var E=r(197),S=r(223),C=r(27);const k=e=>[{name:e.formatMessage(s.HOME),href:"/",Icon:C.rQ8},{name:e.formatMessage(s.ABOUT_US),href:"/about",Icon:C.x$1},{name:e.formatMessage(s.SERVICES),href:"/services",Icon:C.xdT},{name:e.formatMessage(s.PACKAGES),href:"/packages",Icon:E.APk},{name:e.formatMessage(s.GALLERY),href:"/gallery",Icon:C.kQE},{name:e.formatMessage(s.CONTACT_US),href:"/contact-us",Icon:S.OB9}];var M=r(512);const I=[{name:"Facebook",Icon:C.iYk,href:"#"},{name:"Twitter",Icon:E.feZ,href:"#"},{name:"Instagram",Icon:C.ao$,href:"#"},{name:"Youtube",Icon:M.Jvf,href:"#"},{name:"LinkedIn",Icon:C.QEs,href:"#"}],N=()=>{const[e,i]=(0,n.useState)(!1),r=()=>{i(!1)},t=k({formatMessage:e=>e.defaultMessage});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g,{children:[(0,a.jsx)("h3",{"data-testid":"text-navbar-brand",children:"Aditya Car Zone"}),(0,a.jsx)(p,{children:t.map((e,i)=>(0,a.jsx)("a",{href:"#","data-testid":`link-nav-${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name},i))}),(0,a.jsx)(u,{onClick:()=>{i(!e)},"data-testid":"button-navbar-menu",children:(0,a.jsx)(C.OXb,{})})]}),e&&(0,a.jsx)(b,{onClick:r,"data-testid":"overlay-navbar-drawer"}),(0,a.jsx)(v,{isOpen:e,children:(0,a.jsxs)(y,{children:[(0,a.jsxs)(j,{children:[(0,a.jsx)("h3",{"data-testid":"text-drawer-brand",children:"Aditya Car Zone"}),(0,a.jsx)(w,{onClick:r,"data-testid":"button-drawer-close",children:(0,a.jsx)(C.QCr,{})})]}),(0,a.jsx)(A,{children:t.map((e,i)=>(0,a.jsx)("a",{href:"#",onClick:r,"data-testid":`link-drawer-${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name},i))})]})})]})};var O=r(442);const _="1.25rem",D="600",R="\n  text-transform: inherit;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif",z=`\n  ${R};\n  font-size: 0.875rem;\n  font-weight: ${D};\n  line-height: ${_};`,T=`\n  ${R};\n  font-size: 1rem;\n  font-weight: ${D};\n  line-height: ${_};`,P=`\n  ${R};\n  font-size: 0.75rem;\n  font-weight: ${D};\n  line-height: 1rem;`,$=o.Ay.div`
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

  @media (max-width: 1024px) {
    padding: 0 20px;
    overflow: hidden;
  }

  .info-bar-left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    .info-bar-item {
      color: var(--color-text-default);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      ${z};

      @media (max-width: 1024px) {
        ${P};
      }

      @media (max-width: 700px) {
        ${z};
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
    ${T};

    @media (max-width: 1024px) {
      ${z};
    }

    @media (max-width: 700px) {
      ${T};
    }
  }
`,G=()=>{const e=[{name:(i=(0,O.A)()).formatMessage(s.PHONE_NUMBER),Icon:C.Cab},{name:i.formatMessage(s.EMAIL),Icon:C.maD},{name:i.formatMessage(s.OPENING_HOURS),Icon:E.w_X}];var i;return(0,a.jsxs)($,{"data-testid":"section-infobar",children:[(0,a.jsx)("div",{className:"info-bar-left-container",children:e.map((e,i)=>(0,a.jsxs)("div",{className:"info-bar-item",children:[(0,a.jsx)(e.Icon,{}),(0,a.jsx)("span",{className:"info-bar-item-text",children:e.name})]},i))}),(0,a.jsx)("div",{className:"info-bar-right-container",children:I.map((e,i)=>(0,a.jsx)(e.Icon,{},i))})]})},U=[{name:"Driving School"},{name:"Cars"},{name:"Carbon Cleaning"}],L=o.Ay.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;

  .menu-bar-item {
    background-color: red;
    width: 33.9%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: 600;
    /* cursor: pointer; */
    transition: all 0.5s ease;
    &:hover {
      color: black;
      /* background-color: #000; */
    }

    @media (max-width: 600px) {
      font-size: 12px;
    }

    @media (max-width: 430px) {
      font-size: 11px;
    }
  }
`,H=()=>(0,a.jsx)(L,{children:U.map((e,i)=>(0,a.jsx)("div",{className:"menu-bar-item",children:e.name},i))}),Y=o.Ay.div`
  height: 100%;
  width: 100%;
  background-color: purple;
`,F=()=>(0,a.jsx)(Y,{children:"Home"}),B=r.p+"5d3ed27029bf5677f133.jpg",V=o.Ay.div`
  height: 600px;
  width: 100%;
  background-image: url(${B});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .footer-container {
    display: flex;
    flex-direction: row;
    color: white;
    font-weight: 600;
  }
`,Z=()=>{const e=k({formatMessage:e=>e.defaultMessage});return(0,a.jsx)(V,{children:(0,a.jsxs)("div",{className:"footer-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Aditya Car Zone"}),(0,a.jsx)("div",{children:"Professional carbon cleaning services delivering exceptional results. Trust our expertise for optimal engine performance."}),I.map((e,i)=>(0,a.jsx)(e.Icon,{},i))]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Quick Links"}),(0,a.jsx)("div",{children:e.map((e,i)=>(0,a.jsx)("a",{href:"#","data-testid":`link-nav-${e.name.toLowerCase().replace(/\s+/g,"-")}`,children:e.name},i))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Our Services"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"#","data-testid":"link-service-carbon-cleaning",children:"Driving School"}),(0,a.jsx)("a",{href:"#","data-testid":"link-service-carbon-cleaning",children:"Carbon Cleaning"}),(0,a.jsx)("a",{href:"#","data-testid":"link-service-carbon-cleaning",children:"Cars Rented/Sale"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Contact Info"}),(0,a.jsx)("div",{children:"Near vartha office, Morampudi, Rajamahendravaram, Andhra Pradesh, 533107."}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Call Us:"}),(0,a.jsx)("div",{children:"+91 9849199569"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Email Us:"}),(0,a.jsx)("div",{children:"adityacarzone@gmail.com"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Working Hours:"}),(0,a.jsx)("div",{children:"Mon - Sat: 9:00 AM - 9:00 PM"})]})]})]})})},Q=o.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,{IntlProvider:W}=r(730),{FormattedMessage:X}=r(730),K=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`,J=o.Ay.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`,q=o.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,ee=o.Ay.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`,ie=o.Ay.button`
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
`;class re extends n.Component{constructor(e){super(e),this.handleRetry=()=>{this.setState({hasError:!1,isAccessDenied:!1}),window.location.reload()},this.renderAccessDenied=()=>(0,a.jsxs)(K,{children:[(0,a.jsx)(J,{children:"🚫"}),(0,a.jsx)(q,{children:(0,a.jsx)(X,{...s.ACCESS_DENIED})}),(0,a.jsx)(ee,{children:(0,a.jsx)(X,{...s.ACCESS_DENIED_MESSAGE})}),(0,a.jsx)(ie,{onClick:this.handleRetry,children:(0,a.jsx)(X,{...s.RETRY_ACCESS})})]}),this.renderError=()=>(0,a.jsxs)(K,{children:[(0,a.jsx)(J,{children:"⚠️"}),(0,a.jsx)(q,{children:(0,a.jsx)(X,{...s.SOMETHING_WENT_WRONG})}),(0,a.jsx)(ee,{children:this.state.error&&this.state.error.message?this.state.error.message:(0,a.jsx)(X,{...s.UNEXPECTED_ERROR})}),(0,a.jsx)(ie,{onClick:this.handleRetry,children:(0,a.jsx)(X,{...s.TRY_AGAIN})})]}),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,i){}render(){return this.state.hasError?this.state.isAccessDenied?this.renderAccessDenied():this.renderError():this.props.children}}const ae=re,ne=o.DU`
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
`,te=document.getElementById("root");if(!te)throw new Error("Failed to find the root element");(0,t.H)(te).render((0,a.jsx)(n.StrictMode,{children:(0,a.jsxs)(ae,{children:[(0,a.jsx)(ne,{}),(0,a.jsx)(()=>(0,a.jsx)(W,{locale:"en",defaultLocale:"en",children:(0,a.jsx)(x,{children:(0,a.jsxs)(Q,{children:[(0,a.jsx)(G,{}),(0,a.jsx)(H,{}),(0,a.jsx)(N,{}),(0,a.jsx)(F,{}),(0,a.jsx)(Z,{})]})})}),{})]})}))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={exports:{}};return i[e](t,t.exports,a),t.exports}a.m=i,e=[],a.O=(i,r,n,t)=>{if(!r){var o=1/0;for(l=0;l<e.length;l++){for(var[r,n,t]=e[l],s=!0,d=0;d<r.length;d++)(!1&t||o>=t)&&Object.keys(a.O).every(e=>a.O[e](r[d]))?r.splice(d--,1):(s=!1,t<o&&(o=t));if(s){e.splice(l--,1);var c=n();void 0!==c&&(i=c)}}return i}t=t||0;for(var l=e.length;l>0&&e[l-1][2]>t;l--)e[l]=e[l-1];e[l]=[r,n,t]},a.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return a.d(i,{a:i}),i},a.d=(e,i)=>{for(var r in i)a.o(i,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},a.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={792:0};a.O.j=i=>0===e[i];var i=(i,r)=>{var n,t,[o,s,d]=r,c=0;if(o.some(i=>0!==e[i])){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(d)var l=d(a)}for(i&&i(r);c<o.length;c++)t=o[c],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(l)},r=self.webpackChunkaditya_car_zone=self.webpackChunkaditya_car_zone||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))})(),a.nc=void 0;var n=a.O(void 0,[81],()=>a(726));n=a.O(n)})();
//# sourceMappingURL=main.cfefbfe963547d8a03cf.js.map