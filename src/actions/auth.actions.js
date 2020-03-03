import {authService} from "../services";
import {history} from "../helpers";
import {alertActions} from "./alert";
import {userConstants} from "../constants";
import {authConstants} from "../constants/auth.constants";

export const authActions = {
    login,
    register,
    checkToken
};

function login(username, password) {
    return dispatch => {
        dispatch(request());

        authService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.LOGIN_REQUEST } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function register(user) {
    return dispatch => {
        dispatch(request());

        authService.register(user)
            .then(response => {
                    dispatch(success(response));
                    history.push('/');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.REGISTER_REQUEST } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function checkToken(){
    return dispatch => {
        dispatch(request());
        authService.checkToken()
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: authConstants.CHECK_REQUEST } }
    function success(user) { return { type: authConstants.CHECK_SUCCESS, payload: user } }
    function failure(error) { return { type: authConstants.CHECK_FAILURE, error } }
}