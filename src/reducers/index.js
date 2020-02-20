import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';
import {authorization} from "./authorization.reducer";

export default combineReducers({
    authentication,
    authorization,
    users,
    alert,
});

