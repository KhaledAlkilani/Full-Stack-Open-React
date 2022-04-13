import React from "react";

const Statistics = (props) => {

return(
    <div style={{padding: '20px'}}>
        <h1>Give Feedback</h1>
           <button onClick={ () => props.setGood(props.good + 1)}
           style={{marginRight: '10px', width: '60px', padding: '0.3em', borderRadius: '10px'}}>
            Good</button>
           <button onClick={ () => props.setNeutral(props.neutral + 1)}
           style={{marginRight: '10px', width: '60px', padding: '0.3em', borderRadius: '10px'}}>
            Neutral</button>
           <button onClick={ () => props.setBad(props.bad + 1)}
            style={{width: '60px', padding: '0.3em', borderRadius: '10px'}}>
            Bad</button>
           <h1>Statistics</h1>
           <p>Good {props.good}</p>
           <p>Neutral {props.neutral}</p>
           <p>Bad {props.bad}</p>
           <p>All {props.all}</p>
           <p>Average {props.all / 3}</p>
           <p>Positive {props.good / props.all * 100}%</p>

    </div>
)
}

export default Statistics