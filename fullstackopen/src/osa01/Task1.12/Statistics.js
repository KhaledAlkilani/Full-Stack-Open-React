import React from "react";

const Statistics = (props) => {

    if(props.clicks.length === 0){
        return(
            <div>
                <p>No feedback given</p>
            </div>
        )
}

return(
    <table>
        
        <tbody>
    <tr>
           <td style={{width: '50%', padding: '0.5em'}}>Good</td>
           <td>{props.good}</td>
    </tr>
    <tr>
           <td style={{padding: '0.5em'}}>Neutral</td> 
           <td>{props.neutral}</td>
    </tr>
    <tr>
           <td style={{padding: '0.5em'}}>Bad</td> 
           <td>{props.bad}</td>
    </tr>
    <tr>
           <td style={{padding: '0.5em'}}>All</td> 
           <td>{props.all}</td>
    </tr>
    <tr>
           <td style={{padding: '0.5em'}}>Average</td> 
           <td>{props.average}</td>
    </tr>
    <tr>
           <td style={{padding: '0.5em'}}>Positive</td> 
           <td>{props.posPer} %</td>
    </tr>
    </tbody>
           
    </table>
)
}

export default Statistics