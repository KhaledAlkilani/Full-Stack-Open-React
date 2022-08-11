import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    const padding = {
        padding: 5
    }

    return(
        <Link style={padding} to="/">home</Link>
        // <div><h2>home</h2></div>
    )
}

export default Home