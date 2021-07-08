(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{122:function(e,t,a){"use strict";t.a={BLANK_LINK:"#!"}},148:function(e,t,a){"use strict";t.a={items:[{id:"navigation",title:"Admin Panel",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Dashboard",type:"item",url:"/dashboard",icon:"feather icon-home"},{id:"basic",title:"Users",type:"collapse",icon:"feather icon-users",children:[{id:"userlist",title:"User List",type:"item",url:"/userlist"},{id:"adduser",title:"Add User",type:"item",url:"/adduser"}]},{id:"book",title:"Books",type:"collapse",icon:"feather icon-book",children:[{id:"booklist",title:"Book List",type:"item",url:"/showbook"},{id:"addbook",title:"Add Book",type:"item",url:"/addbook"}]},{id:"orders",title:"Orders",type:"item",url:"/orderlist",classes:"nav-item",icon:"feather icon-shopping-cart"}]}]}},161:function(e,t,a){"use strict";var s=a(41),r=a(42),n=a(44),l=a(43),i=a(45),o=a(0),c=a.n(o),u=a(51),d=a(47),m=a(148),p=a(122),f=a(63),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={main:[],item:[]},a.componentWillReceiveProps=function(){m.a.items.map(function(e,t){return e.type&&"group"===e.type&&a.getCollapse(e),!1})},a.getCollapse=function(e){e.children&&e.children.filter(function(t){return t.type&&"collapse"===t.type?a.getCollapse(t):t.type&&"item"===t.type&&document.location.pathname===d.a.basename+t.url&&a.setState({item:t,main:e}),!1})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.items.map(function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1})}},{key:"render",value:function(){var e,t,a="",s="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:p.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(s=this.state.item.title,t=c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:p.a.BLANK_LINK},s)),!1!==this.state.item.breadcrumbs&&(a=c.a.createElement("div",{className:"page-header"},c.a.createElement("div",{className:"page-block"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"page-header-title"},c.a.createElement("h5",{className:"m-b-10"},s)),c.a.createElement("ul",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(u.b,{to:"/dashboard"},c.a.createElement("i",{className:"feather icon-home"}))),e,t))))))),document.title=s+" | Datta Able Free React + Redux Admin Template",c.a.createElement(f.a,null,a)}}]),t}(o.Component);t.a=h},214:function(e,t,a){},215:function(e,t,a){"use strict";var s=a(119);t.__esModule=!0,t.default=void 0;var r=s(a(120)),n=s(a(125)),l=s(a(121)),i=s(a(117)),o=s(a(0)),c=s(a(144)),u=s(a(216)),d=s(a(217)),m=a(134),p=s(a(218)),f=s(a(228)),h=s(a(142)),v=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).handleClose=function(e){t.props.onClose(!1,e)},t}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.show,s=e.closeLabel,l=e.className,c=e.children,u=e.variant,d=e.dismissible,m=e.transition,p=(e.onClose,(0,n.default)(e,["bsPrefix","show","closeLabel","className","children","variant","dismissible","transition","onClose"])),h=o.default.createElement("div",(0,r.default)({role:"alert"},m?p:void 0,{className:(0,i.default)(l,t,u&&t+"-"+u,d&&t+"-dismissible")}),d&&o.default.createElement(f.default,{onClick:this.handleClose,label:s}),c);return m?o.default.createElement(m,(0,r.default)({unmountOnExit:!0},p,{in:a}),h):a?h:null},t}(o.default.Component);v.defaultProps={show:!0,transition:p.default,closeLabel:"Close alert"};var b=(0,c.default)((0,m.createBootstrapComponent)(v,"alert"),{show:"onClose"}),E=(0,u.default)("h4");b.Link=(0,d.default)("alert-link",{Component:h.default}),b.Heading=(0,d.default)("alert-heading",{Component:E});var N=b;t.default=N,e.exports=t.default},216:function(e,t,a){"use strict";var s=a(119);t.__esModule=!0,t.default=void 0;var r=s(a(120)),n=s(a(0)),l=s(a(117));t.default=function(e){return n.default.forwardRef(function(t,a){return n.default.createElement("div",(0,r.default)({},t,{ref:a,className:(0,l.default)(t.className,e)}))})},e.exports=t.default},217:function(e,t,a){"use strict";var s=a(119);t.__esModule=!0,t.default=function(e,t){var a,s,c=void 0===t?{}:t,m=c.displayName,p=void 0===m?d(e):m,f=c.Component,h=void 0===f?"div":f,v=c.defaultProps;return(0,u.createBootstrapComponent)((s=a=function(e){function t(){return e.apply(this,arguments)||this}(0,l.default)(t,e);var a=t.prototype;return a.render=function(){var e=this.props,t=e.className,a=e.bsPrefix,s=e.as,l=void 0===s?h:s,c=(0,n.default)(e,["className","bsPrefix","as"]);return o.default.createElement(l,(0,r.default)({},v,c,{className:(0,i.default)(t,a)}))},t}(o.default.Component),a.displayName=p,s),e)};var r=s(a(120)),n=s(a(125)),l=s(a(121)),i=s(a(117)),o=s(a(0)),c=s(a(160)),u=a(134),d=function(e){return e[0].toUpperCase()+(0,c.default)(e).slice(1)};e.exports=t.default},218:function(e,t,a){"use strict";var s=a(119),r=a(141);t.__esModule=!0,t.default=void 0;var n,l=s(a(120)),i=s(a(125)),o=s(a(121)),c=s(a(117)),u=s(a(0)),d=r(a(170)),m=s(a(171)),p=s(a(227)),f=((n={})[d.ENTERING]="show",n[d.ENTERED]="show",n),h=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).handleEnter=function(e){(0,p.default)(e),t.props.onEnter&&t.props.onEnter(e)},t}return(0,o.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.children,s=(0,i.default)(e,["className","children"]);return u.default.createElement(d.default,(0,l.default)({addEndListener:m.default},s,{onEnter:this.handleEnter}),function(e,s){return u.default.cloneElement(a,(0,l.default)({},s,{className:(0,c.default)("fade",t,a.props.className,f[e])}))})},t}(u.default.Component);h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var v=h;t.default=v,e.exports=t.default},227:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){e.offsetHeight},e.exports=t.default},228:function(e,t,a){"use strict";var s=a(119);t.__esModule=!0,t.default=void 0;var r=s(a(121)),n=s(a(0)),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.label,a=e.onClick;return n.default.createElement("button",{type:"button",className:"close",onClick:a},n.default.createElement("span",{"aria-hidden":"true"},"\xd7"),n.default.createElement("span",{className:"sr-only"},t))},t}(n.default.Component);l.defaultProps={label:"Close"};var i=l;t.default=i,e.exports=t.default},244:function(e,t,a){"use strict";a.r(t);var s=a(128),r=a.n(s),n=a(129),l=a(41),i=a(42),o=a(44),c=a(43),u=a(45),d=a(0),m=a.n(d),p=a(28),f=(a(214),a(63)),h=a(161),v=a(215),b=a.n(v),E=a(17),N=a(54),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={email:"",password:"",emailError:"",passwordError:"",emailvalid:0,passwordvalid:0,timeout:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"emailCheck",value:function(e){var t=e.target.value;console.log(t),new RegExp("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$").test(t)?this.setState({emailError:"",emailvalid:1}):this.setState({emailError:"please enter valid mail",emailvalid:0}),this.setState({email:t})}},{key:"passwordCheck",value:function(e){var t=e.target.value;new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{6,12}$").test(t)?this.setState({passwordError:"",passwordvalid:1}):this.setState({passwordError:"please enter a valid password",passwordvalid:0}),this.setState({password:t})}},{key:"login",value:function(){var e=Object(n.a)(r.a.mark(function e(){var t=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.onAuthLogin({email:this.state.email,password:this.state.password});case 2:return e.next=4,this.props.onUserLogin({email:this.state.email,password:this.state.password});case 4:console.log(this.props.authenticated),this.props.authenticated?this.props.history.push("/dashboard"):(this.setState({timeout:!0}),setTimeout(function(){t.setState({timeout:!1})},2e3));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=!0;return 1===this.state.emailvalid&&1===this.state.passwordvalid&&(e=!1),m.a.createElement(f.a,null,m.a.createElement(h.a,null),m.a.createElement("div",{className:"auth-wrapper"},m.a.createElement("div",{className:"auth-content"},m.a.createElement("div",{className:"auth-bg"},m.a.createElement("span",{className:"r"}),m.a.createElement("span",{className:"r s"}),m.a.createElement("span",{className:"r s"}),m.a.createElement("span",{className:"r"})),m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body text-center"},m.a.createElement("div",{className:"mb-4"},m.a.createElement("i",{className:"feather icon-unlock auth-icon"})),m.a.createElement("h3",{className:"mb-5"},"Login"),this.props.message&&this.state.timeout&&m.a.createElement(b.a,{variant:"dark",style:{borderRadius:"5px"}},this.props.message),m.a.createElement("div",{className:"input-group mb-1"},m.a.createElement("input",{type:"email",className:"form-control",onChange:this.emailCheck.bind(this),placeholder:"Email"})),m.a.createElement("div",{className:"input-group mb-1"},m.a.createElement("p",{style:{fontSize:"12px"},className:"help-block text-danger"},this.state.emailError)),m.a.createElement("div",{className:"input-group mb-1"},m.a.createElement("input",{type:"password",className:"form-control",onChange:this.passwordCheck.bind(this),placeholder:"password"})),m.a.createElement("div",{className:"input-group mb-3"},m.a.createElement("p",{style:{fontSize:"12px"},className:"help-block text-danger"},this.state.passwordError)),m.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4",onClick:this.login.bind(this),disabled:e},"Login"))))))}}]),t}(m.a.Component);t.default=Object(p.b)(function(e){return{userReducer:e.userReducer.currentUser,authenticated:e.authReducer.authenticated,message:e.userReducer.message}},function(e){return{onUserLogin:function(t){return e(E.o(t))},onAuthLogin:function(t){return e(N.c(t))}}})(y)}}]);
//# sourceMappingURL=11.1881b725.chunk.js.map