import { AxiosInstance } from 'axios';
import { getToken, refreshToken } from '../twitch/twitchService';


export const axiosInteceptor = (axios) => {
    axios.interceptors.request.use(async (config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token['tc-token']}`;
        }
        return config;
    },

        (error) => Promise.reject("Error getting Token", error)
    );
    // axios.interceptors.response.use(async (error) => {
    //     if (error.status === 401) {
    //         const token = await refreshToken();
    //         return axios(error.config);
    //     }
    //     return Promise.reject(error);
    // });

    return axios
}

