"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,a,i=n(439),c=n(39),o=n(689),u=n(791),s=n(168),f=n(444),d=f.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: LightSkyBlue;\n  margin: 20px 0px 30px;\n  flex-direction: column;\n  align-items: center;\n"]))),p=f.ZP.ul(a||(a=(0,s.Z)(["\n  list-style-type: none;\n  text-decoration: none;\n  margin-left: 0;\n  margin-top: 0px;\n  padding-left: 10px;\n"]))),l=n(184),h=function(){var t=(0,o.UO)("movieId").movieId,e=(0,u.useState)([]),n=(0,i.Z)(e,2),r=n[0],a=n[1];return(0,u.useEffect)((function(){(0,c.tx)(t).then(a)}),[t]),(0,l.jsx)(d,{children:r.length>0?(0,l.jsx)(p,{children:r.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:n}),(0,l.jsx)("p",{children:r})]},e)}))}):(0,l.jsx)("p",{children:"We don`t have any reviews for this movie"})})}},39:function(t,e,n){n.d(e,{Df:function(){return f},IR:function(){return d},TP:function(){return p},tx:function(){return h},zv:function(){return l}});var r=n(861),a=n(757),i=n.n(a),c=n(294),o=n(686);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"3146fac2a7dcce2e95e0f76d4221aa50",include_adult:!1};var u="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",s="https://image.tmdb.org/t/p/w500",f=function(){var t=(0,r.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.Z.get("/trending/all/day").then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:"".concat(s).concat(r)}}))})).catch((function(t){o.Notify.failure(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.Z.get("/search/movie?query=".concat(e)).then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:r?"".concat(s).concat(r):u}}))})).catch((function(t){o.Notify.failure(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){return c.Z.get("/movie/".concat(t,"?")).then((function(t){var e=t.data,n=e.id,r=e.poster_path,a=e.title,i=e.release_date,c=e.vote_average,o=e.overview,f=e.genres;return{id:n,poster:r?"".concat(s).concat(r):u,title:a,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*c),overview:o,genres:f}})).catch((function(t){o.Notify.failure(t.message)}))},l=function(t){return c.Z.get("/movie/".concat(t,"/credits")).then((function(t){return t.data.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return{id:e,name:n,character:r,photo:a?"".concat(s).concat(a):u}}))})).catch((function(t){o.Notify.failure(t.message)}))},h=function(t){return c.Z.get("/movie/".concat(t,"/reviews")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){o.Notify.failure(t.message)}))}}}]);
//# sourceMappingURL=779.ef24f893.chunk.js.map