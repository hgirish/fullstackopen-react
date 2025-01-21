import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createStore } from 'redux'
import reducer from './reducer'
import App from './App'

const store = createStore(reducer)

const root = createRoot(document.getElementById('root'))
const renderApp = () => root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
)

renderApp()
store.subscribe(renderApp)
