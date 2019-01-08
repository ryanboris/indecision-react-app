const app = {
  title: 'A title',
  subtitle: 'A subtitle',
  options: ['a', 'b', 'b']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h1>Subtitle: {app.subtitle}</h1>}

    {app.options.length > 0
      ? `Here are your options: ${app.options.map(option => option)}`
      : 'No options'}

    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </div>
)

const user = {
  name: 'Ryan',
  age: 23,
  location: 'New York'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

const Second = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

ReactDOM.render(template, document.getElementById('root'))
