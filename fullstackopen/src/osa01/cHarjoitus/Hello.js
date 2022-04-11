import React from 'react';

const Hello = (props) => {
    return(
        <div>
            <p style={{backgroundColor: 'red'}}>Hello {props.nimi}, your age is {props.ika} years old</p>
        </div>
    )
}

export default Hello