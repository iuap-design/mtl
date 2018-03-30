"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 统一日志处理
 * 获取所有日志、获取单条日志、打印日志、打印警告提示、打印错误提示
 */

var logs = [];

var add = function add(log) {
    logs.push(log);
    if (logs.length > 200) logs.shift();
};

var getLogs = exports.getLogs = function getLogs() {
    return logs;
};

var getLog = exports.getLog = function getLog(index) {
    return logs[index];
};

var log = exports.log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    add(args);

    if (__DEV__) {
        var _console;

        var info = args.concat();

        info[0] = "%c" + info[0];
        info.splice(1, 0, 'color: #2d8cf0');

        (_console = console).log.apply(_console, _toConsumableArray(info));
    }
};

var logWarm = exports.logWarm = function logWarm() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    add(args);

    if (__DEV__) {
        var _console2;

        var info = args.concat();

        info[0] = "%c" + info[0];
        info.splice(1, 0, 'color: #ff9900');

        (_console2 = console).warn.apply(_console2, _toConsumableArray(info));
    }
};

var logErr = exports.logErr = function logErr() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    add(args);

    if (__DEV__) {
        var _console3;

        var info = args.concat();

        info[0] = "%c" + info[0];
        info.splice(1, 0, 'color: #ed3f14');

        (_console3 = console).error.apply(_console3, _toConsumableArray(info));
    }
};