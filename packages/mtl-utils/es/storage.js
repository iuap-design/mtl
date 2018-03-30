'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllKeys = exports.clear = exports.removeItem = exports.setItem = exports.getItem = undefined;

var _reactNative = require('react-native');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 获取存储的数据
 * @param {*} key 
 */
var getItem = exports.getItem = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
    var item;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _reactNative.AsyncStorage.getItem(key);

          case 2:
            item = _context.sent;

            if (item) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', null);

          case 5:
            return _context.abrupt('return', JSON.parse(item).v || null);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getItem(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 存入数据
 * @param {*} key 
 * @param {*} value 
 */
var setItem = exports.setItem = function setItem(key, value) {
  return _reactNative.AsyncStorage.setItem(key, JSON.stringify({
    v: value
  }));
};

/**
 * 删除已经存在的数据
 * @param {*} key 
 */
var removeItem = exports.removeItem = function removeItem(key) {
  return _reactNative.AsyncStorage.removeItem(key);
};

/**
 * 清除所有
 */
var clear = exports.clear = function clear() {
  return _reactNative.AsyncStorage.clear();
};

/**
 * 获取所有的key
 */
var getAllKeys = exports.getAllKeys = function getAllKeys() {
  return _reactNative.AsyncStorage.getAllKeys();
};