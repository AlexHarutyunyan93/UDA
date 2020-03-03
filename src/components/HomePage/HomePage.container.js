import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {authActions, userActions} from "../../actions";
import {connect} from "react-redux";
import HomePageComponent from "./HomePage.component";
import {CircularProgress} from "@material-ui/core";

function HomePageContainer({user, logout, checkToken, loading}) {
    useEffect(() => checkToken(), []);

    return loading && !user ? <CircularProgress /> : <HomePageComponent user={user} />;
}

const mapStateToProps = ({ user }) => ({
    user: user.data,
    loading: user.loading
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch),
    ...bindActionCreators(authActions, dispatch),
});

const connectedHomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);

export { connectedHomePage as HomePage };