'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// inheritance

var Person = function () {
  function Person(name, address, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.address = address;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'printInfo',
    value: function printInfo() {
      console.log('name: ' + this.name);
      console.log('address: ' + this.address);
      console.log('age: ' + this.age);
      console.log('');
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(rollNo, name, address, age) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, address, age));

    _this.rollNo = rollNo;
    return _this;
  }

  _createClass(Student, [{
    key: 'printInfo',
    value: function printInfo() {
      console.log('roll no: ' + this.rollNo);
      // console.log(`name: ${this.name}`)
      // console.log(`address: ${this.address}`)
      // console.log(`age: ${this.age}`)
      // console.log('')
      _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'printInfo', this).call(this);
    }
  }]);

  return Student;
}(Person);

var p = new Person('person1', 'pune', 20);
p.printInfo();

var s = new Student(1, 'student 1', 'mumbai', 26);
s.printInfo();
