import { userConstants } from '../constants';
import Cookies from 'js-cookie';

const initialState = Cookies.get('token') && Cookies.get('userId') ?
    { loggedIn: true } :
    { loggedIn: false };

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
            };
        default:
            return state
    }
}