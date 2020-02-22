import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";
import {connect} from "react-redux";
import HomePageComponent from "./HomePage.component";

function HomePageContainer({user, users, logout, getAll}){
    return <HomePageComponent {...arguments[0]} />
}

const mapStateToProps = ({users, authentication}) => ({
    user: authentication.user,
    users
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch)
});

const connectedHomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);

export { connectedHomePage as HomePage };