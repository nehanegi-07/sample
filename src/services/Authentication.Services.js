import axios from 'axios';

export const login = async (userData) => {
    const loginUserState = await axios.post(`https://ghostman2311-scaling-disco-v5rj74j57pvfxprq-8080.preview.app.github.dev/login`, userData);
    return loginUserState;
};

export const register = async (userData) => {
    const RegisterUserState = await axios.post(`https://ghostman2311-scaling-disco-v5rj74j57pvfxprq-8080.preview.app.github.dev/register`, userData);
    return RegisterUserState;
};

