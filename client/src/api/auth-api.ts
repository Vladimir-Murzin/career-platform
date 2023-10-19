import axios from 'axios';

export const register = async (registerInfo: {name: string, lastName: string, email: string, password: string}) => {
    let response = await axios.post('/api/v1/auth/register', registerInfo);
    return response;
}