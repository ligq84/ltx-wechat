webpackJsonp([5],{

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(196);

	var _react2 = _interopRequireDefault(_react);

	var _imgDefault_bbPng = __webpack_require__(441);

	var _imgDefault_bbPng2 = _interopRequireDefault(_imgDefault_bbPng);

	var _actions = __webpack_require__(450);

	var _reactRedux = __webpack_require__(353);

	var _reactTappable = __webpack_require__(452);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	var _reactRouter = __webpack_require__(371);

	var _imgRukouPng = __webpack_require__(464);

	var _imgRukouPng2 = _interopRequireDefault(_imgRukouPng);

	__webpack_require__(516);

	var _reqwest = __webpack_require__(423);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      buildings: []
	    };
	  }

	  _createClass(_default, [{
	    key: 'initialize',
	    value: function initialize() {
	      BMap.Map.prototype.getXY = function () {
	        return {
	          maxx: this.getBounds().getNorthEast().lng,
	          maxy: this.getBounds().getNorthEast().lat,
	          minx: this.getBounds().getSouthWest().lng,
	          miny: this.getBounds().getSouthWest().lat
	        };
	      };

	      this.map = new BMap.Map("map");

	      var that = this;
	      //
	      // that.map.centerAndZoom(new BMap.Point("121.48", "31.22"), 16);
	      // that._fetchBuilding();
	      // that.map.addEventListener("zoomend",()=>that._fetchBuilding())
	      // this.map.addEventListener("moveend",()=>that._fetchBuilding())
	      // console.log(899,window)

	      wx.ready(function () {
	        alert(999);
	        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	        wx.getLocation({
	          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	          success: function success(res) {
	            alert(998);
	            that.map.centerAndZoom(new BMap.Point(latitude, longitude), 17);
	            that._fetchBuilding();
	            that.map.addEventListener("zoomend", function () {
	              return that._fetchBuilding();
	            });
	            this.map.addEventListener("moveend", function () {
	              return that._fetchBuilding();
	            });
	          }
	        });
	      });

	      //
	      // this.map.centerAndZoom(new BMap.Point("121.50952", 31.21), 18);
	      //
	      // this._fetchBuilding();
	      //
	      // this.map.addEventListener("zoomend",()=>{
	      //   this._fetchBuilding();
	      // })
	      // this.map.addEventListener("moveend",()=>{
	      //   this._fetchBuilding();
	      // })
	    }
	  }, {
	    key: '_fetchBuilding',
	    value: function _fetchBuilding() {
	      var _this = this;

	      var scope = this.map.getXY();

	      (0, _reqwest2['default'])({
	        url: "api/building/list",
	        method: "get",
	        data: _extends({}, scope)
	      }).then((function (data) {
	        _this.setState({
	          buildings: data
	        });
	      }).bind(this));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      if (window.BMap === undefined) {
	        window.initialize = (function () {

	          this.initialize();
	        }).bind(this);
	        var script = document.createElement("script");
	        script.src = "http://api.map.baidu.com/api?type=quick&v=1.0&ak=37fQZDRYjBGdpbM3zXe1YNEK&callback=initialize";
	        document.body.appendChild(script);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.map) {
	        this.map.clearOverlays();
	      }

	      this.state.buildings.forEach((function (building) {
	        var buildingEle = new BMap.Marker(new BMap.Point(building.x, building.y));
	        _this2.map.addOverlay(buildingEle);
	      }).bind(this));

	      return _react2['default'].createElement(
	        'div',
	        { className: 'map' },
	        _react2['default'].createElement('div', { id: 'map' })
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _reactRedux.connect)(function (state) {

	    return {

	      router: state.router

	    };
	  }, function (dispatch) {
	    return {};
	  })(_default) || _default;
	  return _default;
	})(_react2['default'].Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(517);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(434)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(517, function() {
				var newContent = __webpack_require__(517);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(433)();
	// imports


	// module
	exports.push([module.id, "div.map {\n  height: 800px;\n}\ndiv.map > div#map {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

	// exports


/***/ }

});