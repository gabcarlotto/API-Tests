const apiUtils = require('../../utils/apiUtils');

describe('PUT /posts/{id}', () => {
    it('should update an existing post', async () => {
        const postId = 1;
        const updatedPost = {
            id: postId,
            title: 'updated title',
            body: 'updated body',
            userId: 1
        };
        const response = await apiUtils.put('/posts', postId, updatedPost); // usage of apiUtils.put
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(updatedPost.id);
        expect(response.body.title).toBe(updatedPost.title);
        expect(response.body.body).toBe(updatedPost.body);
        expect(response.body.userId).toBe(updatedPost.userId);
    });

    // Add more tests for different PUT scenarios 
});