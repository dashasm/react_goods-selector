(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(3),a=c(5),r=c(6),l=c(8),i=c(7),d=c(1),u=c.n(d),h=(c(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=c(0),j=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.getTitle=function(){var t=e.state.selectedGood;return 0===t.length?"No goods selected":1===t.length?"".concat(t[0]," is selected"):"".concat(t.slice(0,t.length-1).join(", ")," and ").concat(t[t.length-1])},e.clearList=function(){e.setState({selectedGood:[]})},e.selectGood=function(t){e.setState((function(e){return{selectedGood:[].concat(Object(s.a)(e.selectedGood),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGood:Object(s.a)(e.selectedGood.filter((function(e){return e!==t})))}}))},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"App",children:[Object(b.jsxs)("header",{className:"App__header",children:[Object(b.jsx)("h1",{className:"App__title",children:this.getTitle()}),t.length?Object(b.jsx)("button",{type:"button",className:"App__clear button is-warning",onClick:this.clearList,children:"Clear"}):null]}),Object(b.jsx)("ul",{children:h.map((function(c){return Object(b.jsxs)("li",{className:t.includes(c)?"Good Good--active":"Good",children:[c,t.includes(c)?Object(b.jsx)("button",{type:"button",className:"Good__remove button is-danger",onClick:function(){return e.removeGood(c)},children:"Remove"}):Object(b.jsx)("button",{type:"button",className:"Good__select button is-success",onClick:function(){return e.selectGood(c)},children:"Select"})]},c)}))})]})}}]),c}(u.a.Component);o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.83dca26b.chunk.js.map