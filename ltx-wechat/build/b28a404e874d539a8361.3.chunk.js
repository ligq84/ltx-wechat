webpackJsonp([3],{

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df4916637513437fa9a20e717b67f764.png";

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7da744f73c0112f11586c4e4469abf28.gif";

/***/ },

/***/ 494:
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

	__webpack_require__(487);

	var _imgDefault_bbPng = __webpack_require__(441);

	var _imgDefault_bbPng2 = _interopRequireDefault(_imgDefault_bbPng);

	var _reactImageloader = __webpack_require__(440);

	var _reactImageloader2 = _interopRequireDefault(_reactImageloader);

	var _actions = __webpack_require__(450);

	var _reactTappable = __webpack_require__(452);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	var _imgArrowPng = __webpack_require__(493);

	var _imgArrowPng2 = _interopRequireDefault(_imgArrowPng);

	var _reactRouter = __webpack_require__(371);

	var _imgMapXiangqingPng = __webpack_require__(446);

	var _imgMapXiangqingPng2 = _interopRequireDefault(_imgMapXiangqingPng);

	var _imgLoadingGif = __webpack_require__(489);

	var _imgLoadingGif2 = _interopRequireDefault(_imgLoadingGif);

	var _MutiSelect = __webpack_require__(490);

	var _MutiSelect2 = _interopRequireDefault(_MutiSelect);

	var _BuildingItemListLess = __webpack_require__(495);

	var _BuildingItemListLess2 = _interopRequireDefault(_BuildingItemListLess);

	var _reduxRouter = __webpack_require__(465);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(_default, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // this.props.refetchBuildings()
	      window.onscroll = (function () {
	        if (this.props.isMore && !this.props.isBuildingsFetching && this.refs.ul.offsetHeight - window.scrollY < 1200) {
	          this.props.fetchBuildings();
	        }
	      }).bind(this);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.onscroll = function () {};
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var buildings = this.props.buildings;

	      var config = {
	        title: '楼天下写字楼招商 在线精选 真实 在线预约 省事 实地看房 省力 洽谈交易 省钱 一个专属于写字楼的天下 上海 苏州 无锡 均有楼宇推荐 不收取任何费用',
	        link: window.location.href,
	        imgUrl: buildings && buildings[0] ? buildings[0].buildingImage : ""

	      };
	      wx.onMenuShareTimeline(config);
	      wx.onMenuShareAppMessage(config);

	      return _react2['default'].createElement(
	        'ul',
	        { ref: 'ul', className: 'building-list-item' },
	        this.props.buildings.map(function (ele) {
	          return _react2['default'].createElement(
	            _reactTappable2['default'],
	            {
	              onTap: _this._handle2House.bind(_this, ele),
	              component: 'a',
	              key: ele.buildingId },
	            _react2['default'].createElement(_reactImageloader2['default'], {
	              src: ele.buildingImage,
	              wrapper: _react2['default'].DOM.div,
	              preloader: function () {
	                return _react2['default'].createElement('img', { src: _imgDefault_bbPng2['default'] });
	              } }),
	            _react2['default'].createElement(
	              'footer',
	              null,
	              _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  ele.buildingName
	                ),
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'fr sm' },
	                  '套房源'
	                ),
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'fr' },
	                  ele.suitableNum
	                )
	              ),
	              _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'sm' },
	                  ele.buildingAddress
	                ),
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'fr sm' },
	                  '元/m',
	                  _react2['default'].createElement(
	                    'sup',
	                    null,
	                    '2'
	                  ),
	                  '.天'
	                ),
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'fr' },
	                  ele.averageRent
	                )
	              )
	            )
	          );
	        }),
	        _react2['default'].createElement(
	          'footer',
	          { style: { display: !this.props.isNull && !this.props.isMore && !this.props.isBuildingsFetching ? "block" : "none" } },
	          'Oops,页面到底了！'
	        ),
	        _react2['default'].createElement(
	          'footer',
	          { style: { display: this.props.isMore ? "block" : "none" } },
	          _react2['default'].createElement(
	            'div',
	            { id: 'cercle' },
	            _react2['default'].createElement('div', { id: 'cercleCache' })
	          )
	        ),
	        _react2['default'].createElement(
	          'section',
	          { style: { display: this.props.isNull ? "block" : "none" } },
	          _react2['default'].createElement(
	            'span',
	            null,
	            '很抱歉，没有找到符合条件的房源，您还可以委托楼天下帮您找房'
	          ),
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { id: 'm_entrust', to: '/entrust?cityId=' + this.props.router.location.query.cityId },
	            '委托找房'
	          )
	        )
	      );
	    }
	  }, {
	    key: '_handle2House',
	    value: function _handle2House(ele) {
	      this.props.setCurrentBuilding({
	        id: ele.buildingId,
	        address: ele.buildingAddress,
	        propertyFee: ele.propertyFee,
	        buildingImage: ele.buildingImage,
	        fullName: ele.buildingName
	      });
	      this.props.redirect2House(ele.buildingId);
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _reactRedux.connect)(function (state) {
	    return {
	      buildings: state.building.buildings,
	      router: state.router,
	      isBuildingsFetching: state.building.isBuildingsFetching,
	      isMore: state.building.isMore,
	      isNull: state.building.isNull

	    };
	  }, function (dispatch) {
	    return {
	      fetchBuildings: function fetchBuildings() {
	        return dispatch((0, _actions.fetchBuildings)());
	      },
	      refetchBuildings: function refetchBuildings() {
	        return dispatch((0, _actions.refetchBuildings)());
	      },
	      setCurrentBuilding: function setCurrentBuilding(building) {
	        return dispatch((0, _actions.setCurrentBuilding)(building));
	      },
	      redirect2House: function redirect2House(buildingId) {
	        return dispatch((0, _reduxRouter.pushState)(null, '/houseDetail?buildingId=' + buildingId));
	      }
	    };
	  })(_default) || _default;
	  return _default;
	})(_react2['default'].Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(433)();
	// imports


	// module
	exports.push([module.id, "ul.building-list-item {\n  margin-top: 2.5rem;\n  overflow: auto;\n  background-clip: 80%;\n}\nul.building-list-item > footer {\n  height: 120px;\n  color: #c80000;\n  font-size: 26px;\n  line-height: 120px;\n  width: 100%;\n  bottom: 0px;\n  left: 0px;\n  text-align: center;\n  z-index: 10;\n  position: relative;\n}\nul.building-list-item > footer > div#cercle {\n  height: 40px;\n  width: 40px;\n  display: inline-block;\n  border-radius: 50%;\n  padding: 10px;\n  background: -webkit-linear-gradient(#c80000, #FFECEE);\n  animation: rotateplane 1s infinite;\n  -webkit-animation: rotateplane 1s infinite;\n}\nul.building-list-item > footer > div#cercle > #cercleCache {\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #f0f0f0;\n  z-index: 5;\n}\n@-webkit-keyframes rotateplane {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes rotateplane {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\nul.building-list-item > section {\n  height: 10.9375rem;\n  background: url(" + __webpack_require__(497) + ") center bottom no-repeat;\n  padding: 1.5625rem 0.9375rem 0rem 0.9375rem;\n  color: #969696;\n  font-size: 0.40625rem;\n  line-height: 0.625rem;\n  text-align: center;\n}\nul.building-list-item > section > a {\n  display: block;\n  box-sizing: border-box;\n  height: 1.25rem;\n  width: 3.125rem;\n  background-color: #c80000;\n  font-size: 0.5625rem;\n  color: #fff;\n  text-align: center;\n  line-height: 1.25rem;\n  border-radius: 0.125rem;\n  margin: auto;\n  margin-top: 0.625rem;\n  text-decoration: none;\n}\nul.building-list-item > a {\n  display: block;\n  height: 6.25rem;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\nul.building-list-item > a > div.white {\n  display: none;\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.3);\n}\nul.building-list-item > a.Tappable-active > div.white {\n  display: block;\n}\nul.building-list-item > a > div {\n  margin-top: -0.625rem;\n}\nul.building-list-item > a > div > img {\n  width: 100%;\n}\nul.building-list-item > a > footer {\n  height: 1.25rem;\n  background: -webkit-gradient(linear, 0 100%, 0 0, from(rgba(0, 0, 0, 0.5)), to(rgba(255, 255, 255, 0)));\n  bottom: 0rem;\n  left: 0rem;\n  z-index: 99;\n  position: absolute;\n  width: 100%;\n  padding-top: 0.78125rem;\n}\nul.building-list-item > a > footer > div {\n  padding: 0.109375rem 0.3125rem;\n  line-height: 0.40625rem;\n  height: 0.40625rem;\n  font-size: 0.40625rem;\n  color: #fff;\n}\nul.building-list-item > a > footer > div > span.sm {\n  font-size: 0.34375rem;\n  color: #c8c8c8;\n}\nul.building-list-item > a > footer > div > span.fr {\n  float: right;\n}\n", ""]);

	// exports


/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(496);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(434)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(496, function() {
				var newContent = __webpack_require__(496);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 486:
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

	__webpack_require__(487);

	var _imgDefault_bbPng = __webpack_require__(441);

	var _imgDefault_bbPng2 = _interopRequireDefault(_imgDefault_bbPng);

	var _reactImageloader = __webpack_require__(440);

	var _reactImageloader2 = _interopRequireDefault(_reactImageloader);

	var _actions = __webpack_require__(450);

	var _reactTappable = __webpack_require__(452);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	var _reactRouter = __webpack_require__(371);

	var _imgMapXiangqingPng = __webpack_require__(446);

	var _imgMapXiangqingPng2 = _interopRequireDefault(_imgMapXiangqingPng);

	var _imgLoadingGif = __webpack_require__(489);

	var _imgLoadingGif2 = _interopRequireDefault(_imgLoadingGif);

	var _MutiSelect = __webpack_require__(490);

	var _MutiSelect2 = _interopRequireDefault(_MutiSelect);

	var _BuildingItemList = __webpack_require__(494);

	var _BuildingItemList2 = _interopRequireDefault(_BuildingItemList);

	var _imgArrowPng = __webpack_require__(493);

	var _imgArrowPng2 = _interopRequireDefault(_imgArrowPng);

	var _reduxRouter = __webpack_require__(465);

	var _imgRukouPng = __webpack_require__(464);

	var _imgRukouPng2 = _interopRequireDefault(_imgRukouPng);

	var BuildingList = (function (_React$Component) {
	  _inherits(BuildingList, _React$Component);

	  function BuildingList() {
	    _classCallCheck(this, _BuildingList);

	    _get(Object.getPrototypeOf(_BuildingList.prototype), 'constructor', this).call(this);
	    this.isAdd = true;
	    this.state = {
	      districtName: null,
	      areaName: null,
	      priceName: null,
	      comms: []
	    };
	    // console.log(this.router);

	    this.areas = [{
	      min: 0,
	      max: "不限",
	      val: "不限"
	    }, {
	      min: 0,
	      max: 100,
	      val: "100㎡以下"
	    }, {
	      min: 100,
	      max: 200,
	      val: "100-200㎡"
	    }, {
	      min: 200,
	      max: 300,
	      val: "200-300㎡"
	    }, {
	      min: 300,
	      max: 500,
	      val: "300-500㎡"
	    }, {
	      min: 500,
	      max: 700,
	      val: "500-700㎡"
	    }, {
	      min: 700,
	      max: 1000,
	      val: "700-1000㎡"
	    }, {
	      min: 1000,
	      max: 1500,
	      val: "1000-1500㎡"
	    }, {
	      min: 1500,
	      max: 2000,
	      val: "1500-2000㎡"
	    }, {
	      min: 2000,
	      max: "不限",
	      val: "2000㎡+"
	    }];
	    this.prices = [{
	      min: 0,
	      max: "不限",
	      val: "不限"
	    }, {
	      min: 0,
	      max: 1,
	      val: "0-1元/㎡.天"
	    }, {
	      min: 1,
	      max: 2,
	      val: "1-2元/㎡.天"
	    }, {
	      min: 2,
	      max: 3,
	      val: "2-3元/㎡.天"
	    }, {
	      min: 3,
	      max: 4,
	      val: "3-4元/㎡.天"
	    }, {
	      min: 4,
	      max: 5,
	      val: "4-5元/㎡.天"
	    }, {
	      min: 5,
	      max: 6,
	      val: "5-6元/㎡.天"
	    }, {
	      min: 6,
	      max: 7,
	      val: "6-7元/㎡.天"
	    }, {
	      min: 7,
	      max: 8,
	      val: "7-8元/㎡.天"
	    }, {
	      min: 8,
	      max: 9,
	      val: "8-9元/㎡.天"
	    }, {
	      min: 9,
	      max: '不限',
	      val: "9+元/㎡.天"
	    }];
	  }

	  _createClass(BuildingList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      // //若果是会退回去的
	      // if(this.props.buildings.length>0){
	      //     this.refs.list.scrollTop=this.refs[this.props.building.id].parentElement.offsetTop;
	      // }else {
	      //
	      //
	      // }

	      this.props.setCurrentCity(this.props.cityId || this.props.router.location.query.cityId || 867);
	      this.props.fetchDistrictsAndComms(this.props.cityId || this.props.router.location.query.cityId || 867);
	      this.props.refetchBuildings();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.resetQuery();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cityId = this.props.cityId;

	      return _react2['default'].createElement(
	        'div',
	        { className: 'buildingList' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: 'event', style: {
	              height: 140,
	              width: 100,
	              right: 20,
	              bottom: 120,
	              position: "fixed",
	              zIndex: 999

	            } },
	          _react2['default'].createElement('img', { src: _imgRukouPng2['default'], style: {
	              height: "100%",
	              width: "100%"
	            } })
	        ),
	        _react2['default'].createElement(
	          'header',
	          { className: 'building-list-header', ref: 'header' },
	          _react2['default'].createElement(
	            'select',
	            { value: cityId, onChange: this._handleCityChange.bind(this) },
	            _react2['default'].createElement(
	              'option',
	              { value: '', disabled: true },
	              '请选择城市'
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
	          _react2['default'].createElement('img', { src: _imgArrowPng2['default'] }),
	          _react2['default'].createElement(
	            'aside',
	            null,
	            _react2['default'].createElement(
	              _reactTappable2['default'],
	              { component: 'div', onTap: this._switch2TrueInput.bind(this), className: 'fork' },
	              this.props.keyword
	            ),
	            _react2['default'].createElement(
	              _reactTappable2['default'],
	              {
	                component: 'a',
	                onTap: this._handleCloseTap.bind(this),
	                style: { display: this.props.keyword == "" ? "none" : "block" } },
	              'x'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'search', id: 'm_search' },
	              '搜索'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'query', ref: 'query' },
	          _react2['default'].createElement(_MutiSelect2['default'], { ref: 'districts',
	            onTap: this._handleTap.bind(this),
	            placeholder: '区域',
	            levelOne: this.props.districts,
	            levelOneDesc: 'district',
	            levelTwoDesc: 'comm',
	            levelTwo: this.state.comms,
	            onLevelTwoChange: this._handleCommsChange.bind(this),
	            onLevelOneChange: this._handleDistrictsChange.bind(this) }),
	          _react2['default'].createElement(_MutiSelect2['default'], { ref: 'areas',
	            onTap: this._handleTap.bind(this),
	            placeholder: '面积',
	            levelOneDesc: 'area',
	            levelOne: this.areas,
	            onLevelOneChange: this._handleAreasChange.bind(this) }),
	          _react2['default'].createElement(_MutiSelect2['default'], { ref: 'prices',
	            onTap: this._handleTap.bind(this),
	            placeholder: '价格',
	            levelOneDesc: 'price',
	            levelOne: this.prices,
	            onLevelOneChange: this._handlePricesChange.bind(this) })
	        ),
	        _react2['default'].createElement(_BuildingItemList2['default'], null)
	      );
	    }
	  }, {
	    key: '_handleDistrictsChange',
	    value: function _handleDistrictsChange(ele) {
	      this.setState({
	        comms: ele.comms
	      });
	      this.props.setCurrentDistrict(ele.id);
	    }
	  }, {
	    key: '_handleCommsChange',
	    value: function _handleCommsChange(ele) {
	      this.props.setCurrentComm(ele.id);
	    }
	  }, {
	    key: '_handleAreasChange',
	    value: function _handleAreasChange(ele) {
	      this.props.setArea(ele.min, ele.max == "不限" ? "" : ele.max);
	    }
	  }, {
	    key: '_handlePricesChange',
	    value: function _handlePricesChange(ele) {
	      this.props.setPrice(ele.min, ele.max == "不限" ? "" : ele.max);
	    }
	  }, {
	    key: '_handleTap',
	    value: function _handleTap() {
	      this.refs.districts.setState({ isOpen: false });
	      this.refs.areas.setState({ isOpen: false });
	      this.refs.prices.setState({ isOpen: false });
	    }
	  }, {
	    key: '_switch2TrueInput',
	    value: function _switch2TrueInput() {
	      var redirect2Search = this.props.redirect2Search;

	      redirect2Search();
	    }
	  }, {
	    key: '_handleCloseTap',
	    value: function _handleCloseTap() {
	      this.props.setKeyword("");
	      this.props.refetchBuildings();
	    }
	  }, {
	    key: '_handleCityChange',
	    value: function _handleCityChange(event) {
	      this.props.resetQuery();
	      this.props.setCurrentCity(event.target.value);
	      this.props.fetchDistrictsAndComms(event.target.value);
	      this.props.refetchBuildings();
	    }
	  }]);

	  var _BuildingList = BuildingList;
	  BuildingList = (0, _reactRedux.connect)(function (state) {
	    return {
	      router: state.router,
	      districts: state.query.city.districts,
	      options: state.query.options,
	      keyword: state.query.keyword,
	      cityId: state.query.city.id
	    };
	  }, function (dispatch) {
	    return {
	      refetchBuildings: function refetchBuildings() {
	        return dispatch((0, _actions.refetchBuildings)());
	      },
	      fetchDistrictsAndComms: function fetchDistrictsAndComms(id) {
	        return dispatch((0, _actions.fetchDistrictsAndComms)(id));
	      },
	      setArea: function setArea(min, max) {
	        return dispatch((0, _actions.setArea)(min, max));
	      },
	      setPrice: function setPrice(min, max) {
	        return dispatch((0, _actions.setPrice)(min, max));
	      },
	      setCurrentCity: function setCurrentCity(id) {
	        return dispatch((0, _actions.setCurrentCity)(id));
	      },
	      setCurrentDistrict: function setCurrentDistrict(id) {
	        return dispatch((0, _actions.setCurrentDistrict)(id));
	      },
	      setCurrentComm: function setCurrentComm(id) {
	        return dispatch((0, _actions.setCurrentComm)(id));
	      },
	      redirect2Search: function redirect2Search() {
	        return dispatch((0, _reduxRouter.pushState)(null, '/search'));
	      },
	      setKeyword: function setKeyword(keyword) {
	        return dispatch((0, _actions.setKeyword)(keyword));
	      },
	      resetQuery: function resetQuery() {
	        return dispatch((0, _actions.resetQuery)());
	      }
	    };
	  })(BuildingList) || BuildingList;
	  return BuildingList;
	})(_react2['default'].Component);

	exports['default'] = BuildingList;
	module.exports = exports['default'];

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(488);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(434)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(488, function() {
				var newContent = __webpack_require__(488);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(433)();
	// imports


	// module
	exports.push([module.id, "div.buildingList {\n  font-size: 0rem;\n  background-color: #f0f0f0;\n}\ndiv.buildingList > header {\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  left: 0;\n}\ndiv.buildingList > div.query {\n  background-color: #fff;\n  z-index: 990;\n  box-sizing: border-box;\n  position: fixed;\n  top: 1.40625rem;\n  margin-top: 1.40625em;\n  width: 100%;\n  left: 0;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 1.09375rem;\n  font-size: 0px;\n  border-bottom: 0.03125rem solid #ccc;\n}\n", ""]);

	// exports


/***/ },

/***/ 490:
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

	__webpack_require__(491);

	var _imgArrowPng = __webpack_require__(493);

	var _imgArrowPng2 = _interopRequireDefault(_imgArrowPng);

	var MutiSelect = (function (_React$Component) {
	  _inherits(MutiSelect, _React$Component);

	  function MutiSelect(props) {
	    _classCallCheck(this, MutiSelect);

	    _get(Object.getPrototypeOf(MutiSelect.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      isOpen: false,
	      value: this.props.placeholder,
	      isFixed: false,
	      isAndroid: window.navigator.appVersion.match(/Android/g) && window.navigator.appVersion.match(/Android/g).length > 0
	    };
	    this.ele = {
	      min: 0,
	      max: "不限",
	      val: "不限"
	    };
	    if (this.state.isAndroid) {
	      //如果是 安卓的话

	    }
	  }

	  _createClass(MutiSelect, [{
	    key: '_isLevelTwo',
	    value: function _isLevelTwo() {
	      var _this = this;

	      if (!(this.props.levelTwo && this.props.levelTwo.length > 0)) {
	        return _react2['default'].createElement(
	          'section',
	          { style: { height: this.props.levelTwo ? 480 / 64 + "rem" : 400 / 64 + "rem" } },
	          _react2['default'].createElement(
	            'ul',
	            { style: { height: this.props.levelTwo ? 480 / 64 + "rem" : 400 / 64 + "rem" } },
	            this.props.levelOne.map(function (ele, i) {
	              return _react2['default'].createElement(
	                _reactTappable2['default'],
	                { key: i, id: _this.props.levelOneDesc == "district" ? "m_" + _this.props.levelOneDesc + "_" + ele.id : "m_" + _this.props.levelOneDesc + "_" + ele.min + "_" + ele.max, component: 'li', className: _this.state.value == ele.val ? "active" : "", onTap: _this._handleChange.bind(_this, ele) },
	                ele.val
	              );
	            })
	          )
	        );
	      } else {

	        return _react2['default'].createElement(
	          'section',
	          { style: { height: 480 / 64 + "rem" } },
	          _react2['default'].createElement(
	            'ul',
	            { className: 'level-one', style: { height: 480 / 64 + "rem" } },
	            this.props.levelOne.map(function (ele, i) {
	              return _react2['default'].createElement(
	                _reactTappable2['default'],
	                { key: i, id: "m_" + _this.props.levelOneDesc + "_" + ele.id, component: 'li', className: _this.state.value == ele.val ? "active" : "", onTap: _this._handleChange.bind(_this, ele) },
	                ele.val
	              );
	            })
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { className: 'level-two', style: { height: 480 / 64 + "rem" } },
	            this.props.levelTwo.map(function (ele, i) {
	              return _react2['default'].createElement(
	                _reactTappable2['default'],
	                { key: i, id: "m_" + _this.props.levelTwoDesc + "_" + (ele.id == null ? _this.state.selectedId : ele.id), component: 'li', className: _this.state.value == ele.val ? "active" : "", onTap: _this._handleLevelTwoChange.bind(_this, ele) },
	                ele.val
	              );
	            })
	          )
	        );
	      }
	    }
	  }, {
	    key: '_handleChange',
	    value: function _handleChange(ele, event) {
	      if (ele.val == "不限") {

	        this.setState({
	          value: ele.val,
	          isOpen: false,
	          selectedId: 0
	        });
	      } else {

	        this.setState({
	          value: ele.val,
	          isOpen: this.props.levelTwo ? true : false,
	          selectedId: ele.id

	        });
	      }

	      this.props.onLevelOneChange(ele);
	    }
	  }, {
	    key: '_handleLevelTwoChange',
	    value: function _handleLevelTwoChange(ele) {

	      this.setState({
	        value: ele.val,
	        isOpen: false
	      });
	      document.documentElement.classList.remove("fixed");
	      this.props.onLevelTwoChange(ele);
	    }
	  }, {
	    key: '_handleDropDown',
	    value: function _handleDropDown() {

	      // Array.prototype.forEach.call(document.querySelectorAll("div.muti-seletct>main"),ele=>ele.style.display="none")
	      // this.close()
	      this.props.onTap();
	      this.setState({
	        isOpen: true
	      });

	      //     document.querySelector('.el').classList.add('class');
	      // document.querySelector('.el').classList.remove('class');
	      document.documentElement.classList.add("fixed");
	    }
	  }, {
	    key: '_handleMainTap',
	    value: function _handleMainTap() {
	      this.setState({
	        isOpen: false
	      });
	      document.documentElement.classList.remove("fixed");
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2['default'].createElement(
	        'div',
	        { className: 'muti-seletct' },
	        _react2['default'].createElement(
	          _reactTappable2['default'],
	          { component: 'span', onTap: this._handleDropDown.bind(this) },
	          this.state.value,
	          _react2['default'].createElement('img', { src: _imgArrowPng2['default'] })
	        ),
	        _react2['default'].createElement(
	          'main',
	          { component: 'main', onClick: this._handleMainTap.bind(this), style: { display: this.state.isOpen ? "block" : "none" } },
	          this._isLevelTwo(),
	          this.state.isAndroid ? _react2['default'].createElement(
	            'footer',
	            { className: this.state.isFixed ? "fixed" : "", style: { display: this.props.levelTwo ? "none" : "block" }, component: 'footer', onClick: function (event) {
	                return event.stopPropagation();
	              } },
	            _react2['default'].createElement(
	              'span',
	              null,
	              '自定义',
	              this.levelOneDesc == "area" ? "面积" : "价格"
	            ),
	            _react2['default'].createElement('input', { type: 'number', placeholder: '最小', name: 'min',
	              onFocus: this._handleInputFocus.bind(this),
	              onBlur: this._handleInputBlur.bind(this),
	              onChange: this._handleInputChange.bind(this) }),
	            _react2['default'].createElement('div', { className: 'line' }),
	            _react2['default'].createElement('input', { type: 'number', placeholder: '最大', name: 'max',
	              onFocus: this._handleInputFocus.bind(this),
	              onBlur: this._handleInputBlur.bind(this),
	              onChange: this._handleInputChange.bind(this) }),
	            _react2['default'].createElement(
	              _reactTappable2['default'],
	              { component: 'div', className: 'button', onTap: this._handleSure.bind(this) },
	              '确定'
	            )
	          ) : ""
	        )
	      );
	    }
	  }, {
	    key: '_handleSure',
	    value: function _handleSure() {

	      this.setState({
	        value: this.ele.val,
	        isOpen: false
	      });
	      this.props.onLevelOneChange(this.ele);
	      document.documentElement.classList.remove("fixed");
	    }
	  }, {
	    key: '_handleInputChange',
	    value: function _handleInputChange(event) {
	      this.ele[event.target.name] = event.target.value;
	      this.ele.val = this.ele.min + "-" + this.ele.max;
	    }
	  }, {
	    key: '_handleInputBlur',
	    value: function _handleInputBlur() {
	      var _this2 = this;

	      this.clearBlur = setTimeout(function () {
	        if (_this2.state.isFixed) {
	          _this2.setState({
	            isFixed: false
	          });
	        }
	      }, 300);
	    }
	  }, {
	    key: '_handleInputFocus',
	    value: function _handleInputFocus() {
	      clearTimeout(this.clearBlur);
	      if (!this.state.isFixed) {
	        this.setState({
	          isFixed: true
	        });
	      }
	    }
	  }]);

	  return MutiSelect;
	})(_react2['default'].Component);

	exports['default'] = MutiSelect;
	module.exports = exports['default'];

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(433)();
	// imports


	// module
	exports.push([module.id, "div.muti-seletct {\n  color: #323232;\n  box-sizing: border-box;\n  border-left: 2px solid #ccc;\n  padding: 0rem 0rem;\n  display: inline-block;\n  font-size: 0.375rem;\n  line-height: 0.625rem;\n  width: 3.328125rem;\n  height: 1.0625rem;\n}\ndiv.muti-seletct:first-child {\n  border-left: 0px;\n}\ndiv.muti-seletct > span {\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0.234375rem;\n  display: block;\n}\ndiv.muti-seletct > span.Tappable-active {\n  background-color: #f0f0f0;\n}\ndiv.muti-seletct > span > img {\n  float: right;\n  width: 0.21875rem;\n  height: 0.21875rem;\n  margin-left: 0.3125rem;\n  margin-top: 0.203125rem;\n}\ndiv.muti-seletct > main {\n  position: fixed;\n  display: none;\n  bottom: 0;\n  left: 0;\n  top: 2.5rem;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  z-index: 999;\n  padding: 0px;\n  font-size: 0.375rem;\n  border: 0rem;\n}\ndiv.muti-seletct > main > section {\n  height: 6.25rem;\n  font-size: 0rem;\n}\ndiv.muti-seletct > main > section > ul {\n  height: 6.25rem;\n  overflow: auto;\n  background-color: #fff;\n  -webkit-overflow-scrolling: touch;\n}\ndiv.muti-seletct > main > section > ul > li {\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  font-size: 0.375rem;\n  padding-left: 0.3125rem;\n  height: 1.25rem;\n  line-height: 1.21875rem;\n  border-bottom: 0.03125rem solid #ccc;\n}\ndiv.muti-seletct > main > section > ul > li.active {\n  color: #c80000;\n  background-color: #f0f0f0;\n}\ndiv.muti-seletct > main > section > ul.level-one {\n  vertical-align: top;\n  display: inline-block;\n  overflow: auto;\n  width: 3.296875rem;\n  border-right: 0.03125rem solid #ccc;\n}\ndiv.muti-seletct > main > section > ul.level-one > li {\n  height: 1.25rem;\n  border: 0rem;\n  border-bottom: 0.03125rem solid #ccc;\n}\ndiv.muti-seletct > main > section > ul.level-one > li.active {\n  background-color: #f0f0f0;\n  color: #c80000;\n}\ndiv.muti-seletct > main > section > ul.level-two {\n  vertical-align: top;\n  display: inline-block;\n  overflow: auto;\n  width: 6.671875rem;\n}\ndiv.muti-seletct > main > footer {\n  position: absolute;\n  top: 6.25rem;\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  height: 1.25rem;\n  padding: 0.234375rem 0.3125rem;\n  line-height: 0.78125rem;\n  font-size: 0.375rem;\n  background-color: #fff;\n  background-color: #f0f0f0;\n}\ndiv.muti-seletct > main > footer.fixed {\n  position: fixed;\n  bottom: 0;\n  top: auto;\n}\ndiv.muti-seletct > main > footer > span {\n  float: left;\n  margin-right: 0.4375rem;\n}\ndiv.muti-seletct > main > footer > input {\n  line-height: 0.71875rem;\n  float: left;\n  box-sizing: border-box;\n  display: block;\n  height: 0.78125rem;\n  padding-left: 0.21875rem;\n  width: 2.28125rem;\n  border: 0.03125rem solid #ccc;\n  border-radius: 0.0625rem;\n}\ndiv.muti-seletct > main > footer > div.button {\n  float: left;\n  line-height: 0.71875rem;\n  height: 0.78125rem;\n  box-sizing: border-box;\n  width: 1.5625rem;\n  background: #c80000;\n  color: #fff;\n  text-align: center;\n  border-radius: 0.0625rem;\n  margin-left: 0.15625rem;\n}\ndiv.muti-seletct > main > footer > div.line {\n  float: left;\n  width: 0.34375rem;\n  margin: 0rem 0.21875rem;\n  height: 0.375rem;\n  border-bottom: 0.015625rem solid #ccc;\n}\n", ""]);

	// exports


/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(492);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(434)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(492, function() {
				var newContent = __webpack_require__(492);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});