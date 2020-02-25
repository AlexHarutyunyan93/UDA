import { userConstants } from '../constants';

export function user(state = {}, action) {
    switch (action.type) {
        case userConstants.GETBYID_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETBYID_SUCCESS:
            return {
                loading: false,
                user: action.payload
            };
        case userConstants.GETBYID_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.payload
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                user: action.payload
            };
        default:
            return state
    }
}