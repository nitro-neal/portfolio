(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(267),i=n(270),l=n(280),c=n(55),m=n(281);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"Contact"}),r.a.createElement(i.b,{style:c.a.verticleSlide("15rem",0)},r.a.createElement(m.a,{title:"Contact",copy:"Leave a message and say hello!"}),r.a.createElement(l.a,{name:"Contact Form"})))}},267:function(e,t,n){"use strict";var a=n(268),r=n(0),o=n.n(r),i=n(272),l=n.n(i);function c(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,c=a.data.site,m=t||c.siteMetadata.description;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(r)}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},268:function(e){e.exports={data:{site:{siteMetadata:{title:"Neal Roessler",description:"My portfolio site.",author:"@NitroNeal"}}}}},270:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return m});var a=n(3),r=n(47),o=n(20),i=n(9),l=Object(a.b)(o.a.div).withConfig({displayName:"Container",componentId:"sc-16smyx2-0"})(["position:relative;grid-column:2 / 12;display:grid;grid-row-gap:8rem;margin-bottom:8rem;","{grid-column:3 / 11;}"],r.a.tablet),c=Object(a.b)(l).withConfig({displayName:"Container__ContentContainer",componentId:"sc-16smyx2-1"})(["grid-row-gap:2rem;margin-top:30vh;","{grid-template-columns:1fr 1fr;grid-auto-rows:min-content;.full{grid-column:span 2;}h1,.left{grid-column:span 1;}article,p,.right{grid-column-start:2;}}"],r.a.desktop),m=a.b.div.withConfig({displayName:"Container__ContactContainer",componentId:"sc-16smyx2-2"})(["position:relative;grid-column:1 / -1;background-color:",";color:",";display:grid;grid-template-columns:repeat(12,1fr);padding:calc(100vh / 6) 0;box-shadow:inset 0 0 5rem rgba(0,0,0,0.25);div{grid-column:2 / 12;","{grid-column:3 / 11;}","{grid-column:3 / 6;}}form{grid-column:2 / 12;","{grid-column:3 / 11;}","{grid-column:7 / 11;}input,textarea{border:",";}}a{color:"," !important;}label{p{background-color:",";}}button{color:",";background-color:",";}"],function(e){return e.color},function(e){return"Binance"===e.client?"#02394A":i.a.white},r.a.tablet,r.a.desktop,r.a.tablet,r.a.desktop,function(e){return"Binance"===e.client?"0.1rem solid #02394A":null},function(e){return"Binance"===e.client?"#02394A":i.a.white},function(e){return e.color},function(e){return e.color},function(e){return"Binance"===e.client?"#02394A":i.a.white});t.c=l},271:function(e,t,n){var a=n(1),r=n(17),o=n(57),i=/"/g,l=function(e,t,n,a){var r=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},280:function(e,t,n){"use strict";n(34);var a=n(0),r=n.n(a),o=n(3),i=n(9),l=n(55),c=n(47);n(285);t.a=function(e){var t=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{name:t,method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field",action:"http://formforwarder.xyz/groessler24@gmail.com"},r.a.createElement("input",{type:"hidden",name:"_next",value:"https://nitro-neal.github.io/portfolio/"}),r.a.createElement(m,null,r.a.createElement("label",{htmlFor:"name"},r.a.createElement("p",null,"Your name")),r.a.createElement("input",{type:"text",name:"name",id:"name",required:!0})),r.a.createElement(m,null,r.a.createElement("label",{htmlFor:"email"},r.a.createElement("p",null,"Your email")),r.a.createElement("input",{type:"email",name:"email",id:"email",required:!0})),r.a.createElement(m,null,r.a.createElement("label",{htmlFor:"message"},r.a.createElement("p",null,"Message")),r.a.createElement("textarea",{name:"message",id:"message",required:!0})),r.a.createElement(u,{type:"submit"},r.a.createElement("p",null,"Send"),r.a.createElement(d,null))))};var m=o.b.div.withConfig({displayName:"ContactForm__Input",componentId:"bbci56-0"})(["display:flex;flex-direction:column;margin-bottom:4rem;p{padding:0 1rem;width:fit-content;background-color:",";transform:translate(1rem,1rem);}input,textarea{border:0.1rem solid ",";color:",";padding:2rem;}"],i.a.black,i.a.white,i.a.white),u=o.b.button.withConfig({displayName:"ContactForm__Button",componentId:"bbci56-1"})(["cursor:pointer;position:relative;z-index:0;background-color:",";color:",";padding:1.5rem 8rem;float:right;width:100%;","{width:auto;}"],i.a.blue,i.a.white,c.a.tablet),d=o.b.span.withConfig({displayName:"ContactForm__ButtonSpan",componentId:"bbci56-2"})(["position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;background-color:",";opacity:0.05;transform:scale3d(1,0,1);transform-origin:50% 100%;"," ",":hover &{transform:scale3d(1,1,1);}"],i.a.black,l.b.mediumSnap,u)},281:function(e,t,n){"use strict";n(276);var a=n(0),r=n.n(a),o=n(3),i=n(9),l=n(61),c=o.b.div.withConfig({displayName:"ContactCard__Card",componentId:"sc-17k1fd5-0"})(["margin-bottom:5rem;h1{margin-bottom:2rem;}p{margin-bottom:2rem;}a{color:",";svg{transform:translate(0.75rem,0.25rem);}}"],i.a.blue);t.a=function(e){var t=e.title,n=e.copy,a=e.link;return r.a.createElement(c,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,n),a?r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"View the project ",r.a.createElement(l.d,null)):null)}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-56761c7ffe441559b0da.js.map