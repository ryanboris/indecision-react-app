'use strict';

var App = function App() {
  return React.createElement(
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
      'How are ya?!'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
