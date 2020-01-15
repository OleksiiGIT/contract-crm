import React from 'react'
import Dashboard from "./views/Dashboard";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Orders from "./components/Orders";
import Add from "./views/Add";
import Contract from "./views/Contract";

class App extends React.Component {
    render() {

        let routes = (
            <Switch>
                <Route path="/" exact component={Orders} />
                <Route path="/add" component={Add} />
                <Route path="/contract/:id" component={Contract} />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <Dashboard>
                {routes}
            </Dashboard>
        )
    }
}

export default withRouter(App)