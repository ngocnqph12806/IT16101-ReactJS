import jwt_decode from 'jwt-decode';
import emailjs from 'emailjs-com'
import { ClientAPI } from './ClientAPI';

export const authenticate = (data) => {
    return sessionStorage.setItem('jwt', JSON.stringify(data));
}
export const isAuthenticated = () => {
    return JSON.parse(sessionStorage.getItem('jwt'));
}
export const logout = () => {
    return sessionStorage.removeItem('jwt');
}
export const jwtDecode = accessToken => {
    return jwt_decode(accessToken)
}
export const formatUser = async (accessToken) => {
    let decodeToken = jwtDecode(accessToken);
    let url = `/users?email=${decodeToken.email}`;
    return ClientAPI.get(url);
}
export const sendMail = (sending) =>{
    emailjs.send('service_r9g212j', 'template_257cfl6', sending, 'user_gReQDEB3O4gmLJrvDmNR7')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}