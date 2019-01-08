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
  age: 24
}

function getLocation(location) {
  if (location) {
    return location
  } else {
    return 'unknown'
  }
}

const Second = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
)

ReactDOM.render(Second, document.getElementById('root'))
