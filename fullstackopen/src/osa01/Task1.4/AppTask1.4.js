import React from "react";
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

    const course = 'Half Stack application development'

    const parts =  [
    {
        name1: 'Fundamentals of React',
        exercises1: 10,
    },

    {
        name2: 'Using props to pass data',
        exercises2: 7,
    },

    {
        name3: 'State of component',
        exercises3: 14
    },

    ]

    const total = parts.name1.exercises1 + parts.name2.exercises2 + parts.name3.exercises3

    return(
        <div>
            <Header course={course} />
            <Content part1={parts.name1} exercises1={parts.exercises1} />
            <Content part2={parts.name2} exercises2={parts.exercises2} />
            <Content part3={parts.name3} exercises3={parts.exercises3} />
            <Total total={'Number of exercises ' + total} />
        </div>
    )
}

export default App