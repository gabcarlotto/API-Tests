const request = require('supertest');
const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('POST /posts', () => {
    it('should create a new post', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        const response = await request(baseUrl)
            .post('/posts')
            .send(newPost);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe(newPost.title);
        expect(response.body.body).toBe(newPost.body);
        expect(response.body.userId).toBe(newPost.userId);
    });
});