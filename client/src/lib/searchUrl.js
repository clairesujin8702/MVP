const axios = require('axios');
const { API_TOKEN } = require('../../../env/config.js');
const Authorization = API_TOKEN || process.env.API_KEY;

const url = 'https://';

const searchUrl = {

  get: (endPoint, params = {}) => {
    return axios.get(`${url}/${endPoint}`, {
      headers: { Authorization },
      params: params,
    });
  }

};

export default searchUrl;
