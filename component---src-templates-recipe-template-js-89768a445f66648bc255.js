(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return o});var n=a(0),r=a.n(n),i=a(146),c=a(154),l=a(148),s=a.n(l);function u(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html,l=t.fields;return console.log(l),r.a.createElement(c.a,null,r.a.createElement(s.a,{title:a.title}),r.a.createElement("div",{className:"recipe-container"},r.a.createElement("div",{className:"recipe"},r.a.createElement("h1",null,a.title),r.a.createElement("div",{className:"recipe-meta"},a.source&&r.a.createElement("a",{target:"_blank",href:a.source,rel:"noopener noreferrer"},"Website"),a.serves&&r.a.createElement("span",null," | Serves: ",a.serves)),l.relatedRecipes&&l.relatedRecipes.map(function(e){return r.a.createElement("div",{className:"recipe-meta",key:e.slug},"Related recipe: ",r.a.createElement(i.a,{to:e.slug},e.title))}),r.a.createElement("div",{className:"recipe-content",dangerouslySetInnerHTML:{__html:n}}))))}var o="4264854194"},146:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(147);var u=r.a.createContext({}),o=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(55),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Recipes"}}}}},154:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(146),u=a(148),o=a.n(u),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1300,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(156),a(157),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{titleTemplate:"%s | "+e.site.siteMetadata.title}),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1300,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-templates-recipe-template-js-89768a445f66648bc255.js.map