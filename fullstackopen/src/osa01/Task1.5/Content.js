import React from "react"

const Content = (props) => {
    return(
        <div>
            <p style={{color: 'blue'}}>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p style={{color: 'green'}}>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p style={{color: 'orange'}}>{props.parts[2].name} {props.parts[2].exercises}</p>
        </div>
    )
}

export default Content