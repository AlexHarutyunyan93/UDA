import { userConstants } from '../constants';

export function authorization(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                registering: true,
                user: action.user
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                registering: true,
                user: action.user
            };
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}