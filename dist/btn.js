'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Btn = exports.Btn = function (_React$Component) {
  _inherits(Btn, _React$Component);

  function Btn(props) {
    _classCallCheck(this, Btn);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Btn).call(this, props));

    _this.cmpTouchableHighlight = _react2.default.createFactory(_reactNative.TouchableHighlight);
    _this.cmpText = _react2.default.createFactory(_reactNative.Text);
    return _this;
  }

  _createClass(Btn, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return this.cmpTouchableHighlight({
        onPress: function onPress(e) {
          _this2.props.onClick(e);
        },
        style: this.props.style,
        // The color of the underlay that will show through when the touch is active.
        underlayColor: this.props.underlayColor
      }, this.cmpText(null, this.props.children));
    }
  }]);

  return Btn;
}(_react2.default.Component);

Btn.propTypes = {
  onClick: _react2.default.PropTypes.func.isRequired
};