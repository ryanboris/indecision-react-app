'use strict';

var app = {
  title: 'A title',
  subtitle: 'A subtitle',
  options: ['a', 'b', 'b']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'h1',
    null,
    'Subtitle: ',
    app.subtitle
  ),
  app.options.length > 0 ? 'Here are your options: ' + app.options.map(function (option) {
    return option;
  }) : 'No options',
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
  age: 23,
  location: 'New York'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var Second = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

ReactDOM.render(template, document.getElementById('root'));
