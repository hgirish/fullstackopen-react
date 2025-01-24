import { useDispatch } from "react-redux"
import {  setFilter } from "../reducers/filterSlice"
import { setNotification } from "../reducers/notificationSlice"

const Filter = () => {
  const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      const filter = event.target.value
      dispatch(setFilter(filter))
      if (filter) {
      dispatch(setNotification(`you are filtering for '${filter}'`, 5))
      } else {
        dispatch(setNotification(``, 0))
      }
      setTimeout(() => {
        dispatch(setNotification(``, 0))
      }, 5000)
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter