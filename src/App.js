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
  location: 'Ohio'
}

const userName = 'Ryan B.'
const userAge = 27
const userLocation = 'Seattle'
const Second = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

ReactDOM.render(template, document.getElementById('root'))
