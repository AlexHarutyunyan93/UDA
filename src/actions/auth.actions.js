import {authService} from "../services";
import {history} from "../helpers";
import {alertActions} from "./alert";
import {userConstants} from "../constants";

export const authActions = {
    login,
    register,
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