import React from "react";

const Total = (props) => {
    return(
        <div>
            <p style={{color: 'red', fontWeight: 'bold'}}>{props.total}</p>
        </div>
    )
}

export default Total