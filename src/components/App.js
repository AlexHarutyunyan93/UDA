import React from 'react';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/PrivateRoute';
import { HomePage } from './HomePage';
import { SignIn } from './SignIn';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {SignUp} from "./SingUp";

function App(props) {
    const { dispatch, clearAlerts } = props;

    history.listen((location, action) => {
        clearAlerts();
    });

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <div>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={SignIn} />
                                <Route path="/register" component={SignUp} />
                                <Redirect from="*" to="/" />
                            </Switch>

                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };