import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { updatePost } from '../../api/api';

export const UpdatePost: React.FC = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const { postId } = useParams<{postId: string}>() || '';

  const reset = () => {
    setTitle('');
    setBody('');
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUpdatePost = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    updatePost({
      title,
      body,
    }, postId);
    reset();
  };

  return (
    <form className="container">
      <h2 className="title text-center">
        Add your post
      </h2>
      <div className="input-group mb-2">
        <input
          name="title"
          placeholder="Post title"
          className="form-control"
          value={title}
          onChange={(event) => handleTitleChange(event)}
        />
      </div>

      <div className="input-group mb-2">
        <textarea
          name="body"
          placeholder="Type post here"
          className="form-control"
          value={body}
          onChange={(event) => handleBodyChange(event)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary me-2"
        onClick={(event) => handleUpdatePost(event)}
      >
        Update a post
      </button>

      <NavLink
        to="/posts"
        className="btn btn-danger"
      >
        Close
      </NavLink>
    </form>
  );
};
