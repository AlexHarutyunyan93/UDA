import React from 'react';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/PrivateRoute';
import { HomePage } from './HomePage';
import { SignIn } from './SignIn';
import {Route, Router} from "react-router-dom";

function App(props) {
    const { dispatch } = props;
    history.listen((location, action) => {
        dispatch(alertActions.clear());
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
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={SignIn} />
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