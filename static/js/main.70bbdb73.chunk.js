(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{23:function(t,e,n){t.exports=n(34)},28:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(20),i=n.n(c),l=(n(28),n(5)),r=n(6),u=n(8),s=n(7),h=n(9),m=n(15),b=n(10),k=n(12),f=function(t){return a.a.createElement("button",{onClick:t.cta},"CTA Library")},g=function(t){return a.a.createElement("button",{onClick:t.links},"Linking")},O=function(t){return a.a.createElement("button",{onClick:t.mi},"Movable Ink")},j=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={links:!1,mi:!1,cta:!1},n.gotoCTA=n.gotoCTA.bind(Object(k.a)(n)),n.gotoLinks=n.gotoCTA.bind(Object(k.a)(n)),n.gotoMI=n.gotoCTA.bind(Object(k.a)(n)),n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"gotoCTA",value:function(){console.log("hit the CTA function"),this.setState({cta:!0}),console.log(this.state.cta)}},{key:"gotoLinks",value:function(){console.log("hit the links function"),this.setState({links:!0}),console.log(this.state.links),window.location="/links"}},{key:"gotoMI",value:function(){console.log("hit the mi function"),this.setState({mi:!0}),console.log(this.state.mi)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Welcome to DebTools"),a.a.createElement(f,{cta:this.gotoCTA}),a.a.createElement(g,{links:this.gotoLinks}),a.a.createElement(O,{mi:this.gotoMI}))}}]),e}(o.Component),d=function(t){return a.a.createElement("div",null,a.a.createElement("div",null,t.children))},E=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement(d,null,a.a.createElement("h1",null,"Welcome to the links page!"))}}]),e}(o.Component),p=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement(b.c,null,a.a.createElement(b.a,{exact:!0,path:"/",component:j}),a.a.createElement(b.a,{exact:!0,path:"/links",component:E}))}}]),e}(o.Component),v=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).ONRouting=function(){return a.a.createElement(m.a,{basename:"/hello-react"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(b.c,null,a.a.createElement(b.a,{path:"*",component:p})))))},n.state={home:!0,links:!1,MI:!1,CTAs:!1},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){switch(this.state.home){case!0:default:return this.ONRouting()}}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.70bbdb73.chunk.js.map