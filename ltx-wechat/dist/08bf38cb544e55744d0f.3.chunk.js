webpackJsonp([3],{108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var a=e,o=t,l=n;r=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,o);if(void 0!==u){if("value"in u)return u.value;var i=u.get;if(void 0===i)return;return i.call(l)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=l,r=!0,u=c=void 0}},i=n(4),c=r(i),s=function(e){function t(){a(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"tip",style:this.props.style},this.props.children)}}]),t}(c["default"].Component);t["default"]=s,e.exports=t["default"]},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var a=e,o=t,l=n;r=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,o);if(void 0!==u){if("value"in u)return u.value;var i=u.get;if(void 0===i)return;return i.call(l)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=l,r=!0,u=c=void 0}},i=n(4),c=r(i),s=n(30),f=n(38),d=r(f),p=n(82),h=r(p),m=n(108),y=r(m),b=function(e){function t(e){a(this,n),u(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e),this.query={source:1,type:1},this.state={error:!1,errorContent:"",isSuccess:!1}}o(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"entrust"},c["default"].createElement("label",{className:"two"},"城市"),c["default"].createElement("select",{name:"cityId",onChange:this._handleChange.bind(this)},c["default"].createElement("option",{value:""},"请选择"),c["default"].createElement("option",{value:"802"},"上海"),c["default"].createElement("option",{value:"867"},"苏州")),c["default"].createElement("label",{className:"two"},"面积"),c["default"].createElement("input",{name:"area",onChange:this._handleChange.bind(this)}),c["default"].createElement("label",{className:"two"},"租金"),c["default"].createElement("input",{name:"rent",onChange:this._handleChange.bind(this)}),c["default"].createElement("label",null,"需求描述"),c["default"].createElement("textarea",{onChange:this._handleChange.bind(this),name:"des",placeholder:"如：陆家嘴，带装修，进地铁"}),c["default"].createElement("label",{className:"two"},"称呼"),c["default"].createElement("input",{name:"name",onChange:this._handleChange.bind(this)}),c["default"].createElement("label",null,"手机/座机"),c["default"].createElement("input",{name:"tel",onChange:this._handleChange.bind(this)}),c["default"].createElement("div",{className:"error"},this.state.error?c["default"].createElement("span",null,this.state.errorContent):""),c["default"].createElement(d["default"],{component:"div",className:"button",onTap:this._handleCommit.bind(this)},"提交需求"),c["default"].createElement(y["default"],{style:{display:this.state.isSuccess?"block":"none"}},"委托成功"))}},{key:"_handleChange",value:function(e){this.query[e.target.name]=e.target.value,"tel"==e.target.name&&(null==this.query.tel||""==this.query.tel?this.setState({error:!0,errorContent:"请填写您的联系方式"}):this.setState({error:!1,errorContent:""}))}},{key:"_handleCommit",value:function(){var e=this;null==this.query.tel||""==this.query.tel?this.setState({error:!0,errorContent:"请填写您的联系方式"}):(this.setState({error:!1,errorContent:""}),h["default"].entrustAdd(this.query,1).then(function(t){e.setState({isSuccess:!0}),setTimeout(function(){e.setState({isSuccess:!1})}.bind(e),3e3)}))}}]);var n=t;return t=(0,s.connect)(function(e){return{router:e.router}},function(e){return{}})(t)||t}(c["default"].Component);t["default"]=b,e.exports=t["default"]}});