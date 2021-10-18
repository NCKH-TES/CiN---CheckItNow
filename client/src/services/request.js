import axios from 'axios';
import queryString from 'query-string';
import { SERVER_API } from '../constants/config';

const request = axios.create({
  baseURL: SERVER_API,
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

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: 'Client-ID 7MIYwi-TxGNNuPO0Dldu2HYqJDy34TcXYW54wze-Z9M',
  },
  params: {
    page: 1,
    per_page: 4,
    orientation: 'landscape',
  },
});

export const quotesApi = axios.create({
  baseURL: 'https://api.paperquotes.com/apiv1/quotes',
  headers: {
    Authorization: 'Token 52cc20ad6a71a7e6ec2d03e97f25ea32039a5ce2',
  },
  params: {
    tags: 'motivation, inspirational, sunset',
    order: '-likes',
    maxlength: 60,
    minlength: 40,
    lang: 'en',
  },
});

export default request;
