import { useReducer } from 'react'
import './App.css'

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1
      case "DEC":
        return state - 1
        case "ZERO":
          return 0
          default:
            return state
  }
}

const Display = ({counter}) => {
  return <div>{counter}</div>
}

const Button = ({dispatch, type, label}) => {
  return (
    <button onClick={()=> dispatch({type})}>{label}</button>
  )
}
function App() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <div>
     <Display counter={counter} />  
      <div>
       <Button dispatch={counterDispatch} type="INC" label="+" />
       <Button dispatch={counterDispatch} type='DEC' label='-' />
       <Button dispatch={counterDispatch} type='ZERO' label='0' />
      </div>
    </div>
  )
}

export default App
