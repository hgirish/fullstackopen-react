import { useState } from "react"

const StatisticLine = (props) => <p>{props.text} {props.value}</p>
  

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  
  if (all === 0) {
    return <p>No feedback given</p>
  }
return (
  <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={all/4} />
      <StatisticLine text="positive" value={props.good/all*100} />      
  </div>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    const newCount = good + 1;
    setGood(newCount);
   // setAll(() => all + 1);    
  }
  const handleNeutralClick = () => {
    const newCount = neutral + 1;
    setNeutral(newCount);
    //setAll(newCount + good + bad);
    //setAll(() => all + 1);
  }
  const handleBadClick = () => {
    const newCount = bad + 1;
    setBad(newCount);
    //setAll( newCount + neutral + good);
   // setAll(() => all + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good}  neutral={neutral} bad={bad}  />

    </div>
  )
}

export default App
