import React from 'react';
import Hello from './Hello'

const App = () => {

    const nimi = 'Khaled'
    const ika = 34

    return(
        <div>
            <h1>Greetings</h1>
            <Hello nimi='Maya' ika='28' />
            <Hello nimi={nimi} ika={ika} />
        </div>
    )
}

export default App