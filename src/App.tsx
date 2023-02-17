import React from "react";
import Edit from "./Edit";
import DynamicComponent from "./DynamicComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <h2>
                        You can <Link to="/edit">edit</Link> this page!
                    </h2>
                    <span>(it only takes an eternity to propagate)</span>
                </div>
                <DynamicComponent />
                <Switch>
                    <Route path="/edit" component={Edit} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
