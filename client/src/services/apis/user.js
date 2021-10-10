import request from '../request';

const UserApi = {
  login: (info) => {
    const url = `auth`;
    return request.post(url, info);
  },
  register: (info) => {
    const url = `/auth/register`;
    return request.post(url, info);
  },
};

export default UserApi;
