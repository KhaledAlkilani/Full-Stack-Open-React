import React from "react";
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

    const course = 'Half Stack application development'

    const part1 =  
    {
        name: 'Fundamentals of React',
        exercises1: 10,
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises2: 7,
    }

    const part3 = {
        name: 'State of component',
        exercises3: 14
    }

    const total = part1.exercises1 + part2.exercises2 + part3.exercises3

    return(
        <div>
            <Header course={course} />
            <Content part1={part1.name} exercises1={part1.exercises1} />
            <Content part2={part2.name} exercises2={part2.exercises2} />
            <Content part3={part3.name} exercises3={part3.exercises3} />
            <Total total={'Number of exercises ' + total} />
        </div>
    )
}

export default App