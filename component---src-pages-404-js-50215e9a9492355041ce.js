(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),u=a(148),c=a.n(u);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(147);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(55),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=o},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Recipes"}}}}},154:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),u=a(4),c=a.n(u),l=a(146),o=a(148),s=a.n(o),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(156),a(157),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{titleTemplate:"%s | "+e.site.siteMetadata.title}),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-50215e9a9492355041ce.js.map