'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHeaders = exports.getHeader = exports.setHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 基于 HTTP 的 Request 封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _reactNative = require('react-native');

var _log = require('./log');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 默认的头信息
 */
var headers = {
    uid: 0,
    jsversion: "0.1.1",
    utoken: "",
    platform: _reactNative.Platform.OS,
    clientid: "db7b4e395b7a0ec75c6078ddf7db276c588a694f",
    version: '1.0.5',
    model: "apple",
    OSVersion: '11.2',
    brand: "apple",
    channel: "appstore",
    net: 'WIFI',
    bundle: "13b2bcaba812600af5465c8c649f34d3",
    xcrole: 0
};

/**
 * 设置headers头
 * @param {*} name 
 * @param {*} value 
 */
var setHeader = exports.setHeader = function setHeader(name, value) {
    if (!name) return;
    headers[name] = value;
};
/**
 * 获取头的信息
 * @param {*} name 
 * @param {*} value 
 */
var getHeader = exports.getHeader = function getHeader(name, value) {
    if (!name) return "";
    return headers[name] || '';
};

var getHeaders = exports.getHeaders = function getHeaders() {
    return headers;
};

/**
 * 混合参数
 * @param {*} data 
 */
var urlEncoded = function urlEncoded(data) {
    if (typeof data == 'string') return encodeURIComponent(data);
    var params = [];
    for (var k in data) {
        if (!data.hasOwnProperty(k)) return;
        var v = data[k];
        if (typeof v == 'string') v = encodeURIComponent(v);
        if (v == undefined) v = '';
        params.push(encodeURIComponent(k) + '=' + v);
    }
    return params.join('&');
};

/**
 * @class Request
 */

var Request = function () {
    function Request(obj) {
        _classCallCheck(this, Request);

        var domain = obj.domain,
            baseUrl = obj.baseUrl;


        this.domain = domain ? domain : 'https://dalingjia.com';
        this.baseUrl = baseUrl ? baseUrl : domain + '/xc_sale';
        // this.touchBaseUrl = touchBaseUrl ? touchBaseUrl : 'https://dalingjia.com/touch'
    }
    /**
    * 检测返回状态码
    * @param {*} status 
    * @param {*} res 
    */


    _createClass(Request, [{
        key: '_checkStatus',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(status, res, url) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(status !== 200)) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.t0 = _log.logWarm;
                                _context.next = 4;
                                return res.text();

                            case 4:
                                _context.t1 = _context.sent;
                                _context.t2 = url;
                                _context.t3 = headers;
                                (0, _context.t0)('请求失败参数', _context.t1, _context.t2, _context.t3);
                                throw new Error('网络连接失败，请检查网络');

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _checkStatus(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return _checkStatus;
        }()
        /**
        * 检查后端返回的状态码
        * @param {*} status 
        */

    }, {
        key: '_checkAppStatus',
        value: function _checkAppStatus(json, url) {
            if (json.status != 0) {
                (0, _log.logWarm)('返回状态报错', json, url);
                throw new Error('' + json.errorMsg);
            }
        }
        /**
         * 内部实现网络请求
         * @param {*} url 
         * @param {*} options 
         */

    }, {
        key: '_request',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, options, type) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                url = url.indexOf('http') == 0 ? url : url.indexOf('/api') == 0 ? this.domain + url : this.baseUrl + url;
                                _context2.next = 3;
                                return fetch(url, options);

                            case 3:
                                res = _context2.sent;

                                this._checkStatus(res.status, res, url);

                                if (!(type === 'json')) {
                                    _context2.next = 9;
                                    break;
                                }

                                _context2.next = 8;
                                return this._jsonFactory(res, url, options);

                            case 8:
                                return _context2.abrupt('return', _context2.sent);

                            case 9:
                                _context2.next = 11;
                                return this._jsonFactory(res, url, options);

                            case 11:
                                return _context2.abrupt('return', _context2.sent);

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function _request(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return _request;
        }()
        /**
             * 处理json数据
             * @param {*} res 
             * @param {*} url 
             */

    }, {
        key: '_jsonFactory',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res, url, options) {
                var json, txt;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                json = void 0;
                                txt = '';
                                _context3.prev = 2;
                                _context3.next = 5;
                                return res.text();

                            case 5:
                                txt = _context3.sent;
                                _context3.next = 12;
                                break;

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3['catch'](2);

                                (0, _log.log)('未拿到返回字符串', { url: url, txt: txt });
                                throw new Error('数据格式错误');

                            case 12:
                                _context3.prev = 12;

                                json = JSON.parse(txt);
                                _context3.next = 20;
                                break;

                            case 16:
                                _context3.prev = 16;
                                _context3.t1 = _context3['catch'](12);

                                (0, _log.logErr)('返回数据格式错误', { url: url, txt: txt });
                                throw new Error('数据格式错误');

                            case 20:
                                this._checkAppStatus(json, url);
                                (0, _log.log)("请求返回", json, url, options);
                                return _context3.abrupt('return', json.data);

                            case 23:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[2, 8], [12, 16]]);
            }));

            function _jsonFactory(_x7, _x8, _x9) {
                return _ref3.apply(this, arguments);
            }

            return _jsonFactory;
        }()
        /**
         * get请求
         * @param {*} url 
         */

    }, {
        key: 'get',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, data) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (data) data = urlEncoded(data);
                                if (url.indexOf('?') < 0 && data) url += '?' + data;
                                return _context4.abrupt('return', this._request(url, {
                                    method: 'GET',
                                    headers: headers,
                                    timeout: 10000
                                }, 'json'));

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function get(_x10, _x11) {
                return _ref4.apply(this, arguments);
            }

            return get;
        }()
        /**
         * post请求
         * @param {*} url 
         * @param {*} data 
         */

    }, {
        key: 'post',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url, data) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                return _context5.abrupt('return', this._request(url, {
                                    method: 'POST',
                                    headers: Object.assign(headers, { 'Content-Type': 'application/x-www-form-urlencoded' }),
                                    timeout: 10000,
                                    body: urlEncoded(data)
                                }, 'json'));

                            case 1:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function post(_x12, _x13) {
                return _ref5.apply(this, arguments);
            }

            return post;
        }()
    }]);

    return Request;
}();

exports.default = Request;