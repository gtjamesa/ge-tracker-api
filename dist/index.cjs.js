'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var moment = require('moment');
var Axios = require('axios');
var merge = require('deepmerge');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var Axios__default = /*#__PURE__*/_interopDefaultLegacy(Axios);
var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function handleResponseBody(body) {
  if (!body) {
    return null;
  }

  if (!('data' in body)) {
    return body;
  }

  return body.data;
}

/**
 * Returns `true` if an object is empty
 *
 * @param obj
 * @return {boolean}
 */
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
/**
 * Convert options to query string parameters for an endpoint
 *
 * @param url
 * @param opts
 * @return {*}
 */


function parseOptions(url, opts) {
  if (isEmptyObject(opts)) {
    return url;
  }

  var params = toQueryString(opts);
  var sep = url.indexOf('?') === -1 ? '?' : '&';
  return "".concat(url).concat(sep).concat(params);
}
/**
 * Convert an object to query string format
 *
 * @see https://stackoverflow.com/a/31415775/639665
 *
 * @param obj
 * @param urlEncode
 * @returns {string}
 */


function toQueryString(obj) {
  var urlEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  //
  // Helper function that flattens an object, retaining key structure as a path array:
  //
  // Input: { prop1: 'x', prop2: { y: 1, z: 2 } }
  // Example output: [
  //     { path: [ 'prop1' ],      val: 'x' },
  //     { path: [ 'prop2', 'y' ], val: '1' },
  //     { path: [ 'prop2', 'z' ], val: '2' }
  // ]
  //
  function flattenObj(x) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var result = [];
    path = path || [];
    Object.keys(x).forEach(function (key) {
      if (!x.hasOwnProperty(key)) return;
      var newPath = path.slice();
      newPath.push(key);
      var vals = [];

      if (_typeof(x[key]) === 'object') {
        // @ts-ignore
        vals = flattenObj(x[key], newPath);
      } else {
        vals.push({
          path: newPath,
          val: x[key]
        });
      } // @ts-ignore


      vals.forEach(function (obj) {
        return result.push(obj);
      });
    }); // @ts-ignore

    return result;
  } // start with  flattening `obj`


  var parts = flattenObj(obj); // [ { path: [ ...parts ], val: ... }, ... ]
  // convert to array notation:

  parts = parts.map(function (varInfo) {
    if (varInfo.path.length === 1) {
      varInfo.path = varInfo.path[0];
    } else {
      var first = varInfo.path[0];
      var rest = varInfo.path.slice(1); // @ts-ignore

      varInfo.path = first + '[' + rest.join('][') + ']';
    }

    return varInfo;
  }); // parts.map
  // join the parts to a query-string url-component

  var queryString = parts.map(function (varInfo) {
    return varInfo.path + '=' + varInfo.val;
  }).join('&');
  return urlEncode ? encodeURIComponent(queryString) : queryString;
}

var APIBaseWrapper = /*#__PURE__*/function () {
  /**
   * @type {Function|null}
   */
  function APIBaseWrapper(client) {
    _classCallCheck(this, APIBaseWrapper);

    _defineProperty(this, "client", void 0);

    this.client = client;
  }
  /**
   * Callback fired before a request is made (breadcrumb logging)
   *
   * @param {String} method
   * @param {String} path
   * @param {Object} params
   */


  _createClass(APIBaseWrapper, [{
    key: "onRequest",
    value: function onRequest(method, path) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (typeof APIBaseWrapper.onRequestCb !== 'function') {
        return;
      }

      APIBaseWrapper.onRequestCb(method, path, params);
    }
  }, {
    key: "_wrapGet",
    value: function _wrapGet(path) {
      this.onRequest('GET', path);
      return this.client.get(path).then(function (_ref) {
        var data = _ref.data;
        return data;
      }).then(handleResponseBody);
    }
  }, {
    key: "_wrapPost",
    value: function _wrapPost(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.onRequest('POST', path, params);
      return this.client.post(path, params).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      });
    }
  }, {
    key: "_wrapPatch",
    value: function _wrapPatch(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.onRequest('PATCH', path, params);
      return this.client.patch(path, params).then(function (_ref3) {
        var data = _ref3.data;
        return data;
      });
    }
  }, {
    key: "_wrapDelete",
    value: function _wrapDelete(path) {
      this.onRequest('DELETE', path);
      return this.client["delete"](path).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      });
    }
    /**
     * Convert options to query string parameters for an endpoint
     *
     * @param url
     * @param opts
     * @return {*}
     */

  }, {
    key: "parseOptions",
    value: function parseOptions$1(url, opts) {
      return parseOptions(url, opts);
    }
  }]);

  return APIBaseWrapper;
}();

