import request from '../request';
import { SERVER_API } from '../../constants/config';

const UserApi = {
  login: (info) => {
    const url = `auth`;
    return request.post(url, info);
  },
  register: (info) => {
    const url = `auth/register`;

    return request.post(url, info);
  },
  loginGoogle: () => {
    const url = `auth/google`;
    return request.get(url);
  },
};

export default UserApi;
