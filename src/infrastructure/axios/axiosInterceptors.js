import { AxiosInstance } from 'axios';
import { getToken } from '../twitch/twitchService';


export const axiosInteceptor = (axios) => {
    axios.interceptors.request.use(async (config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorizationm = `Bearer ${token}`;
        }
        return config;
    },
        (error) => Promise.reject(error)
    );
}