_defineProperty(APIBaseWrapper, "onRequestCb", null);

var APIUptimeWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(APIUptimeWrapper, _APIBaseWrapper);

  var _super = _createSuper(APIUptimeWrapper);

  function APIUptimeWrapper() {
    _classCallCheck(this, APIUptimeWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(APIUptimeWrapper, [{
    key: "getStatus",
    value: function getStatus() {
      return this._wrapGet('osb-uptime/status');
    }
  }]);

  return APIUptimeWrapper;
}(APIBaseWrapper);

var AuthWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(AuthWrapper, _APIBaseWrapper);

  var _super = _createSuper(AuthWrapper);

  function AuthWrapper() {
    _classCallCheck(this, AuthWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(AuthWrapper, [{
    key: "login",
    value: function login(email, password) {
      return this._wrapPost('auth/login', {
        email: email,
        password: password
      });
    }
  }, {
    key: "login2fa",
    value: function login2fa(email, password, code) {
      return this._wrapPost('auth/2fa', {
        email: email,
        password: password,
        code: code
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      return this._wrapPost('auth/logout');
    }
  }, {
    key: "forgot",
    value: function forgot(email) {
      return this._wrapPost('auth/forgot', {
        email: email
      });
    }
  }, {
    key: "register",
    value: function register(username, email, password, passwordConfirm, terms) {
      var receiveEmail = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      return this._wrapPost('auth/register', {
        name: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirm,
        terms: terms,
        receiveEmail: receiveEmail
      });
    }
  }]);

  return AuthWrapper;
}(APIBaseWrapper);

var BarrowsRepairWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(BarrowsRepairWrapper, _APIBaseWrapper);

  var _super = _createSuper(BarrowsRepairWrapper);

  function BarrowsRepairWrapper() {
    _classCallCheck(this, BarrowsRepairWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(BarrowsRepairWrapper, [{
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('barrows-repair');
    }
  }]);

  return BarrowsRepairWrapper;
}(APIBaseWrapper);

var BillingWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(BillingWrapper, _APIBaseWrapper);

  var _super = _createSuper(BillingWrapper);

  function BillingWrapper() {
    _classCallCheck(this, BillingWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(BillingWrapper, [{
    key: "createSession",
    value: function createSession(plan, provider) {
      return this._wrapPost('/billing/sessions', {
        plan: plan,
        provider: provider
      });
    }
  }, {
    key: "updateSession",
    value: function updateSession(sessionId, state) {
      return this._wrapPatch("/billing/sessions/".concat(sessionId), state);
    }
  }, {
    key: "getSession",
    value: function getSession(sessionId) {
      return this._wrapGet("/billing/sessions/".concat(sessionId));
    }
  }]);

  return BillingWrapper;
}(APIBaseWrapper);

var BlastFurnaceWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(BlastFurnaceWrapper, _APIBaseWrapper);

  var _super = _createSuper(BlastFurnaceWrapper);

  function BlastFurnaceWrapper() {
    _classCallCheck(this, BlastFurnaceWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(BlastFurnaceWrapper, [{
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('blast-furnace');
    }
  }]);

  return BlastFurnaceWrapper;
}(APIBaseWrapper);

var CombinationItemsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(CombinationItemsWrapper, _APIBaseWrapper);

  var _super = _createSuper(CombinationItemsWrapper);

  function CombinationItemsWrapper() {
    _classCallCheck(this, CombinationItemsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(CombinationItemsWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('combination-items', opts));
    }
  }]);

  return CombinationItemsWrapper;
}(APIBaseWrapper);

var DashboardWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(DashboardWrapper, _APIBaseWrapper);

  var _super = _createSuper(DashboardWrapper);

  function DashboardWrapper() {
    _classCallCheck(this, DashboardWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DashboardWrapper, [{
    key: "getDashboard",
    value: function getDashboard() {
      return this._wrapGet('/dashboard');
    }
  }]);

  return DashboardWrapper;
}(APIBaseWrapper);

var DecantPotionsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(DecantPotionsWrapper, _APIBaseWrapper);

  var _super = _createSuper(DecantPotionsWrapper);

  function DecantPotionsWrapper() {
    _classCallCheck(this, DecantPotionsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DecantPotionsWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('decant-potions', opts));
    }
  }]);

  return DecantPotionsWrapper;
}(APIBaseWrapper);

var DeviceWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(DeviceWrapper, _APIBaseWrapper);

  var _super = _createSuper(DeviceWrapper);

  function DeviceWrapper() {
    _classCallCheck(this, DeviceWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DeviceWrapper, [{
    key: "register",

    /**
     * Register Device to a User
     *
     * Required fields:
     *      - platform
     *      - platformVersion
     *      - width
     *      - height
     *      - uniqueId
     *      - appVersion
     *
     * Optional fields:
     *
     *      - pushInfo.pushToken
     *      - pushInfo.userId
     *
     * @param platform
     * @param platformVersion
     * @param width
     * @param height
     * @param uniqueId
     * @param appVersion
     * @param pushInfo
     * @return {*}
     */
    value: function register(_ref) {
      var platform = _ref.platform,
          platformVersion = _ref.platformVersion,
          width = _ref.width,
          height = _ref.height,
          uniqueId = _ref.uniqueId,
          appVersion = _ref.appVersion,
          pushInfo = _ref.pushInfo;
      return this._wrapPost('devices/register', {
        platform: platform,
        platformVersion: platformVersion,
        width: width,
        height: height,
        uniqueId: uniqueId,
        appVersion: appVersion,
        pushInfo: pushInfo
      });
    }
  }]);

  return DeviceWrapper;
}(APIBaseWrapper);

var FavouriteItemsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(FavouriteItemsWrapper, _APIBaseWrapper);

  var _super = _createSuper(FavouriteItemsWrapper);

  function FavouriteItemsWrapper() {
    _classCallCheck(this, FavouriteItemsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(FavouriteItemsWrapper, [{
    key: "addItem",
    value: function addItem(itemId) {
      return this._wrapPost("favourite-items", {
        item_id: itemId
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(favouriteItemsId) {
      return this._wrapDelete("favourite-items/".concat(favouriteItemsId));
    }
  }, {
    key: "deleteItemByItemId",
    value: function deleteItemByItemId(itemId) {
      return this._wrapDelete("favourite-items/itemId/".concat(itemId));
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('favourite-items', opts));
    }
    /**
     * Update favourite items sort order
     *
     * @param update
     * @returns {*}
     */

  }, {
    key: "reorder",
    value: function reorder(update) {
      return this._wrapPost('favourite-items/reorder', {
        update: update
      });
    }
  }]);

  return FavouriteItemsWrapper;
}(APIBaseWrapper);

var GELimitsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(GELimitsWrapper, _APIBaseWrapper);

  var _super = _createSuper(GELimitsWrapper);

  function GELimitsWrapper() {
    _classCallCheck(this, GELimitsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(GELimitsWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('ge-limits', opts));
    }
  }]);

  return GELimitsWrapper;
}(APIBaseWrapper);

var GraphWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(GraphWrapper, _APIBaseWrapper);

  var _super = _createSuper(GraphWrapper);

  function GraphWrapper() {
    _classCallCheck(this, GraphWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(GraphWrapper, [{
    key: "_wrapGet",
    value: function _wrapGet(path) {
      return this.client.get(path).then(handleResponseBody);
    }
  }, {
    key: "getDuration",
    value: function getDuration(duration, itemId) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "graph/".concat(itemId, "/").concat(duration);

      if (source !== null) {
        url = url + '?source=' + source;
      }

      return this._wrapGet(url);
    }
  }, {
    key: "getDay",
    value: function getDay(itemId) {
      var tenMinute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (tenMinute) {
        var dateFormat = 'Y-MM-DD';
        var date = moment__default['default']().format(dateFormat);
        var startDate = params.hasOwnProperty('start') ? moment__default['default'](params.start).format(dateFormat) : date;
        var endDate = params.hasOwnProperty('end') ? moment__default['default'](params.end).format(dateFormat) : date;
        var url = "graph/".concat(itemId, "/day?day=10&duration[start]=").concat(startDate, "&duration[end]=").concat(endDate);

        if (params.hasOwnProperty('source') && params.source !== null) {
          url = url + '&source=' + params.source;
        }

        return this._wrapGet(url);
      } else {
        var source = params.hasOwnProperty('source') && params.source !== null ? params.source : null;
        return this.getDuration('day', itemId, source);
      }
    }
  }, {
    key: "getWeek",
    value: function getWeek(itemId) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.getDuration('week', itemId, source);
    }
  }, {
    key: "getMonth",
    value: function getMonth(itemId) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.getDuration('month', itemId, source);
    }
  }, {
    key: "getQuarter",
    value: function getQuarter(itemId) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.getDuration('quarter', itemId, source);
    }
  }, {
    key: "getYear",
    value: function getYear(itemId) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.getDuration('year', itemId, source);
    }
  }, {
    key: "getCandlestick",
    value: function getCandlestick(duration, itemId) {
      return this._wrapGet("graph/candlestick/".concat(itemId, "/").concat(duration));
    }
  }, {
    key: "forceReload",
    value: function forceReload(duration, itemId) {
      return this._wrapPost("graph/force-reload", {
        itemId: itemId,
        duration: duration
      });
    }
  }]);

  return GraphWrapper;
}(APIBaseWrapper);

var HeartbeatWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(HeartbeatWrapper, _APIBaseWrapper);

  var _super = _createSuper(HeartbeatWrapper);

  function HeartbeatWrapper() {
    _classCallCheck(this, HeartbeatWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HeartbeatWrapper, [{
    key: "getHeartbeat",
    value: function getHeartbeat() {
      return this._wrapGet('heartbeat');
    }
  }]);

  return HeartbeatWrapper;
}(APIBaseWrapper);

var HerbloreWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(HerbloreWrapper, _APIBaseWrapper);

  var _super = _createSuper(HerbloreWrapper);

  function HerbloreWrapper() {
    _classCallCheck(this, HerbloreWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HerbloreWrapper, [{
    key: "getCleanHerbs",
    value: function getCleanHerbs() {
      return this._wrapGet('herblore/clean-herbs');
    }
  }, {
    key: "getMakePotions",
    value: function getMakePotions() {
      return this._wrapGet('herblore/make-potions');
    }
  }, {
    key: "getUnfinishedPotions",
    value: function getUnfinishedPotions() {
      return this._wrapGet('herblore/unfinished-potions');
    }
  }]);

  return HerbloreWrapper;
}(APIBaseWrapper);

var HighAlchemyWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(HighAlchemyWrapper, _APIBaseWrapper);

  var _super = _createSuper(HighAlchemyWrapper);

  function HighAlchemyWrapper() {
    _classCallCheck(this, HighAlchemyWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HighAlchemyWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('high-alchemy', opts));
    }
  }]);

  return HighAlchemyWrapper;
}(APIBaseWrapper);

var HighVolumeWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(HighVolumeWrapper, _APIBaseWrapper);

  var _super = _createSuper(HighVolumeWrapper);

  function HighVolumeWrapper() {
    _classCallCheck(this, HighVolumeWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HighVolumeWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('high-volume', opts));
    }
  }]);

  return HighVolumeWrapper;
}(APIBaseWrapper);

// class Testing extends APIBaseWrapper implements HighestMargins {
//     getItems(opts: object = {filters: false}): Promise<ItemArray> {
//         return this._wrapGet(this.parseOptions('highest-margins', opts))
//     }
// }
//
// Testing.getItems().then(data => data[0].approxProfit);
var HighestMarginsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(HighestMarginsWrapper, _APIBaseWrapper);

  var _super = _createSuper(HighestMarginsWrapper);

  function HighestMarginsWrapper() {
    _classCallCheck(this, HighestMarginsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(HighestMarginsWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('highest-margins', opts));
    }
  }]);

  return HighestMarginsWrapper;
}(APIBaseWrapper);

var ItemSetsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(ItemSetsWrapper, _APIBaseWrapper);

  var _super = _createSuper(ItemSetsWrapper);

  function ItemSetsWrapper() {
    _classCallCheck(this, ItemSetsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(ItemSetsWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('item-sets', opts));
    }
  }]);

  return ItemSetsWrapper;
}(APIBaseWrapper);

var ItemsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(ItemsWrapper, _APIBaseWrapper);

  var _super = _createSuper(ItemsWrapper);

  function ItemsWrapper() {
    _classCallCheck(this, ItemsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(ItemsWrapper, [{
    key: "getAllItems",
    value: function getAllItems() {
      return this._wrapGet('items');
    }
  }, {
    key: "getItem",
    value: function getItem(itemId) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var url = !detail ? "items/".concat(itemId) : "items/".concat(itemId, "?detail=true");
      return this._wrapGet(url);
    }
  }, {
    key: "getItems",
    value: function getItems() {
      for (var _len = arguments.length, itemIds = new Array(_len), _key = 0; _key < _len; _key++) {
        itemIds[_key] = arguments[_key];
      }

      return this._wrapGet("items/multi/".concat(itemIds.join(',')));
    }
  }, {
    key: "search",
    value: function search(query) {
      return this._wrapGet("items/search/".concat(query));
    }
  }]);

  return ItemsWrapper;
}(APIBaseWrapper);

var LeaderboardWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(LeaderboardWrapper, _APIBaseWrapper);

  var _super = _createSuper(LeaderboardWrapper);

  function LeaderboardWrapper() {
    _classCallCheck(this, LeaderboardWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(LeaderboardWrapper, [{
    key: "getLeaderboard",
    value: function getLeaderboard(slug) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.get(this.parseOptions("leaderboard/".concat(slug), opts)).then(function (_ref) {
        var data = _ref.data;
        return data;
      });
    }
  }, {
    key: "getRank",
    value: function getRank(slug) {
      return this._wrapGet("leaderboard/rank/".concat(slug));
    }
  }, {
    key: "getSummary",
    value: function getSummary() {
      return this._wrapGet('leaderboard');
    }
  }]);

  return LeaderboardWrapper;
}(APIBaseWrapper);

var MagicTabletsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(MagicTabletsWrapper, _APIBaseWrapper);

  var _super = _createSuper(MagicTabletsWrapper);

  function MagicTabletsWrapper() {
    _classCallCheck(this, MagicTabletsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(MagicTabletsWrapper, [{
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('magic-tablets');
    }
  }]);

  return MagicTabletsWrapper;
}(APIBaseWrapper);

var MarketWatchWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(MarketWatchWrapper, _APIBaseWrapper);

  var _super = _createSuper(MarketWatchWrapper);

  function MarketWatchWrapper() {
    _classCallCheck(this, MarketWatchWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(MarketWatchWrapper, [{
    key: "getIndex",
    value: function getIndex(indexId) {
      return this._wrapGet("market-watch/".concat(indexId));
    }
  }, {
    key: "getSummary",
    value: function getSummary() {
      return this._wrapGet('market-watch');
    }
  }]);

  return MarketWatchWrapper;
}(APIBaseWrapper);

var NewItemsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(NewItemsWrapper, _APIBaseWrapper);

  var _super = _createSuper(NewItemsWrapper);

  function NewItemsWrapper() {
    _classCallCheck(this, NewItemsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(NewItemsWrapper, [{
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('new-items', opts));
    }
  }]);

  return NewItemsWrapper;
}(APIBaseWrapper);

var NotificationsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(NotificationsWrapper, _APIBaseWrapper);

  var _super = _createSuper(NotificationsWrapper);

  function NotificationsWrapper() {
    _classCallCheck(this, NotificationsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(NotificationsWrapper, [{
    key: "getNotifications",
    value: function getNotifications() {
      return this._wrapGet('notifications');
    }
  }, {
    key: "getNotification",
    value: function getNotification(notificationId) {
      return this._wrapGet("notifications/".concat(notificationId));
    }
  }, {
    key: "markAllAsRead",
    value: function markAllAsRead() {
      return this._wrapPost("notifications/mark-read");
    }
  }]);

  return NotificationsWrapper;
}(APIBaseWrapper);

var PriceAlertWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(PriceAlertWrapper, _APIBaseWrapper);

  var _super = _createSuper(PriceAlertWrapper);

  function PriceAlertWrapper() {
    _classCallCheck(this, PriceAlertWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(PriceAlertWrapper, [{
    key: "getAlerts",

    /**
     * Get Price Alerts
     *
     * `itemId` can be specified to load price alerts for a single item
     *
     * @param {Number} itemId
     * @return {*}
     */
    value: function getAlerts() {
      var itemId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var url = itemId ? "/price-alerts/".concat(itemId) : '/price-alerts';
      return this._wrapGet(url);
    }
    /**
     * Create Price Alert
     *
     * @return {*}
     */

  }, {
    key: "createAlert",
    value: function createAlert(itemId, field, type, price) {
      var methods = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var maxTriggers = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10;
      return this._wrapPost('/price-alerts', {
        itemId: itemId,
        field: field,
        type: type,
        price: price,
        methods: methods,
        maxTriggers: maxTriggers
      });
    }
  }, {
    key: "updateAlert",
    value: function updateAlert(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this._wrapPost("/price-alerts/".concat(id), _objectSpread2({
        status: status
      }, params));
    }
  }, {
    key: "deleteAlert",
    value: function deleteAlert(id) {
      return this._wrapDelete("/price-alerts/".concat(id));
    }
  }]);

  return PriceAlertWrapper;
}(APIBaseWrapper);

var ProfitTrackerWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(ProfitTrackerWrapper, _APIBaseWrapper);

  var _super = _createSuper(ProfitTrackerWrapper);

  function ProfitTrackerWrapper() {
    _classCallCheck(this, ProfitTrackerWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(ProfitTrackerWrapper, [{
    key: "getTransactions",
    value: function getTransactions() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get(this.parseOptions('/profit-tracker', opts)).then(function (_ref) {
        var data = _ref.data;
        return data;
      });
    }
  }, {
    key: "getTransaction",
    value: function getTransaction(id) {
      return this._wrapGet("/profit-tracker/".concat(id));
    }
  }, {
    key: "createTransaction",
    value: function createTransaction(itemId, qty, buyPrice) {
      var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this._wrapPost('/profit-tracker', _objectSpread2({
        item_id: itemId,
        qty: qty,
        buy_price: buyPrice
      }, params));
    }
  }, {
    key: "updateTransaction",
    value: function updateTransaction(id, status) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this._wrapPost("/profit-tracker/".concat(id), _objectSpread2({
        status: status
      }, params));
    }
  }, {
    key: "deleteTransaction",
    value: function deleteTransaction(id) {
      return this._wrapDelete("/profit-tracker/".concat(id));
    }
  }, {
    key: "getBuyingTransactions",
    value: function getBuyingTransactions() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get(this.parseOptions('/profit-tracker/buying', opts)).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      });
    }
  }, {
    key: "getBoughtTransactions",
    value: function getBoughtTransactions() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get(this.parseOptions('/profit-tracker/bought', opts)).then(function (_ref3) {
        var data = _ref3.data;
        return data;
      });
    }
  }, {
    key: "getSellingTransactions",
    value: function getSellingTransactions() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get(this.parseOptions('/profit-tracker/selling', opts)).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      });
    }
  }, {
    key: "getSoldTransactions",
    value: function getSoldTransactions() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get(this.parseOptions('/profit-tracker/sold', opts)).then(function (_ref5) {
        var data = _ref5.data;
        return data;
      });
    }
  }, {
    key: "getActiveTransactions",
    value: function getActiveTransactions() {
      return this._wrapGet('/profit-tracker/active-transactions');
    }
  }, {
    key: "getPreviousTransactions",
    value: function getPreviousTransactions(itemId) {
      return this._wrapGet("/profit-tracker/previous-transactions/".concat(itemId));
    }
  }, {
    key: "getSummary",
    value: function getSummary() {
      return this._wrapGet('/profit-tracker/summary');
    }
  }, {
    key: "getMostProfitable",
    value: function getMostProfitable() {
      return this._wrapGet('/profit-tracker/most-profitable');
    }
  }, {
    key: "clear",
    value: function clear() {
      return this._wrapPost('/profit-tracker/clear');
    }
  }]);

  return ProfitTrackerWrapper;
}(APIBaseWrapper);

var PlankMakingWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(PlankMakingWrapper, _APIBaseWrapper);

  var _super = _createSuper(PlankMakingWrapper);

  function PlankMakingWrapper() {
    _classCallCheck(this, PlankMakingWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(PlankMakingWrapper, [{
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('plank-making');
    }
  }]);

  return PlankMakingWrapper;
}(APIBaseWrapper);

var RSUpdatesWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(RSUpdatesWrapper, _APIBaseWrapper);

  var _super = _createSuper(RSUpdatesWrapper);

  function RSUpdatesWrapper() {
    _classCallCheck(this, RSUpdatesWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(RSUpdatesWrapper, [{
    key: "get",
    value: function get() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get(this.parseOptions('rs-updates', opts)).then(function (_ref) {
        var data = _ref.data;
        return data;
      });
    }
  }, {
    key: "getUpdate",
    value: function getUpdate(id) {
      return this._wrapGet("rs-updates/".concat(id));
    }
  }]);

  return RSUpdatesWrapper;
}(APIBaseWrapper);

var StatsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(StatsWrapper, _APIBaseWrapper);

  var _super = _createSuper(StatsWrapper);

  function StatsWrapper() {
    _classCallCheck(this, StatsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(StatsWrapper, [{
    key: "getGlobalStats",
    value: function getGlobalStats() {
      return this._wrapGet('stats');
    }
  }, {
    key: "getOnlineUsers",
    value: function getOnlineUsers() {
      return this._wrapGet('stats/online');
    }
  }]);

  return StatsWrapper;
}(APIBaseWrapper);

var StoreProfitWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(StoreProfitWrapper, _APIBaseWrapper);

  var _super = _createSuper(StoreProfitWrapper);

  function StoreProfitWrapper() {
    _classCallCheck(this, StoreProfitWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(StoreProfitWrapper, [{
    key: "getStores",
    value: function getStores() {
      return this._wrapGet('stores');
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('stores/profit');
    }
  }]);

  return StoreProfitWrapper;
}(APIBaseWrapper);

var SubscriptionsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(SubscriptionsWrapper, _APIBaseWrapper);

  var _super = _createSuper(SubscriptionsWrapper);

  function SubscriptionsWrapper() {
    _classCallCheck(this, SubscriptionsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionsWrapper, [{
    key: "getSubscription",
    value: function getSubscription(subscriptionId) {
      return this._wrapGet("/subscriptions/".concat(subscriptionId));
    }
  }, {
    key: "getUserSubscriptions",
    value: function getUserSubscriptions(userId) {
      return this._wrapGet("/subscriptions/user/".concat(userId));
    }
  }, {
    key: "terminateSubscription",
    value: function terminateSubscription(subscriptionId) {
      return this._wrapDelete("/subscriptions/".concat(subscriptionId));
    }
  }, {
    key: "refundSubscription",
    value: function refundSubscription(subscriptionId, amount) {
      return this._wrapPost("/subscriptions/".concat(subscriptionId, "/refund"), {
        amount: amount
      });
    }
  }, {
    key: "createSubscription",
    value: function createSubscription(transactionReceipt, platform) {
      var sessionId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this._wrapPost('/subscriptions', {
        transactionReceipt: transactionReceipt,
        platform: platform,
        sessionId: sessionId
      });
    }
  }]);

  return SubscriptionsWrapper;
}(APIBaseWrapper);

var SuggestedItemsWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(SuggestedItemsWrapper, _APIBaseWrapper);

  var _super = _createSuper(SuggestedItemsWrapper);

  function SuggestedItemsWrapper() {
    _classCallCheck(this, SuggestedItemsWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(SuggestedItemsWrapper, [{
    key: "refresh",
    value: function refresh() {
      return this._wrapGet('suggested-items/refresh');
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        filters: false
      };
      return this._wrapGet(this.parseOptions('suggested-items', opts));
    }
  }]);

  return SuggestedItemsWrapper;
}(APIBaseWrapper);

var TanLeatherWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(TanLeatherWrapper, _APIBaseWrapper);

  var _super = _createSuper(TanLeatherWrapper);

  function TanLeatherWrapper() {
    _classCallCheck(this, TanLeatherWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(TanLeatherWrapper, [{
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('tan-leather');
    }
  }]);

  return TanLeatherWrapper;
}(APIBaseWrapper);

var TreeSaplingWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(TreeSaplingWrapper, _APIBaseWrapper);

  var _super = _createSuper(TreeSaplingWrapper);

  function TreeSaplingWrapper() {
    _classCallCheck(this, TreeSaplingWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(TreeSaplingWrapper, [{
    key: "getItems",
    value: function getItems() {
      return this._wrapGet('tree-sapling');
    }
  }]);

  return TreeSaplingWrapper;
}(APIBaseWrapper);

var UserWrapper = /*#__PURE__*/function (_APIBaseWrapper) {
  _inherits(UserWrapper, _APIBaseWrapper);

  var _super = _createSuper(UserWrapper);

  function UserWrapper() {
    _classCallCheck(this, UserWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(UserWrapper, [{
    key: "getById",
    value: function getById(userId) {
      return this._wrapGet("users/".concat(userId));
    }
  }, {
    key: "search",
    value: function search(query) {
      return this._wrapPost("users/search", {
        query: query
      });
    }
  }, {
    key: "getAuthenticateUser",
    value: function getAuthenticateUser() {
      return this._wrapGet('users/me');
    }
  }]);

  return UserWrapper;
}(APIBaseWrapper);

var createApi = function createApi(client) {
  return {
    APIUptime: new APIUptimeWrapper(client),
    Auth: new AuthWrapper(client),
    BarrowsRepair: new BarrowsRepairWrapper(client),
    Billing: new BillingWrapper(client),
    BlastFurnace: new BlastFurnaceWrapper(client),
    CombinationItems: new CombinationItemsWrapper(client),
    Dashboard: new DashboardWrapper(client),
    DecantPotions: new DecantPotionsWrapper(client),
    Device: new DeviceWrapper(client),
    FavouriteItems: new FavouriteItemsWrapper(client),
    GELimits: new GELimitsWrapper(client),
    Graphs: new GraphWrapper(client),
    Heartbeat: new HeartbeatWrapper(client),
    Herblore: new HerbloreWrapper(client),
    HighAlchemy: new HighAlchemyWrapper(client),
    HighVolume: new HighVolumeWrapper(client),
    HighestMargins: new HighestMarginsWrapper(client),
    ItemSets: new ItemSetsWrapper(client),
    Items: new ItemsWrapper(client),
    Leaderboard: new LeaderboardWrapper(client),
    MagicTablets: new MagicTabletsWrapper(client),
    MarketWatch: new MarketWatchWrapper(client),
    NewItems: new NewItemsWrapper(client),
    Notifications: new NotificationsWrapper(client),
    PriceAlert: new PriceAlertWrapper(client),
    ProfitTracker: new ProfitTrackerWrapper(client),
    PlankMaking: new PlankMakingWrapper(client),
    RSUpdates: new RSUpdatesWrapper(client),
    Stats: new StatsWrapper(client),
    StoreProfit: new StoreProfitWrapper(client),
    Subscriptions: new SubscriptionsWrapper(client),
    SuggestedItems: new SuggestedItemsWrapper(client),
    TanLeather: new TanLeatherWrapper(client),
    TreeSapling: new TreeSaplingWrapper(client),
    Users: new UserWrapper(client),

    /**
     * Get GT App Manifest JSON
     *
     * @return {Promise<any>}
     */
    getManifest: function getManifest() {
      // @ts-ignore
      var apiUrl = client.defaults.baseURL.replace('/api', '');
      return new Promise(function (resolve, reject) {
        client.get("".concat(apiUrl, "app_manifest.json")).then(function (data) {
          if (data.hasOwnProperty('data')) {
            resolve(data.data);
          } else {
            reject(null);
          }
        })["catch"](function (err) {
          return reject(err);
        });
      });
    },

    /**
     * Attach a callback to each request.
     *
     * Used for error logging via Bugsnag or Sentry
     *
     * `callback` will be called with 3 parameters: `method`, `path`, `params`
     *
     * @param {Function} callback
     */
    attachOnRequest: function attachOnRequest(callback) {
      APIBaseWrapper.onRequestCb = callback;
    },

    /**
     * Get underlying Axios client instance
     */
    getClient: function getClient() {
      return client;
    }
  };
};

function captureStackTrace(targetObject) {
  var constructorOpt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(targetObject, constructorOpt);
  }
}

var InvalidApiKey = /*#__PURE__*/function (_Error) {
  _inherits(InvalidApiKey, _Error);

  var _super = _createSuper(InvalidApiKey);

  function InvalidApiKey() {
    var _this;

    _classCallCheck(this, InvalidApiKey);

    _this = _super.call(this, 'Specified API key was missing or invalid');
    captureStackTrace(_assertThisInitialized(_this), InvalidApiKey);
    return _this;
  }

  return InvalidApiKey;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var GE_TRACKER_API_URL = 'https://www.ge-tracker.com/api';
var GE_TRACKER_API_VERSION = 'v2';
var DefaultOptions = {
  // set the base URL for all API calls made on this Axios instance
  baseURL: GE_TRACKER_API_URL,
  // set a sane default for the request TTL
  timeout: 30e3,
  // disable redirects -- API should NOT return a redirect response
  maxRedirects: 0,
  // explicitly set the default response type to JSON
  responseType: 'json',
  // specify a custom user-agent header to identify the client used
  // and for a point of contact
  headers: {
    'User-Agent': 'ge-tracker-api client <https://github.com/gtjamesa/ge-tracker-api>',
    'Accept': "application/x.getracker.".concat(GE_TRACKER_API_VERSION, "+json")
  }
};

function isUnauthorizedResponse(error) {
  return error.response && error.response.status === 401;
}

function createAuthHeader(apiKey) {
  return {
    // Authorization header is required with a valid API key for all API calls
    Authorization: "Bearer ".concat(apiKey)
  };
}

function createClient(apiKey) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var options = merge__default['default'](DefaultOptions, opts || {});
  var instance = Axios__default['default'].create(merge__default['default'](options, {
    headers: createAuthHeader(apiKey)
  })); // add custom response interceptors

  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // intercept 401 Unauthorized responses and reject the promise chain with
    // an appropriate typed error
    if (isUnauthorizedResponse(error)) {
      return Promise.reject(new InvalidApiKey());
    }

    return Promise.reject(error);
  });
  return instance;
}

function getApiKeyFromEnv() {
  // @ts-ignore
  return process.env.GE_TRACKER_API_KEY;
}

var createInstance = function createInstance(apiKey) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return createApi(createClient(apiKey, opts));
};

var createClient$1 = function createClient(apiKey) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return createInstance(apiKey, opts);
};

var createClientFromEnv = function createClientFromEnv() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return createInstance(getApiKeyFromEnv(), opts);
};

exports.createClient = createClient$1;
exports.createClientFromEnv = createClientFromEnv;