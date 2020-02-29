import React from 'react';
import PrivateRoute from "./PrivateRoute";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";

export function PrivateRouteWrapper({loggedIn, ...props}){

    return <PrivateRoute {...props} loggedIn={loggedIn} />
}

const mapStateToProps = ({ authentication }) => ({
    loggedIn: authentication.loggedIn
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});

const connectedPrivateRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteWrapper);

export { connectedPrivateRoute as PrivateRoute };
