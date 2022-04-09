import React from "react"

const Content = (props) => {
    return(
        <div>
            <p style={{color: 'blue'}}>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
            <p style={{color: 'green'}}>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
            <p style={{color: 'orange'}}>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
        </div>
    )
}

export default Content