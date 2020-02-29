import { userConstants } from '../constants';
import {authConstants} from "../constants/auth.constants";

const initialState = {
    loading: true,
    data: null
};

export function user(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETBYID_REQUEST:
            return {
                loading: true,
                data: null
            };
        case userConstants.GETBYID_SUCCESS:
            return {
                loading: false,
                data: action.payload
            };
        case userConstants.GETBYID_FAILURE:
            return {
                loading: false,
                data: null,
                error
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loading: false,
                data: action.payload
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                loading: false,
                data: action.payload
            };
        case authConstants.CHECK_REQUEST:
            return {
                loading: true,
                data: null
            };
        case authConstants.CHECK_SUCCESS:
            return {
                loading: false,
                data: action.payload
            };
        case authConstants.CHECK_FAILURE:
            return {
                loading: false,
                data: null,
                error
            };
        default:
            return state
    }
}