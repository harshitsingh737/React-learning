import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
      <div>
        <h1>My custom App</h1>
      </div>
    )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com/',
//       target: '_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
  <a href="https://www.google.com/" target='_blank'>Visit Google</a>
)

const username = 'chai aur code'

const reactElement = React.createElement(
  // 1st parameter is tag
  'a',
  // 2nd parameter is an object with all attributes
  
      {href :'https://www.google.com/', target:'_black'},

      // 3rd parameter is direct text
      'Click to visit google',

      // after that we can injest all the variables
      username
  
)

createRoot(document.getElementById('root')).render(
  reactElement
  // <App />
)
