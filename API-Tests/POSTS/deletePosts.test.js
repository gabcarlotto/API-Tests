const apiUtils = require('../../utils/apiUtils');

describe('DELETE /posts/{id}', () => {
    it('should delete a post', async () => {
        const postId = 1;
        const response = await apiUtils.delete('/posts', postId); // usage of apiUtils.delete
        expect(response.status).toBe(200); // Or expect(response.status).toBe(204); if no content is returned
    });

    // Add more tests for different DELETE scenarios (e.g., deleting a non-existent post)
});

//Removed the 404 check: The JSONPlaceholder API doesn't actually delete the post; it simulates the deletion. Therefore, it won't return a 404 status after a DELETE request.