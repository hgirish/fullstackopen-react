import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'

const counterReducer = (state = 0,action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const root = createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>,
  )
}
 
renderApp()
store.subscribe(renderApp)