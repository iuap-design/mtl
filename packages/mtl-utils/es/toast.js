"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (msg) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { duration: 1000, backgroundColor: "rgba(0,0,0,.8)" };

    return _reactNativeRootToast2.default.show(msg, options);
};

var _reactNativeRootToast = require("react-native-root-toast");

var _reactNativeRootToast2 = _interopRequireDefault(_reactNativeRootToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"];