import Cookies from 'js-cookie';

export function authHeader() {
    let token = Cookies.get('token');

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}