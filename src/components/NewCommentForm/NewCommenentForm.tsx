import React, { useState } from 'react';

interface Props {
  postId: number;
  addNewComment: (newComment: Partial<Comment>) => void;
}

export const NewCommentForm: React.FC<Props> = (props) => {
  const { postId, addNewComment } = props;
  const [body, setBody] = useState('');

  const reset = () => {
    setBody('');
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleAddComment = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    addNewComment({
      body,
      postId,
    });
    reset();
  };

  return (
    <form>

      <div className="input-group mb-2">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="form-control"
          aria-label="With textarea"
          value={body}
          onChange={(event) => handleCommentChange(event)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        value={body}
        onClick={(event) => handleAddComment(event)}
      >
        Add a comment
      </button>
    </form>
  );
};
