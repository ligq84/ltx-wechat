webpackJsonp([3],{363:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=function(t,e,n){for(var i=!0;i;){var o=t,r=e,a=n;i=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,r);if(void 0!==u){if("value"in u)return u.value;var c=u.get;if(void 0===c)return;return c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;t=l,e=r,n=a,i=!0,u=l=void 0}},l=n(4),s=i(l),p=n(74),f=(i(p),n(43),n(19)),d=n(28),h=(i(d),n(20),n(149));i(h);n(499);var v=n(50),m=i(v),g=function(t){function e(t){o(this,n),c(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,t),this.state={buildings:[]}}r(e,t),u(e,[{key:"initialize",value:function(){BMap.Map.prototype.getXY=function(){return{maxx:this.getBounds().getNorthEast().lng,maxy:this.getBounds().getNorthEast().lat,minx:this.getBounds().getSouthWest().lng,miny:this.getBounds().getSouthWest().lat}},this.map=new BMap.Map("map");var t=this;wx?(alert(9911),t.map.centerAndZoom(new BMap.Point("121.48","31.22"),16),t._fetchBuilding(),t.map.addEventListener("zoomend",function(){return t._fetchBuilding()}),this.map.addEventListener("moveend",function(){return t._fetchBuilding()})):(alert(99),wx.getLocation({type:"wgs84",success:function(e){alert(99),t.map.centerAndZoom(new BMap.Point("121.48","31.22"),16),t._fetchBuilding(),t.map.addEventListener("zoomend",function(){return t._fetchBuilding()}),this.map.addEventListener("moveend",function(){return t._fetchBuilding()})}}))}},{key:"_fetchBuilding",value:function(){var t=this,e=this.map.getXY();alert(1254),(0,m["default"])({url:"api/building/list",method:"get",data:a({},e)}).then(function(e){t.setState({buildings:e})}.bind(this))}},{key:"componentDidMount",value:function(){if(void 0===window.BMap){window.initialize=function(){this.initialize()}.bind(this);var t=document.createElement("script");t.src="http://api.map.baidu.com/api?type=quick&v=1.0&ak=37fQZDRYjBGdpbM3zXe1YNEK&callback=initialize",document.body.appendChild(t)}}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this;return this.map&&this.map.clearOverlays(),this.state.buildings.forEach(function(e){var n=new BMap.Marker(new BMap.Point(e.x,e.y));t.map.addOverlay(n)}.bind(this)),s["default"].createElement("div",{className:"map"},s["default"].createElement("div",{id:"map"}))}}]);var n=e;return e=(0,f.connect)(function(t){return{router:t.router}},function(t){return{}})(e)||e}(s["default"].Component);e["default"]=g,t.exports=e["default"]},118:function(t,e,n){e=t.exports=n(27)(),e.push([t.id,"div.map{height:800px}div.map>div#map{height:100%;width:100%}",""])},499:function(t,e,n){var i=n(118);"string"==typeof i&&(i=[[t.id,i,""]]);var o=n(29)(i,{});i.locals&&(t.exports=i.locals),i.locals||t.hot.accept(118,function(){var e=n(118);"string"==typeof e&&(e=[[t.id,e,""]]),o(e)}),t.hot.dispose(function(){o()})}});