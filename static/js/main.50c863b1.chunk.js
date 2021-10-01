(this["webpackJsonp2.3-02-weather-api-frontend"]=this["webpackJsonp2.3-02-weather-api-frontend"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),s=n.n(c),i=(n(11),n(2)),o=n.n(i),l=n(3),u=n(4),d=n(0),h=function(e){var t=e.code,n=e.data;return n?Object(d.jsxs)("div",{className:"DataDisplay mb-3",children:[Object(d.jsx)("h1",{className:"text-5xl mb-3 text-gradient-reverse font-bold",children:t.toUpperCase()||"Enter code:"}),Object(d.jsxs)("p",{children:["Temp: ",Object(d.jsx)("strong",{children:n.temp})]}),Object(d.jsxs)("p",{children:["Feels like: ",Object(d.jsx)("strong",{children:n.feelsLike})]}),Object(d.jsxs)("p",{children:["Description: ",Object(d.jsx)("strong",{children:n.description})]})]}):Object(d.jsxs)("div",{className:"DataDisplay mb-3",children:[Object(d.jsx)("h1",{className:"text-5xl mb-3 text-gradient-reverse font-bold",children:t.toUpperCase()||"Enter code:"}),Object(d.jsxs)("p",{children:["Temp: ",Object(d.jsx)("strong",{children:"N/A"})]}),Object(d.jsxs)("p",{children:["Feels like: ",Object(d.jsx)("strong",{children:"N/A"})]}),Object(d.jsxs)("p",{children:["Description: ",Object(d.jsx)("strong",{children:"N/A"})]})]})},p=function(){return Object(d.jsxs)("svg",{className:"inline-block animate-spin mr-2 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(d.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",className:"opacity-25"}),Object(d.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},j=function(e){var t=e.code,n=e.setCode,r=e.loading,a=r?Object(d.jsxs)("button",{disabled:!0,className:"p-2 text-white bg-teal-600 border rounded-r-lg",children:[Object(d.jsx)(p,{}),"Loading"]}):Object(d.jsx)("button",{type:"submit",className:"p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-r-lg",children:"Get Weather"});return Object(d.jsxs)("div",{className:"CodeInput mb-3",children:[Object(d.jsx)("small",{className:"block mb-2",children:"(For Canadian postal codes, first 3 characters only)"}),Object(d.jsx)("input",{type:"text",placeholder:"ZIP/Postal Code",pattern:"^([A-Za-z]\\d[A-Za-z])|(\\d{5})$",maxLength:"5",className:"p-2 border rounded-l-lg",value:t,disabled:r,onChange:function(e){return n(e.target.value)}}),a]})},b=function(e){var t=e.units,n=e.setUnits;return Object(d.jsxs)("select",{value:t,className:"mb-3 p-2 border rounded-lg mr-auto",onChange:function(e){return n(e.target.value)},children:[Object(d.jsx)("option",{value:"metric",children:"Celsius"}),Object(d.jsx)("option",{value:"imperial",children:"Fahrenheit"}),Object(d.jsx)("option",{value:"standard",children:"Kelvin"})]})},m=function(e){var t=e.label,n=e.name,r=e.checked,a=e.onChange;return Object(d.jsxs)("label",{className:"block mb-1",children:[Object(d.jsx)("input",{type:"radio",className:"mr-1",name:n,checked:r,onChange:a}),t]})},x=function(){var e=Object(l.a)(o.a.mark((function e(t,n,r){var a,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new RegExp(/([a-z]\d[a-z])/i).test(t)?"".concat(t,",ca"):t,"https://api.openweathermap.org/data/2.5/weather",a="?zip=".concat(t,"&units=").concat(n),c="".concat("https://few-weather.herokuapp.com","/weather"),"POST",s={"Content-Type":"application/json"},i=JSON.stringify({urlBase:"https://api.openweathermap.org/data/2.5/weather",urlQuery:a}),e.next=9,fetch(c,{method:"POST",headers:s,body:i}).then((function(e){return e.json()})).then((function(e){"2"!==e.cod.toString()[0]?r(null):r({temp:e.main.temp,feelsLike:e.main.feels_like,description:e.weather[0].description})})).catch((function(){return alert("Error! Something went wrong.")}));case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r,a,c,s,i,l,u,d,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})),e.next=3,r.catch((function(){return alert("Error! Try checking your location permissions.")}));case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return",n(null));case 6:return c=a.coords,s=c.latitude,i=c.longitude,"https://api.openweathermap.org/data/2.5/weather",l="?lat=".concat(s,"&lon=").concat(i,"&units=").concat(t),u="".concat("https://few-weather.herokuapp.com","/weather"),"POST",d={"Content-Type":"application/json"},h=JSON.stringify({urlBase:"https://api.openweathermap.org/data/2.5/weather",urlQuery:l}),e.next=15,fetch(u,{method:"POST",headers:d,body:h}).then((function(e){return e.json()})).then((function(e){"2"!==e.cod.toString()[0]?n(null):n({temp:e.main.temp,feelsLike:e.main.feels_like,description:e.weather[0].description})})).catch((function(){return alert("Error! Something went wrong.")}));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("metric"),s=Object(u.a)(c,2),i=s[0],O=s[1],g=Object(r.useState)(null),w=Object(u.a)(g,2),v=w[0],y=w[1],N=Object(r.useState)(!1),k=Object(u.a)(N,2),C=k[0],S=k[1],A=Object(r.useState)(!1),T=Object(u.a)(A,2),D=T[0],P=T[1];return Object(d.jsxs)("div",{className:"Weather text-gray-700 sm:text-lg max-w-md mx-auto space-y-4 divide-y-2",children:[Object(d.jsxs)("form",{onSubmit:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),S(!0),e.next=4,x(n,i,y);case 4:S(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(d.jsx)(h,{code:n,units:i,data:v}),Object(d.jsx)(j,{code:n,setCode:a,loading:C}),Object(d.jsx)(b,{units:i,setUnits:O}),["metric","imperial","standard"].map((function(e){return Object(d.jsx)(m,{name:"units",checked:i===e,onChange:function(){return O(e)},label:"".concat(e[0].toUpperCase()).concat(e.slice(1))},"key-".concat(e))}))]}),Object(d.jsx)("form",{className:"flex flex-col items-center",onSubmit:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),P(!0),e.next=4,f(i,y);case 4:P(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:D?Object(d.jsxs)("button",{disabled:!0,className:"mt-4 p-2 text-white bg-teal-600 border rounded-lg",children:[Object(d.jsx)(p,{}),"Loading"]}):Object(d.jsx)("button",{type:"submit",className:"mt-4 p-2 text-white bg-teal-500 hover:bg-teal-600 border rounded-lg",children:"Use Current Location"})})]})},g=function(){return Object(d.jsx)("footer",{className:"Footer mt-auto bg-gradient-reverse",children:Object(d.jsx)("a",{href:"https://github.com/shah-a/few2.3-02-weather-api",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-github-alt fa-3x p-10 text-teal-900 hover:text-teal-700"})})})},w=function(){return Object(d.jsxs)("div",{className:"App min-h-screen flex flex-col bg-gray-100",children:[Object(d.jsx)("div",{className:"my-auto sm:mx-auto",children:Object(d.jsxs)("div",{className:"relative py-3 sm:max-w-2xl sm:mx-auto",children:[Object(d.jsx)("div",{className:"absolute inset-x-0 inset-y-10 sm:inset-10 bg-gradient shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),Object(d.jsx)("div",{className:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 my-10 sm:m-10",children:Object(d.jsx)(O,{})})]})}),Object(d.jsx)(g,{})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.50c863b1.chunk.js.map