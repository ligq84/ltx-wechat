webpackJsonp([10],{

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e11da659d40e8d0380bd0d670e44413a.png";

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(521);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(434)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(521, function() {
				var newContent = __webpack_require__(521);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(433)();
	// imports


	// module
	exports.push([module.id, "div.service-main {\n  background-color: #e3eff9;\n  overflow: hidden;\n}\ndiv.service-main > header {\n  height: 2.5rem;\n  padding-top: 0.78125rem;\n  text-align: center;\n}\ndiv.service-main > section {\n  box-sizing: border-box;\n  height: 4.6875rem;\n  width: 4.53125rem;\n  margin-left: 0.3125rem;\n  float: left;\n  background: #fff;\n  margin-bottom: 0.3125rem;\n  line-height: 0.9375rem;\n  text-align: center;\n  padding-bottom: 0.15625rem;\n}\ndiv.service-main > section span.sm {\n  font-size: 0.375rem;\n}\ndiv.service-main > section span.bg {\n  font-size: 0.5rem;\n}\ndiv.service-main > section span.red {\n  color: #c80000;\n}\ndiv.service-main > section > main {\n  box-sizing: border-box;\n  height: 2.65625rem;\n  border-bottom: 2px dashed #ccc;\n  padding: 0.46875rem 0rem;\n}\ndiv.service-main > section > main > img {\n  margin: auto;\n  display: block;\n  height: 1.71875rem;\n  width: auto;\n  border: 0px;\n}\ndiv.service-item {\n  padding-bottom: 2.1875rem;\n  background: #fff;\n}\ndiv.service-item > header {\n  background: #c80000;\n  padding: 0.46875rem 0.78125rem 0rem 0.46875rem;\n}\ndiv.service-item > header > main {\n  background: #fff;\n  text-align: center;\n  line-height: 1.21875rem;\n  font-size: 0.5625rem;\n  padding-top: 0.46875rem;\n}\ndiv.service-item > header > main > img {\n  width: 2.84375rem;\n  height: 1.75rem;\n  display: block;\n  margin: auto;\n}\ndiv.service-item > h1 {\n  font-size: 0.625rem;\n  line-height: 1.09375rem;\n  margin-top: 0.46875rem;\n  text-align: center;\n}\ndiv.service-item > h1 span.red {\n  color: #c80000;\n}\ndiv.service-item > section {\n  padding: 0rem 0.3125rem;\n  margin-top: 1.09375rem;\n}\ndiv.service-item > section > h2 {\n  font-weight: bold;\n  color: #c80000;\n  line-height: 0.625rem;\n  font-size: 0.5625rem;\n  margin-bottom: 0.46875rem;\n}\ndiv.service-item > section > p {\n  margin-bottom: 0.625rem;\n  font-size: 0.375rem;\n  line-height: 0.78125rem;\n}\ndiv.service-item > section > p:first-child {\n  margin-bottom: 0rem;\n  padding-bottom: 0rem;\n}\ndiv.service-item > section > p span.red {\n  color: #c80000;\n}\ndiv.service-item > footer {\n  background-color: #c80000;\n  color: #fff;\n  font-size: 0.5625rem;\n  text-align: center;\n  height: 1.5625rem;\n  line-height: 1.5625rem;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\ndiv.service-apply {\n  padding: 1.71875rem 0.3125rem 0rem 0.3125rem;\n}\ndiv.service-apply > input {\n  display: block;\n  width: 9.375rem;\n  -webkit-appearance: none;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin-bottom: 0.46875rem;\n  line-height: 0.625rem;\n  padding: 0.3125rem;\n  height: 1.25rem;\n  border-radius: 0.125rem;\n}\ndiv.service-apply > footer {\n  height: 1.40625rem;\n  line-height: 1.40625rem;\n  font-size: 0.5625rem;\n  color: #fff;\n  background-color: #c80000;\n  text-align: center;\n  border-radius: 0.125rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 533:
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

	var _reactTappable = __webpack_require__(452);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	__webpack_require__(520);

	var _reactRedux = __webpack_require__(353);

	var _imgServiceYidianzuPng = __webpack_require__(528);

	var _imgServiceYidianzuPng2 = _interopRequireDefault(_imgServiceYidianzuPng);

	var _reduxRouter = __webpack_require__(465);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {

	      return _react2['default'].createElement(
	        'div',
	        { className: 'service-item' },
	        _react2['default'].createElement(
	          'header',
	          null,
	          _react2['default'].createElement(
	            'main',
	            null,
	            _react2['default'].createElement('img', { src: _imgServiceYidianzuPng2['default'] }),
	            _react2['default'].createElement(
	              'span',
	              null,
	              '易点租'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'h1',
	          null,
	          '办公设备  尊享',
	          _react2['default'].createElement(
	            'span',
	            { className: 'red' },
	            ' 1+6+1月'
	          ),
	          '服务'
	        ),
	        _react2['default'].createElement(
	          'section',
	          null,
	          _react2['default'].createElement(
	            'h2',
	            null,
	            '服务介绍'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受易点租合同期第一月免费试用，合同期结束附加1月免费用。（提前技术合同视为放弃最后1月免费用。）'
	          )
	        ),
	        _react2['default'].createElement(
	          'section',
	          null,
	          _react2['default'].createElement(
	            'h2',
	            null,
	            '公司介绍'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '易点租是首家办公IT设备免押金租赁电商，服务中小微企业、初创企业。省去企业一次性大笔投入，节约企业资产管理成本和人力成本，实现企业轻资产运营。无需押金，随租随还，价格便宜，全面保修，在线即时授信，闪电下单，轻松实现轻办公。'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '易点租引入对中小微企业的授信模式，根据企业的各类信息授予企业“免押金额度”，使企业无需支付押金也可租赁电脑等IT设备，按月付租金，随租随还，设备享受全面免费维护，极大降低了企业对于设备的一次性支出及资产处置的成本，提高了企业抗经营风险能力。 将来，易点租还将为信用优质的企业客户提供更多更大型设备的免押金租赁服务。'
	          )
	        ),
	        _react2['default'].createElement(
	          _reactTappable2['default'],
	          { component: 'footer', onTap: this._handleTap.bind(this) },
	          '立即申请'
	        )
	      );
	    }
	  }, {
	    key: '_handleTap',
	    value: function _handleTap() {

	      this.props.toApply("易点租", "办公设备");
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _reactRedux.connect)(function (state) {
	    return {};
	  }, function (dispatch) {
	    return {
	      toApply: function toApply(companyName, companyService) {
	        return dispatch((0, _reduxRouter.pushState)(null, "serviceApply?companyName=" + companyName + "&companyService=" + companyService));
	      }
	    };
	  })(_default) || _default;
	  return _default;
	})(_react2['default'].Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }

});