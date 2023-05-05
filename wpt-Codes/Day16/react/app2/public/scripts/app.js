'use strict';

var personName = 'person2';
var age = 41;
var address = 'mumbai';
var email = 'person2@test.com';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h4',
    null,
    'Person'
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'strong',
      null,
      'name: '
    ),
    ' ',
    personName
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'strong',
      null,
      'age: '
    ),
    ' ',
    age
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'strong',
      null,
      'address: '
    ),
    ' ',
    address
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'strong',
      null,
      'email: '
    ),
    ' ',
    email
  )
);

var root = document.getElementById('app');
ReactDOM.render(template, root);
