webpackJsonp([1],{

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(196);

	var _react2 = _interopRequireDefault(_react);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        { className: "tip", style: this.props.style },
	        this.props.children
	      );
	    }
	  }]);

	  return _default;
	})(_react2["default"].Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(196);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(353);

	var _reactTappable = __webpack_require__(452);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	var _api = __webpack_require__(422);

	var _api2 = _interopRequireDefault(_api);

	var _componentsTip = __webpack_require__(482);

	var _componentsTip2 = _interopRequireDefault(_componentsTip);

	var Entrust = (function (_React$Component) {
	  _inherits(Entrust, _React$Component);

	  function Entrust(props) {
	    _classCallCheck(this, _Entrust);

	    _get(Object.getPrototypeOf(_Entrust.prototype), 'constructor', this).call(this, props);
	    this.query = {

	      source: 1,
	      type: 1
	    };
	    this.state = {
	      error: false,
	      errorContent: "",
	      isSuccess: false
	    };
	  }

	  _createClass(Entrust, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'entrust' },
	        _react2['default'].createElement(
	          'label',
	          { className: 'two' },
	          '城市'
	        ),
	        _react2['default'].createElement(
	          'select',
	          { id: 'm_entrust_city', name: 'cityId', onChange: this._handleChange.bind(this) },
	          _react2['default'].createElement(
	            'option',
	            { value: '' },
	            '请选择'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '802' },
	            '上海'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '867' },
	            '苏州'
	          )
	        ),
	        _react2['default'].createElement(
	          'label',
	          { className: 'two' },
	          '面积'
	        ),
	        _react2['default'].createElement('input', { id: 'm_entrust_area', name: 'area', onChange: this._handleChange.bind(this) }),
	        _react2['default'].createElement(
	          'label',
	          { className: 'two' },
	          '租金'
	        ),
	        _react2['default'].createElement('input', { id: 'm_entrust_rent', name: 'rent', onChange: this._handleChange.bind(this) }),
	        _react2['default'].createElement(
	          'label',
	          null,
	          '需求描述'
	        ),
	        _react2['default'].createElement('textarea', { id: 'm_entrust_describe', onChange: this._handleChange.bind(this), name: 'des', placeholder: '如：陆家嘴，带装修，进地铁' }),
	        _react2['default'].createElement(
	          'label',
	          { className: 'two' },
	          '称呼'
	        ),
	        _react2['default'].createElement('input', { id: 'm_entrust_name', name: 'name', onChange: this._handleChange.bind(this) }),
	        _react2['default'].createElement(
	          'label',
	          null,
	          '手机/座机'
	        ),
	        _react2['default'].createElement('input', { id: 'm_entrust_tel', name: 'tel', onChange: this._handleChange.bind(this) }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'error' },
	          this.state.error ? _react2['default'].createElement(
	            'span',
	            null,
	            this.state.errorContent
	          ) : ""
	        ),
	        _react2['default'].createElement(
	          _reactTappable2['default'],
	          { id: 'm_entrust_submit', component: 'div', className: 'button', onTap: this._handleCommit.bind(this) },
	          '提交需求'
	        ),
	        _react2['default'].createElement(
	          _componentsTip2['default'],
	          { style: { display: this.state.isSuccess ? "block" : "none" } },
	          '委托成功'
	        )
	      );
	    }
	  }, {
	    key: '_handleChange',
	    value: function _handleChange(event) {

	      this.query[event.target.name] = event.target.value;

	      if (event.target.name == "tel") {
	        if (this.query.tel == null || this.query.tel == "") {
	          this.setState({
	            error: true,
	            errorContent: "请填写您的联系方式"
	          });
	        } else {
	          this.setState({
	            error: false,
	            errorContent: ""
	          });
	        }
	      }
	    }
	  }, {
	    key: '_handleCommit',
	    value: function _handleCommit() {
	      var _this = this;

	      if (this.query.tel == null || this.query.tel == "") {
	        this.setState({
	          error: true,
	          errorContent: "请填写您的联系方式"
	        });
	      } else {
	        this.setState({
	          error: false,
	          errorContent: ""
	        });

	        _api2['default'].entrustAdd(this.query, 1).then(function (value) {
	          _this.setState({
	            isSuccess: true
	          });
	          setTimeout((function () {
	            _this.setState({
	              isSuccess: false
	            });
	          }).bind(_this), 3000);
	        });
	      }
	    }
	  }]);

	  var _Entrust = Entrust;
	  Entrust = (0, _reactRedux.connect)(function (state) {
	    return {
	      router: state.router
	    };
	  }, function (dispatch) {
	    return {};
	  })(Entrust) || Entrust;
	  return Entrust;
	})(_react2['default'].Component);

	exports['default'] = Entrust;
	module.exports = exports['default'];

/***/ }

});