'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var deviceWidth = _reactNative.Dimensions.get('window').width;

var responsive = function responsive(size) {
    if (_reactNative.PixelRatio.get() >= 3 && _reactNative.Platform == 'ios' && size == 1) {
        return size;
    }

    return deviceWidth / 750 * size;
};
exports.default = responsive;
module.exports = exports['default'];