import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import noteReducer from './reducers/noteSlice.js'
import filterReducer from './reducers/filter-reducer.js'
import { configureStore } from '@reduxjs/toolkit'
//import noteService from './services/notes.js'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

// noteService.getAll().then(notes =>   
//     store.dispatch(setNotes(notes))  
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
