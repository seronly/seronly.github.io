(this.webpackJsonpbuild=this.webpackJsonpbuild||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),c=o(4),a=o.n(c),s=(o(13),o(5)),l=o(6),u=o(2),i=o(8),h=o(7),b=(o(14),o(0)),d="https://twitter.com/intent/tweet?text=",j=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],f=function(t){Object(i.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).state={quoteText:"",quoteAuthor:"",twitterUrl:d,color:""},n.getQuote(),n.getQuote=n.getQuote.bind(Object(u.a)(n)),n.handleGetQuote=n.handleGetQuote.bind(Object(u.a)(n)),n.changeColor=n.changeColor.bind(Object(u.a)(n)),n}return Object(l.a)(o,[{key:"componentWillMount",value:function(){this.changeColor()}},{key:"getQuote",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){return t.quotes})).then((function(e){var o=Math.floor(Math.random()*e.length);t.setState({quoteText:e[o].quote,quoteAuthor:e[o].author,twitterUrl:d+encodeURIComponent(e[o].quote+" -"+e[o].author)})}))}},{key:"changeColor",value:function(){for(var t=j[Math.floor(Math.random()*j.length)];t===this.state.color;)t=j[Math.floor(Math.random()*j.length)];this.setState({color:t}),document.body.style.backgroundColor=t}},{key:"handleGetQuote",value:function(){this.getQuote(),this.changeColor()}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"quote-box",children:[Object(b.jsx)("div",{className:"quote-text",children:Object(b.jsx)("span",{id:"text",style:{color:this.state.color},children:this.state.quoteText})}),Object(b.jsx)("div",{className:"quote-author",children:Object(b.jsx)("p",{id:"author",style:{color:this.state.color},children:Object(b.jsx)("em",{children:this.state.quoteAuthor})})}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:this.handleGetQuote,class:"button",id:"new-quote",style:{backgroundColor:this.state.color},children:"New quote"}),Object(b.jsx)("a",{class:"button",id:"tweet-quote",href:this.state.twitterUrl,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:this.state.color},children:Object(b.jsx)("i",{class:"fa fa-twitter"})})]})]})}}]),o}(r.a.Component);a.a.render(Object(b.jsxs)(r.a.StrictMode,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)("footer",{children:["by ",Object(b.jsx)("a",{href:"https://github.com/seronly",target:"_blank",rel:"noreferrer noopener",children:"seronly"})]})]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.02b421ab.chunk.js.map