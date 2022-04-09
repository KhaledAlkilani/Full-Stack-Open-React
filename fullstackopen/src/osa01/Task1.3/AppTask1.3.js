import React from "react";
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

    const course = 'Half Stack application development'

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10,
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7,
    }

    const part3 = {
        name: 'State of component',
        exercises: 14
    }

    const total = exercises1 + exercises2 + exercises3

    return(
        <div>
            <Header course={course} />
            <Content part1={part1.name} exercises={part1.exercises} />
            <Content part2={part2.name} exercises={part2.exercises} />
            <Content part3={part3.name} exercises={part3.exercises} />
            <Total total={'Number of exercises ' + total} />
        </div>
    )
}

export default App