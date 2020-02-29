import React from 'react';
import {bindActionCreators} from "redux";
import {authActions} from "../../actions";
import {connect} from "react-redux";
import SignInComponent from "./SignIn.component";
import {Redirect} from "react-router-dom";

function SignInContainer({login, logout, loggedIn}){
    function submit(e, username, password){
        e.preventDefault();
        if (username && password) {
            login(username, password);
        }
    }
    return loggedIn ?
        <Redirect to='/' /> :
        <SignInComponent {...arguments[0]} submit={submit} />
}
const mapStateToProps = ({ authentication }) => ({
    loggedIn: authentication.loggedIn
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authActions, dispatch)
});


const connectedLoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);

export { connectedLoginPage as SignIn };