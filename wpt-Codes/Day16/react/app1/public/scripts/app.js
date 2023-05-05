console.log('inside app.js')

// JSX
// - JavaScript XML
// - template used by react to create the user interface
// const template = <h2>this is a test data</h2>

const template = React.createElement('p', null, 'now it is changed')
const root = document.getElementById('app')

// render the template inside a div having an id 'app'
ReactDOM.render(template, root)
