(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(t,e,r){"use strict";r.r(e);r(209);var n=r(0),a=r.n(n),i=r(57),s=r(204),u=r(210),o=r(208),c=r.n(o),l=function(){return a.a.createElement(i.b,{query:"3772800626",render:function(t){return a.a.createElement(c.a,{fluid:t.placeholderImage.childImageSharp.fluid})},data:u})},f=r(102),d=r.n(f);function p(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,r){return e.apply(this,arguments)};case 3:return function(t,r,n){return e.apply(this,arguments)};case 4:return function(t,r,n,a){return e.apply(this,arguments)};case 5:return function(t,r,n,a,i){return e.apply(this,arguments)};case 6:return function(t,r,n,a,i,s){return e.apply(this,arguments)};case 7:return function(t,r,n,a,i,s,u){return e.apply(this,arguments)};case 8:return function(t,r,n,a,i,s,u,o){return e.apply(this,arguments)};case 9:return function(t,r,n,a,i,s,u,o,c){return e.apply(this,arguments)};case 10:return function(t,r,n,a,i,s,u,o,c,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function g(t,e){return function(){return e.call(this,t.apply(this,arguments))}}function h(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function m(t){return function e(r){return 0===arguments.length||h(r)?e:t.apply(this,arguments)}}function y(t){return function e(r,n){switch(arguments.length){case 0:return e;case 1:return h(r)?e:m(function(e){return t(r,e)});default:return h(r)&&h(n)?e:h(r)?m(function(e){return t(e,n)}):h(n)?m(function(e){return t(r,e)}):t(r,n)}}}function b(t){return function e(r,n,a){switch(arguments.length){case 0:return e;case 1:return h(r)?e:y(function(e,n){return t(r,e,n)});case 2:return h(r)&&h(n)?e:h(r)?y(function(e,r){return t(e,n,r)}):h(n)?y(function(e,n){return t(r,e,n)}):m(function(e){return t(r,n,e)});default:return h(r)&&h(n)&&h(a)?e:h(r)&&h(n)?y(function(e,r){return t(e,r,a)}):h(r)&&h(a)?y(function(e,r){return t(e,n,r)}):h(n)&&h(a)?y(function(e,n){return t(r,e,n)}):h(r)?m(function(e){return t(e,n,a)}):h(n)?m(function(e){return t(r,e,a)}):h(a)?m(function(e){return t(r,n,e)}):t(r,n,a)}}}r(77),r(45),r(37),r(56),r(76),r(8),r(38);var v=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};var S=m(function(t){return!!v(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),w=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var E=y(function(t,e){return p(t.length,function(){return t.apply(e,arguments)})});function O(t,e,r){for(var n=r.next();!n.done;){if((e=t["@@transducer/step"](e,n.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n=r.next()}return t["@@transducer/result"](e)}function A(t,e,r,n){return t["@@transducer/result"](r[n](E(t["@@transducer/step"],t),e))}var I="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function L(t,e,r){if("function"==typeof t&&(t=function(t){return new w(t)}(t)),S(r))return function(t,e,r){for(var n=0,a=r.length;n<a;){if((e=t["@@transducer/step"](e,r[n]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n+=1}return t["@@transducer/result"](e)}(t,e,r);if("function"==typeof r["fantasy-land/reduce"])return A(t,e,r,"fantasy-land/reduce");if(null!=r[I])return O(t,e,r[I]());if("function"==typeof r.next)return O(t,e,r);if("function"==typeof r.reduce)return A(t,e,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}var R=b(L);function z(t,e){return function(){var r=arguments.length;if(0===r)return e();var n=arguments[r-1];return v(n)||"function"!=typeof n[t]?e.apply(this,arguments):n[t].apply(n,Array.prototype.slice.call(arguments,0,r-1))}}var j=m(z("tail",b(z("slice",function(t,e,r){return Array.prototype.slice.call(r,t,e)}))(1,1/0)));function C(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function N(t,e,r){return function(){if(0===arguments.length)return r();var n=Array.prototype.slice.call(arguments,0),a=n.pop();if(!v(a)){for(var i=0;i<t.length;){if("function"==typeof a[t[i]])return a[t[i]].apply(a,n);i+=1}if(C(a)){var s=e.apply(null,n);return s(a)}}return r.apply(this,arguments)}}var V=function(){return this.xf["@@transducer/init"]()},x=function(t){return this.xf["@@transducer/result"](t)},W=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=V,t.prototype["@@transducer/result"]=x,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),k=y(function(t,e){return new W(t,e)});r(15),r(16),r(20);function T(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var P=Object.prototype.toString,q=function(){return"[object Arguments]"===P.call(arguments)?function(t){return"[object Arguments]"===P.call(t)}:function(t){return T("callee",t)}}(),M=!{toString:null}.propertyIsEnumerable("toString"),J=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(){return arguments.propertyIsEnumerable("length")}(),H=function(t,e){for(var r=0;r<t.length;){if(t[r]===e)return!0;r+=1}return!1},U="function"!=typeof Object.keys||B?m(function(t){if(Object(t)!==t)return[];var e,r,n=[],a=B&&q(t);for(e in t)!T(e,t)||a&&"length"===e||(n[n.length]=e);if(M)for(r=J.length-1;r>=0;)T(e=J[r],t)&&!H(n,e)&&(n[n.length]=e),r-=1;return n}):m(function(t){return Object(t)!==t?[]:Object.keys(t)}),Y=y(N(["filter"],k,function(t,e){return r=e,"[object Object]"===Object.prototype.toString.call(r)?L(function(r,n){return t(e[n])&&(r[n]=e[n]),r},{},U(e)):function(t,e){for(var r=0,n=e.length,a=[];r<n;)t(e[r])&&(a[a.length]=e[r]),r+=1;return a}(t,e);var r}));function F(t,e,r){return function(){for(var n=[],a=0,i=t,s=0;s<e.length||a<arguments.length;){var u;s<e.length&&(!h(e[s])||a>=arguments.length)?u=e[s]:(u=arguments[a],a+=1),n[s]=u,h(u)||(i-=1),s+=1}return i<=0?r.apply(this,n):p(i,F(t,n,r))}}var G=function(){function t(t,e,r,n){this.valueFn=t,this.valueAcc=e,this.keyFn=r,this.xf=n,this.inputs={}}return t.prototype["@@transducer/init"]=V,t.prototype["@@transducer/result"]=function(t){var e;for(e in this.inputs)if(T(e,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[e]))["@@transducer/reduced"]){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){var r=this.keyFn(e);return this.inputs[r]=this.inputs[r]||[r,this.valueAcc],this.inputs[r][1]=this.valueFn(this.inputs[r][1],e),t},t}(),K=y(z("groupBy",F(4,[],N([],F(4,[],function(t,e,r,n){return new G(t,e,r,n)}),function(t,e,r,n){return L(function(n,a){var i=r(a);return n[i]=t(T(i,n)?n[i]:e,a),n},{},n)}))(function(t,e){return null==t&&(t=[]),t.push(e),t},null))),Q=m(function(t){var e=[];for(var r in t)T(r,t)&&(e[e.length]=[r,t[r]]);return e}),X=(r(140),y(function(t,e){return Array.prototype.slice.call(e,0).sort(t)}));r.d(e,"listQuery",function(){return D});e.default=function(t){var e=t.data,r=Object(n.useState)(""),u=r[0],o=r[1],f=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return p(arguments[0].length,R(g,arguments[0],j(arguments)))}(Y(function(t){return t.node.frontmatter.title.toLowerCase().startsWith(u.toLowerCase())}),K(function(t){return t.node.frontmatter.title[0]}),Q,X(function(t,e){return t[0].localeCompare(e[0])}))(e.allMarkdownRemark.edges);return a.a.createElement(s.a,null,a.a.createElement(d.a,{title:"Home"}),a.a.createElement("div",null,a.a.createElement("input",{className:"recipe-filter",onChange:function(t){return o(t.currentTarget.value)},placeholder:"  🔍"})),a.a.createElement("div",{className:"recipe-list"},f.map(function(t){return a.a.createElement("div",{className:"recipe-group",key:t[0]},a.a.createElement("div",{className:"recipe-group-heading"},t[0]),a.a.createElement("div",{className:"recipe-group-content"},t[1].map(function(t){var e=t.node;return a.a.createElement(i.a,{to:e.fields.slug,className:"link",key:e.frontmatter.title},a.a.createElement("div",{className:"recipe"},e.frontmatter.image?a.a.createElement(c.a,{fluid:e.frontmatter.image.childImageSharp.fluid}):a.a.createElement(l,null),a.a.createElement("span",null,e.frontmatter.title)))})))})))};var D="4200335399"},208:function(t,e,r){"use strict";r(15),r(16),r(8),r(103),r(141),r(211);var n=r(21);e.__esModule=!0,e.default=void 0;var a,i=n(r(78)),s=n(r(79)),u=n(r(142)),o=n(r(143)),c=n(r(0)),l=n(r(46)),f=function(t){var e=(0,o.default)({},t),r=e.resolutions,n=e.sizes,a=e.critical;return r&&(e.fixed=r,delete e.resolutions),n&&(e.fluid=n,delete e.sizes),a&&(e.loading="eager"),e.fluid&&(e.fluid=S([].concat(e.fluid))),e.fixed&&(e.fixed=S([].concat(e.fixed))),e},d=function(t){var e=t.fluid,r=t.fixed;return(e&&e[0]||r&&r[0]).src},p=Object.create({}),g=function(t){var e=f(t),r=d(e);return p[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,y=m&&window.IntersectionObserver,b=new WeakMap;function v(t){return t.map(function(t){var e=t.src,r=t.srcSet,n=t.srcSetWebp,a=t.media,i=t.sizes;return c.default.createElement(c.default.Fragment,{key:e},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))})}function S(t){var e=[],r=[];return t.forEach(function(t){return(t.media?e:r).push(t)}),[].concat(e,r)}function w(t){return t.map(function(t){var e=t.src,r=t.media,n=t.tracedSVG;return c.default.createElement("source",{key:e,media:r,srcSet:n})})}function E(t){return t.map(function(t){var e=t.src,r=t.media,n=t.base64;return c.default.createElement("source",{key:e,media:r,srcSet:n})})}function O(t,e){var r=t.srcSet,n=t.srcSetWebp,a=t.media,i=t.sizes;return"<source "+(e?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(e?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(t,e){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(t){t.forEach(function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),b.delete(t.target),e())}})},{rootMargin:"200px"})),a);return r&&(r.observe(t),b.set(t,e)),function(){r.unobserve(t),b.delete(t)}},I=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSet?'srcset="'+t.srcSet+'" ':"",a=t.title?'title="'+t.title+'" ':"",i=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",o=t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"",c=t.loading?'loading="'+t.loading+'" ':"",l=t.draggable?'draggable="'+t.draggable+'" ':"";return"<picture>"+t.imageVariants.map(function(t){return(t.srcSetWebp?O(t,!0):"")+O(t)}).join("")+"<img "+c+s+u+r+n+e+i+a+o+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(t){var e=t.src,r=t.imageVariants,n=t.generateSources,a=t.spreadProps,i=c.default.createElement(R,(0,o.default)({src:e},a));return r.length>1?c.default.createElement("picture",null,n(r),i):i},R=c.default.forwardRef(function(t,e){var r=t.sizes,n=t.srcSet,a=t.src,i=t.style,s=t.onLoad,l=t.onError,f=t.loading,d=t.draggable,p=(0,u.default)(t,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:r,srcSet:n,src:a},p,{onLoad:s,onError:l,ref:e,loading:f,draggable:d,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var z=function(t){function e(e){var r;(r=t.call(this,e)||this).seenBefore=m&&g(e),r.isCritical="eager"===e.loading||e.critical,r.addNoScript=!(r.isCritical&&!e.fadeIn),r.useIOSupport=!h&&y&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||m&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&e.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,s.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(t){var e=this;this.useIOSupport&&t&&(this.cleanUpListeners=A(t,function(){var t=g(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:!!e.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=f(t),r=d(e),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=f(this.props),e=t.title,r=t.alt,n=t.className,a=t.style,i=void 0===a?{}:a,s=t.imgStyle,u=void 0===s?{}:s,l=t.placeholderStyle,d=void 0===l?{}:l,p=t.placeholderClassName,g=t.fluid,h=t.fixed,m=t.backgroundColor,y=t.durationFadeIn,b=t.Tag,S=t.itemProp,O=t.loading,A=t.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:z?1:0,transition:j?"opacity "+y+"ms":"none"},u),N="boolean"==typeof m?"lightgray":m,V={transitionDelay:y+"ms"},x=(0,o.default)({opacity:this.state.imgLoaded?0:1},j&&V,{},u,{},d),W={title:e,alt:this.state.isVisible?"":r,style:x,className:p};if(g){var k=g,T=k[0];return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&c.default.createElement(b,{title:e,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&V)}),T.base64&&c.default.createElement(L,{src:T.base64,spreadProps:W,imageVariants:k,generateSources:E}),T.tracedSVG&&c.default.createElement(L,{src:T.tracedSVG,spreadProps:W,imageVariants:k,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(k),c.default.createElement(R,{alt:r,title:e,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:r,title:e,loading:O},T,{imageVariants:k}))}}))}if(h){var P=h,q=P[0],M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete M.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},N&&c.default.createElement(b,{title:e,style:(0,o.default)({backgroundColor:N,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},j&&V)}),q.base64&&c.default.createElement(L,{src:q.base64,spreadProps:W,imageVariants:P,generateSources:E}),q.tracedSVG&&c.default.createElement(L,{src:q.tracedSVG,spreadProps:W,imageVariants:P,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(P),c.default.createElement(R,{alt:r,title:e,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:r,title:e,loading:O},q,{imageVariants:P}))}}))}return null},e}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});z.propTypes={resolutions:j,sizes:C,fixed:l.default.oneOfType([j,l.default.arrayOf(j)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=z;e.default=N},209:function(t,e,r){"use strict";var n=r(1),a=r(19),i=r(104),s="".startsWith;n(n.P+n.F*r(105)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return s?s.call(e,n,r):e.slice(r,r+n.length)===n}})},210:function(t){t.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},211:function(t,e,r){"use strict";r(212)("fixed",function(t){return function(){return t(this,"tt","","")}})},212:function(t,e,r){var n=r(1),a=r(9),i=r(36),s=/"/g,u=function(t,e,r,n){var a=String(i(t)),u="<"+e;return""!==r&&(u+=" "+r+'="'+String(n).replace(s,"&quot;")+'"'),u+">"+a+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(u),n(n.P+n.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}}}]);
//# sourceMappingURL=component---src-pages-index-js-d18df34aa8366b2d62a9.js.map