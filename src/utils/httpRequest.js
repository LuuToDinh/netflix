import axios from 'axios';

// Axios instance
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const getRequest = async (path, queryParams = { params: {} }) => {
    const request = await httpRequest.get(path, queryParams);

    return request.data;
};

export default httpRequest;
