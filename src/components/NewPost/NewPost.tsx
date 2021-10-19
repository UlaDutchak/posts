import React, { useState } from 'react';
import { addPost } from '../../api/api';

interface Props {
  maxId: number;
}

export const NewPosts: React.FC<Props> = ({ maxId }) => {
  const [currentId, setCurrentId] = useState(maxId);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const reset = () => {
    setCurrentId(currentId + 1);
    setTitle('');
    setBody('');
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddPost = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    addPost({
      id: currentId + 1,
      title,
      body,
    });
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
        className="btn btn-primary"
        onClick={(event) => handleAddPost(event)}
      >
        Add a post
      </button>
    </form>
  );
};
