export const BASE_URL = 'https://simple-blog-api.crew.red/posts';

export const getAllPosts = ():Promise<Post[]> => {
  return fetch(`${BASE_URL}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json();
    });
};

export const getPostDetails = (postId: number):Promise<Post> => {
  return fetch(`${BASE_URL}/${postId}?_embed=comments`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json();
    });
};

export const addComment = (newComment: Partial<Comment>) => {
  return fetch(`${BASE_URL}comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newComment),
  });
};

export const addPost = (newPost: Post) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newPost),
  });
};

export const updatePost = (updatedPost: Partial<Post>, postId: string) => {
  return fetch(`${BASE_URL}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(updatedPost),
  });
};

export const deletePost = (postId: number) => {
  return fetch(`${BASE_URL}/${postId}`, {
    method: 'DELETE',
  });
};
