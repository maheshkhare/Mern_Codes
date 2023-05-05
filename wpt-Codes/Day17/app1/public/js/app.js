'use strict';

console.log('inside app5.js');

// getting values from an array
var products = [{
  id: 1,
  title: 'product 1',
  description: 'description 1',
  price: 100,
  review: 'good product'
}, {
  id: 2,
  title: 'product 2',
  description: 'description 2',
  price: 200
}, {
  id: 3,
  title: 'product 3',
  description: 'description 3',
  price: 300,
  review: 'worst product'
}, {
  id: 4,
  title: 'product 4',
  description: 'description 4',
  price: 400
}];

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h3',
    null,
    'App5'
  ),
  products.map(function (product) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'id: ',
        product.id
      ),
      React.createElement(
        'div',
        null,
        'title: ',
        product.title
      ),
      React.createElement(
        'div',
        null,
        'description: ',
        product.description
      ),
      React.createElement(
        'div',
        null,
        'price: ',
        product.price
      ),
      product.review && React.createElement(
        'div',
        null,
        'review: ',
        product.review
      ),
      React.createElement('hr', null)
    );
  })
);

var root = document.getElementById('app');
ReactDOM.render(template, root);
