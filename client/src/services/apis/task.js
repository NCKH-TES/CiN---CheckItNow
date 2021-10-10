import request from '../request';

const tasksApi = {
  getTask: () => {
    const url = `...`;
    return request.get(url);
  },
};

export default tasksApi;
