(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(267),o=r(334),s=r(273),l=r.n(s),u=r(20),d=r(3),c=r(46),f=r(335),p=r.n(f),m=Object(d.b)(p.a).withConfig({displayName:"HomeStyles__HomeContainer",componentId:"sc-1vu71h3-0"})(["position:relative;grid-column:2 / 12;display:grid;grid-row-gap:8rem;display:flex;align-items:center;margin-bottom:0rem;","{grid-column:3 / 11;}"],c.a.tablet),g=Object(d.b)(u.a.div).withConfig({displayName:"HomeStyles__Text",componentId:"sc-1vu71h3-1"})(["p{margin:1rem 0 5rem 0;","{margin:1rem 0 8rem 0;}}"],c.a.desktop),h=Object(d.b)(u.a.div).withConfig({displayName:"HomeStyles__Image",componentId:"sc-1vu71h3-2"})(["position:absolute !important;bottom:0;right:0;width:50%;padding-top:50%;.gatsby-image-wrapper{position:absolute !important;bottom:0;right:0;left:0;margin:0 auto;}","{width:40%;}"],c.a.desktop),b=r(43),y=r(9),v=r(61),S=r(55),w=function(e){var t=e.text,r=e.to;return n.a.createElement(E,{to:r},t," ",n.a.createElement(v.a,null))},E=Object(d.b)(b.Link).withConfig({displayName:"TextLink__StyledLink",componentId:"ksrenh-0"})(["position:relative;display:block;color:",";margin-bottom:2rem;transform:translate3d(0rem,0,0);"," svg{color:",";margin:0 0 -0.3rem;font-size:1.6rem;transform:translate3d(0.5rem,0,0);","}","{&:hover,&:focus{color:",";transform:translate3d(-0.5rem,0,0);"," svg{transform:translate3d(1.5rem,0,0);","}}}"],y.a.white,S.b.satanSnap,y.a.blue,S.b.satanSnap,c.a.tablet,y.a.blue,S.b.satanSnap,S.b.satanSnap);w.defaultProps={to:"/"};var O=w,A=function(){var e=o.data.file;return n.a.createElement(m,null,n.a.createElement(g,{style:S.a.verticleSlide("15rem",0)},n.a.createElement("h1",null,"Hey, my name’s Neal."),n.a.createElement("p",null,"I’m a software engineeer and builder based in Ausin, TX. "),n.a.createElement(O,{to:"/about",text:"More about me"}),n.a.createElement(O,{to:"/projects",text:"My recent projects"}),n.a.createElement(O,{to:"/contact",text:"Get in touch"}),n.a.createElement(O,{to:"/experience",text:"View my experience"})),n.a.createElement(h,{style:S.a.verticleSlide("15rem",0)},n.a.createElement(l.a,{fluid:e.childImageSharp.fluid})))};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{title:"Home"}),n.a.createElement(A,null))}},267:function(e,t,r){"use strict";var a=r(268),n=r(0),i=r.n(n),o=r(271),s=r.n(o);function l(e){var t=e.description,r=e.lang,n=e.meta,o=e.title,l=a.data.site,u=t||l.siteMetadata.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(n)}))}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},268:function(e){e.exports={data:{site:{siteMetadata:{title:"Neal Roessler",description:"My portfolio site.",author:"@NitroNeal"}}}}},270:function(e,t,r){var a=r(1),n=r(17),i=r(57),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},273:function(e,t,r){"use strict";r(14),r(15),r(2),r(79),r(174),r(277);var a=r(6);t.__esModule=!0,t.default=void 0;var n,i=a(r(49)),o=a(r(65)),s=a(r(64)),l=a(r(35)),u=a(r(0)),d=a(r(27)),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),m=function(e){var t=c(e),r=f(t);return p[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},a&&u.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),u.default.createElement("source",{media:n,srcSet:r,sizes:i}))})}function S(e){var t=[],r=[];return e.forEach(function(e){return(e.media?t:r).push(e)}),t.concat(r)}function w(e){return e.map(function(e){var t=e.src,r=e.media,a=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:a})})}function E(e){return e.map(function(e){var t=e.src,r=e.media,a=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:a})})}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+u+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=u.default.createElement(L,(0,l.default)({src:t},n));return r.length>1?u.default.createElement("picture",null,a(r),i):i},L=u.default.forwardRef(function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,c=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return u.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:d,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&m(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!g&&b&&!t.critical&&!r.seenBefore;var a=t.critical||h&&(g||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,O=e.loading,A=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:P?1:0,transition:R?"opacity "+b+"ms":"none"},s),k="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&N,s,f),C={title:t,alt:this.state.isVisible?"":r,style:z,className:p};if(m){var M=m,x=M[0];return u.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},u.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),k&&u.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),x.base64&&u.default.createElement(I,{src:x.base64,spreadProps:C,imageVariants:M,generateSources:E}),x.tracedSVG&&u.default.createElement(I,{src:x.tracedSVG,spreadProps:C,imageVariants:M,generateSources:w}),this.state.isVisible&&u.default.createElement("picture",null,v(M),u.default.createElement(L,{alt:r,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:A})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:r,title:t,loading:O},x,{imageVariants:M}))}}))}if(g){var U=g,W=U[0],T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete T.display,u.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},k&&u.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&N)}),W.base64&&u.default.createElement(I,{src:W.base64,spreadProps:C,imageVariants:U,generateSources:E}),W.tracedSVG&&u.default.createElement(I,{src:W.tracedSVG,spreadProps:C,imageVariants:U,generateSources:w}),this.state.isVisible&&u.default.createElement("picture",null,v(U),u.default.createElement(L,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:A})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:r,title:t,loading:O},W,{imageVariants:U}))}}))}return null},t}(u.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});P.propTypes={resolutions:R,sizes:V,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([V,d.default.arrayOf(V)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=P;t.default=k},277:function(e,t,r){"use strict";r(270)("fixed",function(e){return function(){return e(this,"tt","","")}})},334:function(e){e.exports={data:{file:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE30lEQVQ4y5WU21PTRxTHD7/8BX2UN/umNoM1GJIYIoEQLiEBpJQqASwUCLdUHSqXAIGmQcER5E5b4BekqWhtBAJBQ1srtLVDicPgDAKCUKtcRlR0HB6605zub3Gc8dEzs7Nndn/ns2fP73sW4LVZrVbo7u5mfl9fH9TV1UF7ezssLS3B7OwsTE9Pw8zMDMzNzcHKygo8fvyYfSvMwvpblpeXB83NzcyvqakJ6OzsFNGZm5qa4hDxzXj69Cn34MEDbnNzk7t7967o0qVLAULM2NjYm2SgoKAAjEYj88vLywPgHe3UqVMsRqPRgFwuB4iNjWUbJSUlbKOlpWVXT0+PjZpjeHiYf/XqFf/ixUs6XvD0+vz9+/f51dVVx/z8vO3atWuBQkxZWRknzDExMTunZGRkMFhqauqunJycxdbWVuzq6kIKxufPn+F/5F98tvkEKRQ3NjZwa2sLKRjb2toWpVIpg2ZmZu7cLikpCbKyskSCf/z4cRstAdKxTetILJYKYjSmkQhVGIkKCyM/XnWR9fV1cuXKFULrvm2xWDA5Odn2OlYUEREBIJFIQKvVspRlMpmDfoB0k9B6Yo21yv+5ToONWSnYmmfE1ppK7HM6/VFaLR4+fJjk5uZiWlparxCr1+s5k8kEUFVVBRUVFQxIfb62thYT4uNJuEbj/zhej67ibNzoPYdbl5vwp1Y7ykNV+P7u3f7IyEiavRHT09N5IVatVnMnT54EWFhYAFobBlxbWxMKj9XV1UQTHo45Bh0W67V42ZyNnpJCvHGmBJPUobhXLEaDXk/q6+uRSocBi4uLOa/XC9DQ0ADUYUCeGtUU9l68SEKCJZgZrsShL0zoNGXi7Plq3HA2YbnpM9QnJqLT+R15+PAhjo6OMiAVPudyuQDy8/NhcHCQAe12OwPSP0yOpaZi8YkTaNIqsSYhFt306u2lBWj90oZUJkiFTKjQkUIYkP557sKFCwD9/f0wOTnJgDRT/tatW1hUVEQu9vai1zuGofvFWKgNxc78Y5iVnIA5uSasO3sWqbTIyMgI0mQYkII5t9sN4PF4wOfzMSCF8Xd8PgrykoWVZf/UHR+e+CgeU+QS9FQXYv8ZC6aa8jA7O9tvrawktXY7FpnNDFhaWsqZzWYQYDA9M8OA1Hf8vbaKy4/+IX84f8BvzYX+eioZ3/kyfOlqwoWr36DLYvM3njmLp62VpKSsVJCN43ULclRyALSFYGlungl7aXnZtn7bh7/nl247xSrSuOcgqVRGkJWva8m9r06ToU8yyKzWSKb0n5JzuuTtIwYDyhQKJmylUimiY6f1JhraWdtM/PJr4NChuMW/gmPxZ4UBB4IjsUcchnONdvwz4SgO7Y/G6YgUvKdMxGVVCnao4xch5APWerEK5U7rCW+dYJPWerbgFqsCPYf0toGDUb1uaRTftU/JN8Qk8m5ZND+oiufHlQZ+XK5zeCRRtgVxFIPl7gtmJaMdB+wBffTkCYP6Gjq4d32+0sUHWcx7B8QQFBS0s+gQh8JEaALzh6XRATdCdKIRmY77/oCa69l7iPOXV3IuuYZzyeK439RHuNsKPecNjhYNSWPYrW7uCYOe6OS3T7oujwOXRMP8gWAt869LY6BjjwKOSlUwqoiDAWUc0OvCuEwHN0PiduovM8DIh5FvOP8D/Jqgiegric8AAAAASUVORK5CYII=",aspectRatio:1,src:"/static/cb871395e149b19e4bbd53159a91790d/74179/rs-hero.png",srcSet:"/static/cb871395e149b19e4bbd53159a91790d/3ec5e/rs-hero.png 325w,\n/static/cb871395e149b19e4bbd53159a91790d/74179/rs-hero.png 601w",sizes:"(max-width: 601px) 100vw, 601px"}}}}}},335:function(e,t,r){"use strict";r(30),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}}),r(336);var a,n=(a=r(337))&&a.__esModule?a:{default:a}},336:function(e,t,r){"use strict";r(47),r(63),r(2),r(56),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)})},337:function(e,t,r){"use strict";r(36),r(127),r(18),r(48),r(28),r(30),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(338)),i=o(r(340));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function u(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){function t(){var e,r,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return a=this,o=(e=d(t)).call.apply(e,[this].concat(u)),r=!o||"object"!==s(o)&&"function"!=typeof o?f(a):o,p(f(f(r)),"state",{style:{}}),p(f(f(r)),"updateStyle",function(){var e=(0,n.default)(r.props.style,(0,i.default)());r.setState({style:e})}),r}var r,o,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,a["default"].Component),r=t,(o=[{key:"componentDidMount",value:function(){this.updateStyle(),window.addEventListener("resize",this.updateStyle)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateStyle)}},{key:"render",value:function(){return a.default.createElement("div",l({},this.props,{style:this.state.style}))}}])&&u(r.prototype,o),m&&u(r,m),t}();t.default=m},338:function(e,t,r){"use strict";r(30),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var a,n=(a=r(339))&&a.__esModule?a:{default:a}},339:function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r(14),r(15),r(2),r(26),r(21),r(56),r(11),r(48),r(28),r(30),Object.defineProperty(t,"__esModule",{value:!0}),t.containsRvh=function(e){return/(\d+(\.\d*)?)rvh(?!\w)/.test(e)},t.default=void 0;var n=function(e,t){!function(e,t){if("object"!==a(e)&&void 0!==e||Array.isArray(e))throw Error("style (the first argument) must be an object or undefined");if("number"!=typeof t||t<0)throw Error("Second argument (windowHeight) must be a non-negative number")}(e,t);var r=void 0===e?{height:"100rvh"}:e,n={};return Object.keys(r).forEach(function(e){n[e]="string"==typeof r[e]?function(e,t){return e.replace(/(\d+(\.\d*)?)rvh(?!\w)/g,function(e,r){return"".concat(t*parseFloat(r)/100,"px")})}(r[e],t):r[e]}),n};t.default=n},340:function(e,t,r){"use strict";r(30),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return window.innerHeight};t.default=a}}]);
//# sourceMappingURL=component---src-pages-index-jsx-15a4b140a7c1b9f964df.js.map