'use strict';

var App = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hi!'
  ),
  React.createElement(
    'h3',
    null,
    'How are ya??!'
  )
);

var Second = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ryan Boris'
  ),
  React.createElement(
    'p',
    null,
    'Age: 34'
  ),
  React.createElement(
    'p',
    null,
    'Location: PA'
  )
);

ReactDOM.render(Second, document.getElementById('root'));
