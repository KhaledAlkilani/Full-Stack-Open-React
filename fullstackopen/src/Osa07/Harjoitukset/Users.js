import React from "react";
import {Link} from "react-router-dom"

const Users = () => {
    const padding = {
        padding: 5
    }
    return(
        <Link style={padding} to="/users">users</Link>
        // <div><h2>users</h2></div>
    )
}

export default Users