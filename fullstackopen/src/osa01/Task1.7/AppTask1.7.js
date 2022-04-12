import { useState } from "react";


const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + bad + neutral

    return(
        <div style={{padding: '20px'}}>
           <h1>Give Feedback</h1>
           <button onClick={ () => setGood(good + 1)}
           style={{marginRight: '10px', width: '60px', padding: '0.3em', borderRadius: '10px'}}>
            Good</button>
           <button onClick={ () => setNeutral(neutral + 1)}
           style={{marginRight: '10px', width: '60px', padding: '0.3em', borderRadius: '10px'}}>
            Neutral</button>
           <button onClick={ () => setBad(bad + 1)}
            style={{width: '60px', padding: '0.3em', borderRadius: '10px'}}>
            Bad</button>
           <h1>Statistics</h1>
           <p>Good {good}</p>
           <p>Neutral {neutral}</p>
           <p>Bad {bad}</p>
           <p>All {all}</p>
           <p>Average {all / 3}</p>
           <p>Positive {good / all * 100}%</p>
        </div>
    )
}

export default App