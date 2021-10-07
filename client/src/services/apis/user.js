import request from '../request';

const UserApi = {
  login: (info) => {
    const url = `/api/auth`;
    return request.post(url, info);
  },
  register: (info) => {
    const url = `/api/auth/register`;
    return request.post(url, info);
  },
};

export default UserApi;
