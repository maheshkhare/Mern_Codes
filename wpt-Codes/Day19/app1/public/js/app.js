'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterComponent = function (_React$Component) {
  _inherits(CounterComponent, _React$Component);

  function CounterComponent(props) {
    _classCallCheck(this, CounterComponent);

    var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this, props));

    _this.onIncrement = _this.onIncrement.bind(_this);
    _this.onDecrement = _this.onDecrement.bind(_this);

    _this.state = {
      counter: 0
    };

    console.log('inside constructor');
    return _this;
  }

  _createClass(CounterComponent, [{
    key: 'onIncrement',
    value: function onIncrement() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: 'onDecrement',
    value: function onDecrement() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }

    // componentWillMount() {
    //   console.log('component will mount')
    // }

    // will get called at the begining of lifecycle

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('component did mount');

      // if present, load the previous value from local storage
      // NOTE: local storage value will be always in the form of string, so convert it to integer
      this.setState({
        counter: localStorage['counter'] ? parseInt(localStorage['counter'], 10) : 0
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('component did update');

      // console.log(prevProps)
      // console.log(prevState)
      // console.log(this.state)

      if (prevState.counter != this.state.counter) {
        // persist the state
        localStorage.setItem('counter', this.state.counter);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('component will unmount');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'title' },
          React.createElement(
            'h1',
            null,
            'Counter App'
          ),
          React.createElement(
            'p',
            null,
            'Counter: ',
            this.state.counter
          )
        ),
        React.createElement(
          'div',
          { className: 'title' },
          React.createElement(
            'button',
            { onClick: this.onIncrement, className: 'btn btn-warning' },
            '+1'
          ),
          React.createElement(
            'button',
            { onClick: this.onDecrement, className: 'btn btn-warning' },
            '-1'
          )
        )
      );
    }
  }]);

  return CounterComponent;
}(React.Component);

ReactDOM.render(React.createElement(CounterComponent, null), document.getElementById('app'));
