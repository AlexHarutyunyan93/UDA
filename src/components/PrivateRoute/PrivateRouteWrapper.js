import React, {useEffect, useState} from 'react';
import PrivateRoute from "./PrivateRoute";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";
import Cookies from "js-cookie";

export function PrivateRouteWrapper({getById, user: u, ...props}){

    const isUser = Cookies.get('token') && Cookies.get('userId') && true;

    useEffect(() => {
        getById();
        setUser(u);
    });
    return <PrivateRoute {...props} isUser={isUser} />
}

const mapStateToProps = ({ user }) => ({
    ...user
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});

const connectedPrivateRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteWrapper);

export { connectedPrivateRoute as PrivateRoute };
