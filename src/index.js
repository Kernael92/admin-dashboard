import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";
import "assets/css/black-dashboard.css";
import Admin from "layouts/Admin.jsx";
import { Router, Route, Switch, Redirect } from "react-router-dom";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={props => <Admin {...props} />} />
            <Redirect from="/" to="/admin/index" />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


