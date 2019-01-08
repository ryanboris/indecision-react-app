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
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

ReactDOM.render(Second, document.getElementById('root'));
