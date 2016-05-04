webpackJsonp([12],{

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "47f32166dd79d6d894aea48ce5dfbe95.jpg";

/***/ },

/***/ 535:
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

	var _imgServiceGzhwyJpg = __webpack_require__(523);

	var _imgServiceGzhwyJpg2 = _interopRequireDefault(_imgServiceGzhwyJpg);

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
	            _react2['default'].createElement('img', { src: _imgServiceGzhwyJpg2['default'] }),
	            _react2['default'].createElement(
	              'span',
	              null,
	              '公装无忧'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'h1',
	          null,
	          '办公装修  ',
	          _react2['default'].createElement(
	            'span',
	            { className: 'red' },
	            '三重装修大礼包'
	          )
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
	            '凡通过楼天下成交写字楼租赁公司。拿合同附件，可享受公装无忧三重装修大礼包'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '礼包一：赠送六个月绿植，环保健康。（最高价值5000元）'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '礼包二：赠送六个月施工安全保险及价值10万元第三方责任险。（价值500元）'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '礼包三：赠送免费开荒保洁一次。（价值300-1000元不等）'
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
	            '公装无忧是上海德渡网络科技有限公司旗下的线上平台，致力于打造互联网+办公装修平台，致力于解决办公装修过程中用户体验和行业的痛点。我们的“标准化、去中介化、一体化”服务模式将彻底颠覆传统的游击式装修，以极致的价格、极致的品质、极致的服务，打造一个信息透明、价格低廉、工期保障的高效和重度垂直的O2O平台，让办公装修简单无忧。 公装无忧的创新思维和理念，获得新浪家居的高度认同，是新浪家居办公装修唯一战略合作伙伴。 '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            '与此同时，公装无忧和新浪家居共建的“办公装修”频道，充分利用新浪家居日均百万级流量，将打造成全面覆盖整个办公领域，包括办公租赁、办公装修、孵化器和众创空间的信息对接。在整个生态链中的供应商、设计师、施工团队以及各战略合作伙伴等相关信息均可查找和展现。该频道能够为用户提供一体化解决方案和全新的消费体验。'
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

	      this.props.toApply("公装无忧", "办公装修");
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


/***/ }

});