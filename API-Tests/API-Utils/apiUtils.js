const request = require('supertest');

const baseUrl = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'; // Get baseUrl from environment variable or use default

const apiUtils = {
    get: async (endpoint) => {
        return request(baseUrl).get(endpoint);
    },
    post: async (endpoint, data) => {
        return request(baseUrl).post(endpoint).send(data);
    },
    put: async (endpoint, id, data) => {
        return request(baseUrl).put(`${endpoint}/${id}`).send(data);
    },
    delete: async (endpoint, id) => {
        return request(baseUrl).delete(`${endpoint}/${id}`);
    }
};

module.exports = apiUtils;