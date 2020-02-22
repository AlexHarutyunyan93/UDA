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

function App({clear, alert}) {

    useEffect(() => {
        history.listen((location, action) => {
            clear();
        });
    });
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={SignIn} />
                                <Route path="/register" component={SignUp} />
                                <Redirect from="*" to="/" />
                            </Switch>
                    </Router>
                </div>
            </div>
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