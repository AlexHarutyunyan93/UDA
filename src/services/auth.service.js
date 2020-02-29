import Cookies from 'js-cookie';
import {authHeader} from "../helpers";

export const authService = {
    login,
    logout,
    register,
    checkToken
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:7070/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            Cookies.set('token', user.token, { expires: 7 });
            Cookies.set('userId', user._id, { expires: 7 });
            return user;
        });
}

function checkToken() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`http://localhost:7070/users/current/${Cookies.get('userId')}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    Cookies.remove('token');
    Cookies.remove('userId');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:7070/users/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            Cookies.set('token', user.token, { expires: 7 });
            Cookies.set('userId', user._id, { expires: 7 });
            return user;
        });

}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}