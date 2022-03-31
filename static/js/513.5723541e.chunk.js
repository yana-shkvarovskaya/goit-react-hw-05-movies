"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[513],{9075:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(184);function s(e){var r=e.text;return(0,n.jsx)("h1",{className:"title",children:r})}},1207:function(e,r,t){var n=t(5861),s=t(7757),a=t.n(s),c=t(4569),i=t.n(c);function u(){return(u=(0,n.Z)(a().mark((function e(){var r,t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"trending/movie/week"},e.next=4,i()(r);case 4:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(a().mark((function e(r){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"search/movie",params:{query:r}},e.next=4,i()(t);case 4:return n=e.sent,s=n.data,e.abrupt("return",s.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(r){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r)},e.next=4,i()(t,r);case 4:return n=e.sent,s=n.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function e(r){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/credits")},e.next=4,i()(t,r);case 4:return n=e.sent,s=n.data,e.abrupt("return",s.cast);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(r){var t,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/reviews")},e.next=4,i()(t,r);case 4:return n=e.sent,s=n.data,e.abrupt("return",s.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/",i().defaults.params={api_key:"8f2143e87d675d4e916d007dbc4e3721",language:"en-US"};var v={fetchApiMovieTrending:function(){return u.apply(this,arguments)},fetchApiMoviesByQuery:function(e){return o.apply(this,arguments)},fetchApiMovieDetails:function(e){return l.apply(this,arguments)},fetchApiMovieCast:function(e){return p.apply(this,arguments)},fetchApiMovieReviews:function(e){return h.apply(this,arguments)}};r.Z=v},513:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(8152),s=t(6871),a=t(3504),c=t(2791),i=t(5667),u=t(9075),o=t(1207),l=t(184),p=(0,c.lazy)((function(){return t.e(287).then(t.bind(t,1287))})),h=(0,c.lazy)((function(){return t.e(744).then(t.bind(t,744))}));function v(){var e=(0,s.UO)().movieId,r=(0,c.useState)(null),t=(0,n.Z)(r,2),v=t[0],f=t[1],d=(0,c.useState)(!1),m=(0,n.Z)(d,2),x=m[0],w=m[1],j=(0,c.useState)(!1),g=(0,n.Z)(j,2),k=g[0],y=g[1],b=(0,s.s0)();(0,c.useEffect)((function(){o.Z.fetchApiMovieDetails(e).then(f),i.NY.scrollMore(100)}),[e]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{text:"Movie Details"}),v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:"wrapperImg",src:"".concat("https://image.tmdb.org/t/p/w500").concat(v.poster_path),alt:v.title})}),(0,l.jsxs)("div",{className:"wrapperText",children:[(0,l.jsxs)("h3",{children:[v.title,"(",v.release_date.split("-")[0],")"]}),(0,l.jsxs)("p",{children:["User Score: ",10*v.vote_average,"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:v.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:v.genres.map((function(e){return e.name})).join(" , ")}),(0,l.jsx)("button",{className:"wrapperButton",onClick:function(e){e.preventDefault(),b("/")},children:"Go Back"})]})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{className:"additionalInformation",children:[(0,l.jsx)("li",{className:"nav",children:(0,l.jsx)(a.OL,{to:{pathname:"/movies/".concat(e,"/cast")},onClick:function(){k&&y(!1),w(!0)},className:function(e){return e.isActive?"active":"inactive"},children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.OL,{to:{pathname:"/movies/".concat(e,"/reviews")},onClick:function(){x&&w(!1),y(!0)},className:function(e){return e.isActive?"active":"inactive"},children:"Reviews"})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(c.Suspense,{fallback:(0,l.jsx)("h2",{children:"Loading..."}),children:(0,l.jsxs)(s.Z5,{children:[(0,l.jsx)(s.AW,{path:"/cast",element:(0,l.jsx)(p,{id:e})}),(0,l.jsx)(s.AW,{path:"/reviews",element:(0,l.jsx)(h,{id:e})})]})})]})]})}}}]);
//# sourceMappingURL=513.5723541e.chunk.js.map