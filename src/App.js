const app = {
  title: 'A title',
  subtitle: 'A subtitle'
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </div>
)

const user = {
  name: 'Ryan',
  age: 24,
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
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
)

ReactDOM.render(Second, document.getElementById('root'))
