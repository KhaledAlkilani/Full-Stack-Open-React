import React from "react"

const Content = (props) => {
    return(
        <div>

        <p style={{color: 'blue'}}>{props.part1} {props.exercises1}</p>
        <p style={{color: 'green'}}>{props.part2} {props.exercises2}</p>
        <p style={{color: 'orange'}}>{props.part3} {props.exercises3}</p>

        </div>
    )
}

export default Content