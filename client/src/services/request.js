import axios from 'axios';
import queryString from 'query-string';
import { SERVER_API } from '../constants/config';

const request = axios.create({
  baseUrl: SERVER_API,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.interceptors.request.use(async (config) => {
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
  if (userInfo) {
    const token = await userInfo.token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default request;
