import React from 'react';
import SignUpComponent from "./SignUp.component";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export function SignUpContainer({register, user}){
    function handleSubmit(event, {firstName, lastName, username, password}) {

        event.preventDefault();
        const user = {firstName, lastName, username, password};

        if (firstName && lastName && username && password) {
            register(user);
        }
    }
    return user ?
        <Redirect to="/" /> :
        <SignUpComponent handleSubmit={handleSubmit} />
}
const mapStateToProps = ({ authentication }) => ({
    user: authentication.user,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});


const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
export { connectedRegisterPage as SignUp };