'use strict';

var app = {
  title: 'A title',
  subtitle: 'A subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item 1'
    ),
    React.createElement(
      'li',
      null,
      'item 2'
    )
  )
);

var user = {
  name: 'Ryan',
  age: 24,
  location: 'Ohio'
};

var userName = 'Ryan B.';
var userAge = 27;
var userLocation = 'Seattle';
var Second = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

ReactDOM.render(template, document.getElementById('root'));
