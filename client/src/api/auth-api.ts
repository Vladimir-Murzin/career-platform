import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const register = async (registerInfo: {name: string, lastName: string, email: string, password: string}) => {
    let response = await axios.post(`${baseUrl}/api/v1/auth/register`, registerInfo);
    return response;
}