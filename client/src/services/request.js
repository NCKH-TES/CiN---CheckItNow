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

export default request;
