import React from 'react';
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";
import SignInComponent from "./SignIn.component";

function SignInContainer({login, logout, user, loggedIn}){

    function submit(e, username, password){
        e.preventDefault();
        if (username && password) {
            login(username, password);
        }
    }
    return <SignInComponent {...arguments[0]} submit={submit} />
}

const mapStateToProps = ({ authentication }) => ({
    user: authentication.user,
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