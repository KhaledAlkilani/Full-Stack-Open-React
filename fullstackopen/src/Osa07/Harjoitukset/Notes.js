import React from "react";
import {Link} from "react-router-dom"

const Notes = ({notes}) => {


    return(
        <div>
        <h2>Notes</h2>
        <ul>
            {
                notes.map(note =>
                    <li key={note.id}>
                        <Link to={`/notes/${note.id}`}>notes</Link>
                    </li>
                    )
            }
        </ul>
        {/* <li>HTML is easy</li>
        <li>Browser can execute only javascript</li>
        <li>Most important methods of HTTP-protocol are GET and POST</li> */}
        </div>
        
    )
}

export default Notes