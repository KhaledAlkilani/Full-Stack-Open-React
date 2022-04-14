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
    <div>
           <p>Good {props.good}</p>
           <p>Neutral {props.neutral}</p>
           <p>Bad {props.bad}</p>
           <p>All {props.all}</p>
           <p>Average {props.average}</p>
           <p>Positive {props.posPer} %</p>
    </div>
)
}

export default Statistics