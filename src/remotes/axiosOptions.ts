export const terminal: string = `npm install axios`;

const code: string = `import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "";

client.interceptors.request.use(
    (config) => {
        // ...
        config.headers.Authorization = "";
        return config;
    },
    (error) => {
        // ...
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (response) => {
        // ...
        return response;
    },
    (error) => {
        // ...
        return Promise.reject(error);
    }
);

export default client;
`;

export default code;
