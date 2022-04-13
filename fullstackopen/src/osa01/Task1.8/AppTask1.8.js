import { useState } from "react";
import Statistics from './Statistics'

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + bad + neutral
    const average = (good + bad + neutral) / 3
    const posPer = (good / all) * 100

    return(
        <div>
          <Statistics 
          good={good} setGood={setGood}
          neutral={neutral} setNeutral={setNeutral}
          bad={bad} setBad={setBad}
          all={all}
          average={average}
          posPer={posPer}
          />
        </div>
    )
}

export default App