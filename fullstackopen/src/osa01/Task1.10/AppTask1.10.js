import { useState } from "react";
import Buttons from './Buttons'
import Statistics from './Statistics'

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [clicks, setClicks] = useState([])
    const all = good + bad + neutral
    const average = (good + bad + neutral) / 3
    const posPer = (good / all) * 100
    
    const handleGoodClick = () => {
      setClicks(clicks.concat(good))
      setGood(good + 1)
    }

    const handleNeutralClick = () => {
      setClicks(clicks.concat(neutral))
      setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
      setClicks(clicks.concat(bad))
      setBad(bad + 1)
    }

    

    return(
        <div style={{padding: '20px'}}>
          
          <h1>Give Feedback</h1>
          <Buttons handleClick={handleGoodClick} text='Good'/>
          <Buttons handleClick={handleNeutralClick} text='Neutral'/>
          <Buttons handleClick={handleBadClick} text='Bad'/>

          <h1>Statistics</h1>
          <Statistics 
          good={good} setGood={setGood}
          neutral={neutral} setNeutral={setNeutral}
          bad={bad} setBad={setBad}
          all={all}
          average={average}
          posPer={posPer}
          clicks={clicks}
          />
        </div>
    )
}

export default App