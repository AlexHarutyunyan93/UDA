import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGIN_FAILURE:
            return {
                error
            };
        case userConstants.REGISTER_FAILURE:
            return {
                error
            };

        default:
            return state
    }
}