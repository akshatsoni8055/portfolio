(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[10],{109:function(e,n,t){},150:function(e,n,t){var o={"./About":[100,0,3],"./About.jsx":[100,0,3],"./Education":[101,9,4],"./Education.jsx":[101,9,4],"./Experience":[102,0,1,5],"./Experience.jsx":[102,0,1,5],"./FallbackSpinner":[35],"./FallbackSpinner.jsx":[35],"./Header":[96,8],"./Header.jsx":[96,8],"./Home":[58],"./Home.jsx":[58],"./NavBar":[54],"./NavBar.jsx":[54],"./Projects":[103,0,2],"./Projects.jsx":[103,0,2],"./Skills":[104,0,7],"./Skills.jsx":[104,0,7],"./Social":[59],"./Social.jsx":[59],"./ThemeToggler":[55],"./ThemeToggler.jsx":[55],"./projects/ProjectCard":[99,0,6],"./projects/ProjectCard.jsx":[99,0,6],"./utils/hooks":[48],"./utils/hooks.js":[48]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=150,e.exports=r},151:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(19),c=t.n(i),l=(t(109),t(98),t(110),t(33)),a=t(22),s=t(86),u=t(61),d=t(6),f=t(10),j=t(35),h=t(54),b=t(58),v=t(26),m=t(1);var x,O=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),i=n[0],c=n[1];return Object(o.useEffect)((function(){fetch(v.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(h.default,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(f.c,{children:Object(m.jsxs)(o.Suspense,{fallback:Object(m.jsx)(j.default,{}),children:[Object(m.jsx)(f.a,{exact:!0,path:"/",component:b.default}),i&&i.sections.map((function(e){var n=r.a.lazy((function(){return t(150)("./"+e.component)}));return Object(m.jsx)(f.a,{path:e.path,component:function(){return Object(m.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},g=t(43),k=Object(a.c)(x||(x=Object(g.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),p={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},C={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var y=function(){var e=Object(s.a)(!0);return Object(m.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(a.b,{theme:e.value?C:p,children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(l.a,{children:Object(m.jsx)(O,{})})})]})})},S=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,192)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(y,{}),document.getElementById("root")),S()},26:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},35:function(e,n,t){"use strict";t.r(n);t(0);var o=t(152),r=t(1),i={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:i.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},48:function(e,n,t){"use strict";t.r(n),t.d(n,"useCheckMobileScreen",(function(){return i}));var o=t(6),r=t(0),i=function(){var e=Object(r.useState)(window.innerWidth),n=Object(o.a)(e,2),t=n[0],i=n[1],c=function(){i(window.innerWidth)};return Object(r.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[]),t<=768}},54:function(e,n,t){"use strict";t.r(n);var o,r,i=t(6),c=t(43),l=t(45),a=t(153),s=t(154),u=t(0),d=t(10),f=t(33),j=t(22),h=t(26),b=t(55),v=t(40),m=t(48),x=t(1),O={logoStyle:{width:50,height:40},link:{padding:"15px",borderBottom:"solid white 1px"}},g=j.d.a(o||(o=Object(c.a)(["\n  color: ",";\n  padding: 5px;\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),k=Object(j.d)(f.b)(r||(r=Object(c.a)(["\n  color: ",";\n  padding: 5px;\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),p=Object(d.f)((function(){var e,n,o,r,c,d,p,C,y,S,w;t(132),t(133);var T=Object(u.useContext)(j.a),B=Object(u.useState)(null),E=Object(i.a)(B,2),N=E[0],F=E[1],P=Object(u.useState)(!1),_=Object(i.a)(P,2),H=_[0],L=_[1],I=Object(m.useCheckMobileScreen)();return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return F(e)})).catch((function(e){return e}))}),[]),Object(x.jsx)(l.a,{fixed:"top",bg:"dark",variant:"dark",expanded:H,expand:"sm",children:Object(x.jsxs)(a.a,{fluid:!0,children:[Object(x.jsx)(l.a.Brand,{onClick:function(){return L(!1)},children:Object(x.jsx)(f.b,{exact:!0,to:"/",children:Object(x.jsx)("img",{src:null===N||void 0===N||null===(e=N.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==N&&void 0!==N&&null!==(n=N.logo)&&void 0!==n&&n.height&&null!==N&&void 0!==N&&null!==(o=N.logo)&&void 0!==o&&o.width?{height:null===N||void 0===N||null===(r=N.logo)||void 0===r?void 0:r.height,width:null===N||void 0===N||null===(c=N.logo)||void 0===c?void 0:c.width}:O.logoStyle})})}),Object(x.jsx)(l.a.Toggle,{"aria-controls":"offcanvasNavbar-expand-sm",onClick:function(){return L(!H)}}),Object(x.jsxs)(l.a.Offcanvas,{id:"offcanvasNavbar-expand-sm","aria-labelledby":"offcanvasNavbarLabel-expand-sm",placement:"start",className:"bg-dark",children:[Object(x.jsx)(v.a.Header,{onHide:function(){return L(!1)},closeVariant:"white",closeButton:!0,children:Object(x.jsx)(v.a.Title,{id:"offcanvasNavbarLabel-expand-sm",children:Object(x.jsx)(l.a.Brand,{onClick:function(){return L(!1)},children:Object(x.jsx)(f.b,{exact:!0,to:"/",children:Object(x.jsx)("img",{src:null===N||void 0===N||null===(d=N.logo)||void 0===d?void 0:d.source,className:"d-inline-block align-top",alt:"main logo",style:null!==N&&void 0!==N&&null!==(p=N.logo)&&void 0!==p&&p.height&&null!==N&&void 0!==N&&null!==(C=N.logo)&&void 0!==C&&C.width?{height:null===N||void 0===N||null===(y=N.logo)||void 0===y?void 0:y.height,width:null===N||void 0===N||null===(S=N.logo)||void 0===S?void 0:S.width}:O.logoStyle})})})})}),Object(x.jsxs)(v.a.Body,{children:[Object(x.jsx)(s.a,{children:N&&(null===(w=N.sections)||void 0===w?void 0:w.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(x.jsx)(g,{href:e.href,target:"_blank",rel:"noopener noreferrer",style:I?O.link:{},onClick:function(){return L(!1)},className:"navbar__link",theme:T,children:e.title},e.title):Object(x.jsx)(k,{onClick:function(){return L(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,style:I?O.link:{},theme:T,children:e.title},e.title)})))}),Object(x.jsx)(b.default,{onClick:function(){return L(!1)}})]})]})]})})}));n.default=p},55:function(e,n,t){"use strict";t.r(n);t(0);var o=t(88),r=t.n(o),i=t(61),c=t(1);function l(e){var n=e.onClick;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.a.Consumer,{children:function(e){return Object(c.jsx)("div",{style:{marginTop:8},children:Object(c.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}l.defaultProps={onClick:function(){}},n.default=l},58:function(e,n,t){"use strict";t.r(n);var o=t(6),r=t(0),i=t(93),c=t.n(i),l=t(73),a=t.n(l),s=t(26),u=t(59),d=t(35),f=t(1),j={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(r.useState)(null),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),t?Object(f.jsx)(a.a,{children:Object(f.jsxs)("div",{style:j.mainContainer,children:[Object(f.jsx)("h1",{style:j.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(f.jsxs)("div",{style:{flexDirection:"row"},children:[Object(f.jsx)("h2",{style:j.inlineChild,children:"I'm\xa0"}),Object(f.jsx)(c.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(f.jsx)(u.default,{})]})}):Object(f.jsx)(d.default,{})}},59:function(e,n,t){"use strict";t.r(n);var o=t(6),r=t(0),i=t(94),c=t(22),l=t(26),a=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(c.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(l.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(a.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(a.jsx)(i.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},61:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},98:function(e,n,t){}},[[151,11,12]]]);
//# sourceMappingURL=main.b3482e88.chunk.js.map