import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { PrivateRoute } from '../components/PrivateRoute';
import { HomePage } from './HomePage';
import { SignIn } from './SignIn';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {SignUp} from "./SingUp";
import {bindActionCreators} from "redux";
import {alertActions} from "../actions";

function App({clear}) {

    useEffect(() => {
        history.listen((location, action) => {
            clear();
        });
    });

    return (
        <div className="container">
            <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={SignIn} />
                        <Route path="/register" component={SignUp} />
                        <Redirect from="*" to="/" />
                    </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = ({alert}) => ({
    alert
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(alertActions, dispatch)
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };