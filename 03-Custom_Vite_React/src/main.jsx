// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



// understanding problem
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom Vite React !!</h1>
    </div>
  )
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp />

  // ReactElement

  anotherElement
)
*/

// Solution to the problem
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom Vite React !!</h1>
    </div>
  )
}

// // dont works
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// // works, but not that proefficient
// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// the correct way how react converts to dom element, Correct
let anotherUser = 'Chai Aur React !'
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherUser // yaha pe evaluated expressions aate hain, jo JS environment mein likhte hain which expects expressions and not statement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)