(this["webpackJsonpcovid-tracker-2021"]=this["webpackJsonpcovid-tracker-2021"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(72),c=a.n(r),o=a(6),s=a.n(o),i=a(11),u=a(73),d=a(19),l=a(81),j=a(80),f=a(46),p=a.n(f),h=a(33),b=a.n(h),v="https://covid19.mathdro.id/api",x=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v,t&&(a="".concat(v,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(v,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(v,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=a(226),g=a(230),_=a(227),C=a(228),w=a(14),k=a.n(w),D=a(34),S=a.n(D),N=a(35),I=a.n(N),B=a(2),A=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(B.jsx)("div",{className:k.a.container,children:Object(B.jsxs)(y.a,{container:!0,spacing:3,justify:"center",children:[Object(B.jsx)(y.a,{item:!0,component:g.a,xs:12,md:3,className:I()(k.a.card,k.a.infected),children:Object(B.jsxs)(_.a,{children:[Object(B.jsx)(C.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(B.jsx)(C.a,{variant:"h5",children:Object(B.jsx)(S.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(B.jsx)(C.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(B.jsx)(C.a,{variant:"body2",children:"Number of active cases of covid-19"})]})}),Object(B.jsx)(y.a,{item:!0,component:g.a,xs:12,md:3,className:I()(k.a.card,k.a.recovered),children:Object(B.jsxs)(_.a,{children:[Object(B.jsx)(C.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(B.jsx)(C.a,{variant:"h5",children:Object(B.jsx)(S.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(B.jsx)(C.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(B.jsx)(C.a,{variant:"body2",children:"Number of recoveries from covid-19"})]})}),Object(B.jsx)(y.a,{item:!0,component:g.a,xs:12,md:3,className:I()(k.a.card,k.a.deaths),children:Object(B.jsxs)(_.a,{children:[Object(B.jsx)(C.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(B.jsx)(C.a,{variant:"h5",children:Object(B.jsx)(S.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(B.jsx)(C.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(B.jsx)(C.a,{variant:"body2",children:"Number of death caused by covid-19"})]})})]})}):"Loading......"},E=a(18),U=a(47),G=a(78),M=a.n(G),P=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=e.country,u=Object(n.useState)([]),d=Object(E.a)(u,2),l=d[0],j=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,m();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=l.length?Object(B.jsx)(U.Line,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;console.log(a,r,c);var p=a?Object(B.jsx)(U.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0, 255, 21, 0.5)","rgba(240, 20, 5, 0.5)"],data:[a.value,r.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(B.jsx)("div",{className:M.a.container,children:o?p:f})},z=a(231),J=a(229),L=a(79),Q=a.n(L),R=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(E.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(B.jsx)(z.a,{className:Q.a.formControl,children:Object(B.jsxs)(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(B.jsx)("option",{value:"",children:"Global "}),c.map((function(e,t){return Object(B.jsx)("option",{value:e,children:e},t)}))]})})},V=a.p+"static/media/image.9e5d4fc7.png",q=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(B.jsxs)("div",{className:p.a.container,children:[Object(B.jsx)("image",{src:V,className:p.a.image,alt:"COVID IMAGE"}),Object(B.jsx)(A,{data:t}),Object(B.jsx)(R,{handleCountryChange:this.handleCountryChange}),Object(B.jsx)(P,{data:t,country:a})]})}}]),a}(n.Component);c.a.render(Object(B.jsx)(q,{}),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},78:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}}},[[208,1,2]]]);
//# sourceMappingURL=main.5c442234.chunk.js.map