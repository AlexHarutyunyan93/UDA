import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ?
    { loggedIn: true, user } :
    { loggedIn: false, user: null };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn: false,
                user: null
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                user: null
            };
        case userConstants.LOGOUT:
            return {
                loggedIn: false,
                user: null
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        default:
            return state
    }
}