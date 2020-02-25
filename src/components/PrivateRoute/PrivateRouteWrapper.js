import React from 'react';
import PrivateRoute from "./PrivateRoute";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";
import Cookies from "js-cookie";

export function PrivateRouteWrapper({...props}){

    const isUser = Cookies.get('token') && Cookies.get('userId') && true;

    return <PrivateRoute {...props} isUser={isUser} />
}


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});

const connectedPrivateRoute = connect(null, mapDispatchToProps)(PrivateRouteWrapper);

export { connectedPrivateRoute as PrivateRoute };
