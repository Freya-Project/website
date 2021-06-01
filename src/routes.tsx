import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <div>Home</div>
                    <Link to="/commands">Commands</Link>
                </Route>
                <Route path="/commands">
                    <div>Commands</div>
                    <Link to="/">Home</Link>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default MainRouter;
