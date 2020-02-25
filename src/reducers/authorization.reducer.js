import { userConstants } from '../constants';

export function authorization(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                loggedIn: false,
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                loggedIn: true,
                registering: true,
            };
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}