(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{17:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"i",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"g",function(){return d}),n.d(t,"h",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"n",function(){return p}),n.d(t,"m",function(){return g}),n.d(t,"p",function(){return m}),n.d(t,"l",function(){return b}),n.d(t,"k",function(){return y}),n.d(t,"o",function(){return O}),n.d(t,"j",function(){return v});var o=n(3),a=n(7),r="FETCH_USERS",c="UPDATE_USER",s="LOGIN_USER",u="ADD_USER",i="ERROR_USER",l="FILTER_USER",d="RESET_USER",f="SET_FILTER_ROLE",h="RESET_MESSAGE",p=function(e){return console.log("*************"+e+"************"),e.includes("&isAdmin=none")&&(e=e.replace("&isAdmin=none","")),function(t){fetch("http://localhost:8080/api/v1/users/?sort=name&"+e,{headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(e){console.log(e),t({type:l,payload:e})})}},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return console.log("***************"+e),function(n){fetch("http://localhost:8080/api/v1/users?sort=name&"+e,{headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(e){console.log(e.total);var a=Object(o.a)({},e,{message:t});n({type:r,payload:a})})}},m=function(e,t){return function(n){fetch("http://localhost:8080/api/v1/users/"+e,{method:"PUT",headers:Object(a.a)(),body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log("*************"+e.success),!0===e.success?n({type:c,payload:e}):(console.log("*************"+e.success),n({type:i,payload:e}))})}},b=function(e,t){return function(n){fetch("http://localhost:8080/api/v1/users/"+e,{method:"DELETE",headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(e){console.log(e),n(g(t,e.message))})}},y=function(e,t,n){return function(o){fetch("http://localhost:8080/api/v1/users/block/"+e+"&"+!t,{method:"PATCH",headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(e){o(g(n,e.message))})}},O=function(e){return function(t){return fetch("http://localhost:8080/api/v1/users/login",{headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.success?(console.log("token"+e.token),localStorage.setItem("token",e.token),t({type:s,payload:e})):t({type:i,payload:e})})}},v=function(e){return function(t){fetch("http://localhost:8080/api/v1/users/",{method:"POST",headers:Object(a.a)(),body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){console.log(e),e.success?t(function(e){return{type:u,payload:e}}(e)):t({type:i,payload:e})})}}},18:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"i",function(){return u}),n.d(t,"e",function(){return i}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return d}),n.d(t,"h",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"j",function(){return p}),n.d(t,"n",function(){return g}),n.d(t,"k",function(){return m}),n.d(t,"p",function(){return b}),n.d(t,"o",function(){return y}),n.d(t,"l",function(){return O}),n.d(t,"m",function(){return v});var o=n(3),a=n(7),r="ADD_BOOK",c="ERROR_BOOK",s="FETCH_BOOKS",u="UPDATE_BOOK",i="FETCH_BOOKS_BY_TITLE",l="FILTER_BOOK",d="FETCH_BOOK_COUNT",f="RESET_MESSAGE",h="FETCH_AVAILABLE_COUNT",p=function(e){return function(t){fetch("http://localhost:8080/api/v1/book/",{method:"POST",headers:Object(a.a)(),body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){console.log(e),e.success?t(function(e){return{type:r,payload:e}}(e)):t({type:c,payload:e})})}},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return console.log("***************"+e),function(n){fetch("http://localhost:8080/api/v1/book?sort=title&"+e,{headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(e){console.log(e.total);var a=Object(o.a)({},e,{message:t});n({type:s,payload:a})})}},m=function(e,t){return function(n){fetch("http://localhost:8080/api/v1/book/"+e,{method:"DELETE",headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(e){console.log(e),n(g(t,e.message))})}},b=function(e,t){return function(n){fetch("http://localhost:8080/api/v1/book/"+e,{method:"PUT",headers:Object(a.a)(),body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log("*************"+e.success),!0===e.success?n({type:u,payload:e}):(console.log("*************"+e.success),n({type:c,payload:e}))})}},y=function(e,t,n){console.log("***************"+e,t,n);var o="title[regex]="+e+"&page="+t+"&limit="+n;return console.log("*************"+o+"************"),function(e){fetch("http://localhost:8080/api/v1/book/?sort=title&"+o,{headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(t){console.log(t),e({type:l,payload:t})})}},O=function(){return function(e){fetch("http://localhost:8080/api/v1/book/chart/piechart",{headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(t){console.log("********FETCH_BOOK_COUNT******"),console.log(t.data),e({type:d,payload:t.data})})}},v=function(){return function(e){fetch("http://localhost:8080/api/v1/book/chart/barchart",{headers:Object(a.a)()}).then(function(e){return e.json()}).then(function(t){console.log(t),e({type:h,payload:t.data})})}}},22:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return i}),n.d(t,"h",function(){return l});var o="COLLAPSE_MENU",a="COLLAPSE_TOGGLE",r="FULL_SCREEN",c="FULL_SCREEN_EXIT",s="CHANGE_LAYOUT",u="NAV_CONTENT_LEAVE",i="NAV_COLLAPSE_LEAVE",l="SEARCH"},24:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"f",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return i}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"g",function(){return h});var o=n(7),a="FETCH_ORDERS",r="UPDATE_ORDERS",c="ERROR_ORDERS",s="RESET_ORDERS",u="FETCH_STATUS_COUNT",i="RESET_MESSAGE",l="http://localhost:8080/api/v1/orders/",d=function(e){return console.log("*******ORDER********"+e),function(t){fetch(l+"?sort=-orderDate&"+e,{headers:Object(o.a)()}).then(function(e){return e.json()}).then(function(e){console.log(e),console.log(e.total),t({type:a,payload:e})})}},f=function(e,t){return function(n){fetch(l+e,{method:"PATCH",headers:Object(o.a)(),body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log("*************"+e.success),!0===e.success?n({type:r,payload:e}):(console.log("*************"+e.success),n({type:c,payload:e.message}))})}},h=function(){return function(e){fetch(l+"piecount",{headers:Object(o.a)()}).then(function(e){return e.json()}).then(function(t){console.log("********FETCH_STATUS_COUNT******"),console.log(t.data),e({type:u,payload:t.data})})}}},47:function(e,t,n){"use strict";t.a={defaultPath:"/login",basename:"",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},54:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r});var o="USER_LOGIN",a="RESET_AUTH",r=function(e){return console.log("In fech workout action *******************************"),function(t){return fetch("http://localhost:8080/api/v1/users/login",{headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){var n;console.log(e),e.success&&(console.log("In auth servicee ......"),localStorage.setItem("token",e.token),t((n=e.success,console.log("In auth action: ",n),n||(console.log("Removing token ****************** "),localStorage.removeItem("token")),{type:o,payload:n})))})}}},55:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(){return a.a.createElement("div",{className:"loader-bg"},a.a.createElement("div",{className:"loader-track"},a.a.createElement("div",{className:"loader-fill"})))}},63:function(e,t,n){"use strict";t.a=function(e){return e.children}},64:function(e,t,n){"use strict";var o=n(36),a=n(0),r=n.n(a),c=n(93),s=n(92),u=n(90),i=n(28),l=n(17),d=n(24),f=n(18);function h(e){return r.a.createElement(s.a,Object.assign({elevation:6,variant:"filled"},e))}var p=Object(u.a)(function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}});t.a=Object(i.b)(function(e){return console.log("from notification",e.orderReducer.message),{message1:e.userReducer.message,message2:e.orderReducer.message,message3:e.bookReducer.message}},function(e){return{userResetmessage:function(t){return e({type:l.f,payload:t})},orderResetmessage:function(t){return e({type:d.d,payload:t})},bookResetmessage:function(t){return e({type:f.h,payload:t})}}})(function(e){var t=p(),n=r.a.useState(e.open),s=Object(o.a)(n,2),u=s[0],i=s[1],l=r.a.useState(e.variant),d=Object(o.a)(l,2),f=d[0],g=(d[1],r.a.useState("")),m=Object(o.a)(g,2),b=m[0],y=m[1],O=r.a.useState({vertical:"top",horizontal:"center"}),v=Object(o.a)(O,2),j=v[0],E=(v[1],j.vertical),S=j.horizontal,T=function(e,t){"clickaway"!==t&&i(!1)};return Object(a.useEffect)(function(){var t=e.message1||e.message2||e.message3;console.log("mes",t),console.log("selected message is ",e.message1||e.message2||e.message3),y(t),i(!0),setTimeout(function(){e.userResetmessage(""),e.orderResetmessage(""),e.bookResetmessage(""),y("")},2e3)},[e.message1,e.message2,e.message3]),r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{open:u,autoHideDuration:6e3,onClose:T,anchorOrigin:{vertical:E,horizontal:S}},r.a.createElement(h,{onClose:T,severity:f},b)))})},7:function(e,t,n){"use strict";t.a=function(){var e=localStorage.getItem("token");return e?{Authorization:"Bearer "+e,"content-type":"application/json"}:{"content-type":"application/json"}}},78:function(e,t,n){e.exports=n(89)},89:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),c=n.n(r),s=n(28),u=n(51),i=n(41),l=n(42),d=n(44),f=n(43),h=n(45),p=n(6),g=n(71),m=n.n(g),b=(n(87),n(55)),y=n(63),O=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(a.a.Component),v=Object(p.i)(O),j=[{path:"/login",exact:!0,name:"Signin 1",component:a.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,244))})}],E=n(64),S=m()({loader:function(){return Promise.all([n.e(0),n.e(6),n.e(7)]).then(n.bind(null,246))},loading:b.a}),T=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=j.map(function(e,t){return e.component?a.a.createElement(p.b,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return a.a.createElement(e.component,t)}}):null});return a.a.createElement(y.a,null,this.props.message1.length>0||this.props.message2.length>0||this.props.message3.length>0?a.a.createElement(E.a,{variant:"info"}):null,a.a.createElement(v,null,a.a.createElement(o.Suspense,{fallback:a.a.createElement(b.a,null)},a.a.createElement(p.d,null,e,a.a.createElement(p.b,{path:"/",component:S})))))}}]),t}(o.Component),R=Object(s.b)(function(e){return{message1:e.userReducer.message,message2:e.orderReducer.message,message3:e.bookReducer.message}},null)(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k,_=n(52),C=n(3),A=n(22),L=n(47),w=Object(C.a)({isOpen:[],isTrigger:[]},L.a,{isFullScreen:!1,searchword:""}),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=[],o=[];switch(t.type){case A.h:return Object(C.a)({},e,{searchword:t.payload});case A.b:return Object(C.a)({},e,{collapseMenu:!e.collapseMenu});case A.c:if("sub"===t.menu.type){o=e.isOpen;var a=(n=e.isTrigger).indexOf(t.menu.id);a>-1&&(o=o.filter(function(e){return e!==t.menu.id}),n=n.filter(function(e){return e!==t.menu.id})),-1===a&&(o=[].concat(Object(_.a)(o),[t.menu.id]),n=[].concat(Object(_.a)(n),[t.menu.id]))}else{o=e.isOpen;var r=e.isTrigger.indexOf(t.menu.id);n=-1===r?[t.menu.id]:[],o=-1===r?[t.menu.id]:[]}return Object(C.a)({},e,{isOpen:o,isTrigger:n});case A.g:return Object(C.a)({},e,{isOpen:o,isTrigger:n});case A.f:return"sub"===t.menu.type?(o=e.isOpen,(n=e.isTrigger).indexOf(t.menu.id)>-1&&(o=o.filter(function(e){return e!==t.menu.id}),n=n.filter(function(e){return e!==t.menu.id})),Object(C.a)({},e,{isOpen:o,isTrigger:n})):Object(C.a)({},e);case A.d:return Object(C.a)({},e,{isFullScreen:!e.isFullScreen});case A.e:return Object(C.a)({},e,{isFullScreen:!1});case A.a:return Object(C.a)({},e,{layout:t.layout});default:return e}},N=n(33),B=n(17),F={users:[{email:"",password:"",name:"",photo:"",phone:"",addresses:[]}],currentUser:"",totaluser:"",message:"",rolewisefilter:"none"},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case B.c:return Object(C.a)({},e,{message:t.payload.message,users:t.payload.data,totaluser:t.payload.total});case B.i:return Object(C.a)({},e,{users:t.payload.data,message:t.payload.message});case B.e:return Object(C.a)({},e,{currentUser:t.payload.userid,message:t.payload.message});case B.b:case B.a:return Object(C.a)({},e,{message:t.payload.message});case B.d:return Object(C.a)({},e,{users:t.payload.data,totaluser:t.payload.total});case B.h:return Object(C.a)({},e,{rolewisefilter:t.payload});case B.f:return Object(C.a)({},e,{message:t.payload});case B.g:return F;default:return e}},I=n(54),P={authenticated:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case I.b:return{authenticated:t.payload};case I.a:return P;default:return e}},x=n(24),J={orders:[],orderStatusCount:[{New:0},{Packed:0},{Shipped:0},{Completed:0},{Cancelled:0},{Delayed:0}],totalorders:"",message:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case x.b:return Object(C.a)({},e,{orders:t.payload.data,totalorders:t.payload.total});case x.f:case x.a:return Object(C.a)({},e,{message:t.payload.message});case x.c:return Object(C.a)({},e,{orderStatusCount:t.payload});case x.d:return Object(C.a)({},e,{message:t.payload});case x.e:return J;default:return e}},K=n(30),M=n(18),z={books:[(k={title:"",authors:"",isbn:"",price:"",discount:"",publishDate:"",category:""},Object(K.a)(k,"price",""),Object(K.a)(k,"available",""),Object(K.a)(k,"image",""),k)],BookCountPie:[{horror:0},{comedy:0},{adventure:0},{fiction:0},{ancient:0},{sciencefiction:0},{thriller:0},{spritual:0},{classic:0}],totalbook:"",message:"",BookCountchart:[{_id:"thriller",count:0,color:"#3ebfea"},{_id:"spritual",count:0,color:"#04a9f5"},{_id:"sciencefiction",count:0,color:"#ff8a65"},{_id:"horror",count:0,color:"#1de9b6"},{_id:"fiction",count:0,color:"#4C5667"},{_id:"comedy",count:0,color:"#69CEC6"},{_id:"classic",count:0,color:"#a389d4"},{_id:"ancient",count:0,color:"#FE8A7D"},{_id:"adeventure",count:0,color:"#3ebfea"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case M.d:return Object(C.a)({},e,{message:t.payload.message,books:t.payload.data,totalbook:t.payload.total});case M.b:case M.a:return Object(C.a)({},e,{message:t.payload.message});case M.i:return Object(C.a)({},e,{books:t.payload.data,message:t.payload.message});case M.e:return Object(C.a)({},e,{message:t.payload.message,books:t.payload.data,totalbook:t.payload.total});case M.f:return Object(C.a)({},e,{BookCountPie:t.payload});case M.c:return Object(C.a)({},e,{BookCountchart:t.payload});case M.g:return Object(C.a)({},e,{books:t.payload.data,totalbook:t.payload.total});case M.h:return Object(C.a)({},e,{message:t.payload});default:return e}},W=n(72),Y=Object(N.a)(function(e){return function(t){return function(n){console.log("dispatching",n);var o=t(n);return console.log("next state",e.getState()),o}}},W.a),X=Object(N.d)(Object(N.c)({userReducer:D,authReducer:H,orderReducer:G,reducer:U,bookReducer:V}),Y);window.store=X;var $=a.a.createElement(s.a,{store:X},a.a.createElement(u.a,{basename:L.a.basename},a.a.createElement(R,null)));c.a.render($,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[78,4,5]]]);
//# sourceMappingURL=main.0ae85a12.chunk.js.map