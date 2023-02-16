import React from "react";
import Edit from "./Edit";
import DynamicComponent from "./DynamicComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <h1>Dynamic Component</h1>
                <h2>
                    You can <Link to="/edit">Edit</Link> This Page!
                </h2>
                <DynamicComponent />
                <Switch>
                    <Route path="/edit">
                        <Edit />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
