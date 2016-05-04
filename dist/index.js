'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sts = undefined;

var _reactNative = require('react-native');

var _btn = require('./btn');

var _lister = require('./lister');

var Scroller = _reactNative.ScrollView;
var sts = _reactNative.StyleSheet;

exports.sts = sts;

// all elements must be one-word, like html elements

exports.default = {
  View: _reactNative.View,
  Text: _reactNative.Text,
  Btn: _btn.Btn,
  Lister: _lister.Lister,
  Scroller: Scroller
};