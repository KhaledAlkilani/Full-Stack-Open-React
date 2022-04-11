import React from 'react';

const Hello = ({nimi, ika}) => {
    const bornYear = () => new Date().getFullYear() - ika
// const Hello = (props) => {
    // const bornYear = () => {
    //     const yearNow = new Date().getFullYear()
    //     return yearNow - props.ika
    // }

    //We can store props.nimi in nimi variable so we use variable name instead of repeating props... everytime
    // const nimi = props.nimi
    // const ika = props.ika

    //Another way how to store props in the variables.
    // const {nimi, ika} = props

    //Here is a different way to write the arrow function that includes 1 command
    // const bornYear = () => new Date().getFullYear() - ika

    //Here also another way to write the arrow function
    // const bornYear = () => {
    //     return new Date().getFullYear() - ika
    // }

    return(
        <div>
            <p>Hello {nimi}, your age is {ika} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

export default Hello