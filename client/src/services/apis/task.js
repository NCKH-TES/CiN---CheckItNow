import request from '../request';

const tasksApi = {
  getListTaskApi: (data) => {
    const url = `/task/list`;
    return request.post(url, data);
  },

  createTaskApi: (data) => {
    const url = `/task`;
    return request.post(url, data);
  },

  deleteTaskApi: (id) => {
    const url = `/task/${id}`;
    return request.delete(url);
  },

  updateTaskApi: (id, data) => {
    const url = `/task/${id}`;
    return request.patch(url, data);
  }
};

export default tasksApi;
