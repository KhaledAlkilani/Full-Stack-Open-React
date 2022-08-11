import React from "react";
import Home from "./Home";
import Users from "./Users";
import Notes from "./Notes";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

const App = () => {
    const padding = {
        padding: 5
    }


    return(
        
            <Router>
                <div style={padding}>
                <Switch>
       
                    <Route path="/home">
                        <Home/>
                        <Notes/>
                        <Users/>
                        <div>
                    <i>Note app, Department of Computer Science 2022</i>
                </div>
                    </Route>
                    <Redirect to="/home" />
                </Switch>
                
                </div>

            </Router>
           
    )
}

export default App

