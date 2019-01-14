/* eslint-disable */
const app = {
  title: 'Indecision',
  subtitle: 'fun',
  options: ['one', 'two']
}

const onFormSubmit = e => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const removeAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const { length } = app.options
  const randomNum = Math.floor(Math.random() * length)
  const option = app.options[randomNum]
  alert(option)
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'none'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What Should I do?
      </button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>
        })}
      </ol>
      <button onClick={removeAll}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  )

  const appRoot = document.getElementById('root')
  ReactDOM.render(template, appRoot)
}

render()
