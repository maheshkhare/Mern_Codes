"use strict";

var category = {};

// click event handler for the button
var submitForm = function submitForm(e) {
  category.title = e.target.elements.title.value;
  category.description = e.target.elements.description.value;
  e.preventDefault();

  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "App4"
    ),
    React.createElement(
      "form",
      { onSubmit: submitForm },
      React.createElement(
        "div",
        null,
        "title: ",
        React.createElement("input", { type: "text", name: "title" })
      ),
      React.createElement(
        "div",
        null,
        "description: ",
        React.createElement("input", { type: "text", name: "description" })
      ),
      React.createElement(
        "button",
        { type: "submit" },
        "submit"
      )
    ),
    React.createElement("hr", null),
    React.createElement(
      "h4",
      null,
      "Category Details"
    ),
    category.title && React.createElement(
      "div",
      null,
      "title: ",
      category.title
    ),
    category.description && React.createElement(
      "div",
      null,
      "description: ",
      category.description
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();

// category
// = title
// = description
