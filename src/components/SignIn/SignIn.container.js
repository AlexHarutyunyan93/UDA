import React from 'react';
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";
import SignInComponent from "./SignIn.component";
import {Redirect} from "react-router-dom";

function SignInContainer({login, logout, user, loggedIn}){

    function submit(e, username, password){
        e.preventDefault();
        if (username && password) {
            login(username, password);
        }
    }
    return user ?
        <Redirect to='/' /> :
        <SignInComponent {...arguments[0]} submit={submit} />
}

const mapStateToProps = ({ user, authentication }) => ({
    user: user.user,
    loggedIn: authentication.loggedIn
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});


const connectedLoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);

export { connectedLoginPage as SignIn };