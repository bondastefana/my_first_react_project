(this.webpackJsonpmy_first_react_project=this.webpackJsonpmy_first_react_project||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),i=c(9),s=c.n(i),o=(c(16),c(8)),l=(c(17),c(10)),j=c(24),d=c(25),p=function(e){var t=e.hideOutOfStock,c=e.filterItems;return Object(n.jsx)(l.a,{className:"search-container",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(d.a,{md:4,children:Object(n.jsx)("input",{className:"search-box",type:"text",placeholder:"Search...",onKeyUp:c})}),Object(n.jsxs)(d.a,{md:8,children:[Object(n.jsx)("input",{className:"checkbox",type:"checkbox",name:"stock",onClick:t}),Object(n.jsx)("label",{htmlFor:"stock",children:"Only show products in stock"})]})]})})},b=(c(18),function(e){return Object(n.jsx)(l.a,{className:"table-header",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(d.a,{md:4,children:Object(n.jsx)("span",{className:"table-head",children:"Name"})}),Object(n.jsx)(d.a,{md:8,children:Object(n.jsx)("span",{className:"table-head",children:"Price"})})]})})}),h=(c(19),function(e){var t=e.name,c=e.price,r=e.inStock;return Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.a,{className:"row-container",children:[Object(n.jsx)(d.a,{md:4,children:Object(n.jsx)("span",{style:r?{color:"black"}:{color:"red"},children:t})}),Object(n.jsx)(d.a,{md:8,children:Object(n.jsx)("span",{children:c})})]})})}),u=["Sporting Goods","Electronics"],m=[{name:"Football",price:"$49.99",type:"Sporting Goods",inStock:!0},{name:" Baseball",price:"$9.99",type:"Sporting Goods",inStock:!0},{name:"Basketball",price:"$29.99",type:"Sporting Goods",inStock:!1},{name:"iPod Touch",price:"$99.99",type:"Electronics",inStock:!0},{name:"iPhone 5",price:"$399.99",type:"Electronics",inStock:!1},{name:"Nexus 7",price:"$199.99",type:"Electronics",inStock:!0}],O=(c(20),function(e){var t=e.name,c=e.isClicked,r=e.searchedItem;return Object(n.jsxs)(l.a,{className:"product-container",children:[Object(n.jsx)("h3",{className:"product-name",children:t}),Object(n.jsx)("h5",{children:m.map((function(e,r){var a=e.name,i=e.price,s=e.inStock,o=e.type;return t!==o||!s&&c?null:Object(n.jsx)(h,{name:a,price:i,inStock:s},r)})).filter((function(e){return r?(null===e||void 0===e?void 0:e.props.name.toUpperCase())===r.toUpperCase():e}))})]})}),x=(c(21),c(22),function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),j=s[0],d=s[1];return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(p,{hideOutOfStock:function(e){a(!c)},filterItems:function(e){d(e.target.value)}}),Object(n.jsx)(b,{}),u.map((function(e,t){return Object(n.jsx)(O,{name:e,isClicked:c,searchedItem:j},t)}))]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),f()}],[[23,1,2]]]);
//# sourceMappingURL=main.b4e17650.chunk.js.map