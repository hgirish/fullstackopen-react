import { configureStore } from '@reduxjs/toolkit'

import noteReducer from './reducers/noteSlice'
import filterReducer from './reducers/filter-reducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

export default store