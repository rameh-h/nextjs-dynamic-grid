import {getCookie} from 'cookies-next';

export function checkLoginCookie() {
    return !!getCookie("auth-cookie");
}