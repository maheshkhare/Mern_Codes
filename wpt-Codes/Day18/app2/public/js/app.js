'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    // binding the methods to the class
    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.onIncrement = _this.onIncrement.bind(_this);
    _this.onDecrement = _this.onDecrement.bind(_this);
    _this.onReset = _this.onReset.bind(_this);

    // this.props is a readonly object
    // component CAN NOT change props

    // create a state for this component
    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'onIncrement',
    value: function onIncrement() {
      console.log('incrementing counter by one');
      // console.log(`counter = ${this.state.counter}`)

      // update the state
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: 'onDecrement',
    value: function onDecrement() {
      console.log('decrementing counter by one');

      // update the state
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }, {
    key: 'onReset',
    value: function onReset() {
      console.log('setting counter to zero');

      // update the state
      this.setState(function (prevState) {
        return {
          counter: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h4',
          null,
          this.props.title
        ),
        React.createElement(
          'div',
          null,
          'Counter: ',
          this.state.counter
        ),
        React.createElement(
          'button',
          { onClick: this.onDecrement },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.onIncrement },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.onReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, { title: 'Counter app title' }), document.getElementById('app'));
