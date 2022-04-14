import React from "react";

const Buttons = (props) => {
    
    return(
        
<button style=
        {{borderRadius: '10px', 
        border: 'none', 
        width: '70px', 
        height: '1.6rem', 
        marginRight: '10px',
        color: 'red',
        fontWeight: 'bold'}} 
        onClick={props.handleClick}>
        {props.text}
</button>,

<button style=
        {{borderRadius: '10px', 
        border: 'none', 
        width: '70px', 
        height: '1.6rem', 
        marginRight: '10px',
        color: 'red',
        fontWeight: 'bold'}} 
        onClick={props.handleClick}>
        {props.text}
</button>

)
    }

    
    

export default Buttons