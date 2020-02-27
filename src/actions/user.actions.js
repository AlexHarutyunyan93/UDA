import { userConstants } from '../constants';
import { userService } from '../services';

import { history } from '../helpers';

export const userActions = {
    logout,
    getById,
    getAll,
    delete: _delete
};

function logout() {
    userService.logout();
    history.push('/login');
    return { type: userConstants.LOGOUT };
}

function getById(){
    return dispatch => {
        dispatch(request());
        userService.getById()
            .then(
                    user => dispatch(success(user)),
                    error => dispatch(failure(error.toString()))
                );
    };

    function request() { return { type: userConstants.GETBYID_REQUEST } }
    function success(user) { return { type: userConstants.GETBYID_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.GETBYID_FAILURE, error } }
}
function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, payload: users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}