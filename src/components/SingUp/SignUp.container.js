import React from 'react';
import SignUpComponent from "./SignUp.component";
import {bindActionCreators} from "redux";
import {authActions} from "../../actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export function SignUpContainer({register, loggedIn}){
    function handleSubmit(event, {firstName, lastName, username, password}) {
        event.preventDefault();

        const user = {firstName, lastName, username, password};

        if (firstName && lastName && username && password) {
            register(user);
        }
    }

    return loggedIn ?
        <Redirect to="/" /> :
        <SignUpComponent handleSubmit={handleSubmit} />
}
const mapStateToProps = ({ authentication }) => ({
    loggedIn: authentication.loggedIn
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authActions, dispatch)
});


const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
export { connectedRegisterPage as SignUp };