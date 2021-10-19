import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { deletePost } from '../../api/api';

interface Props {
  changePostId: (postId: number) => void;
  selectedPostId: number;
  posts: Post[];
}

export const PostsList: React.FC<Props> = (props) => {
  const {
    changePostId,
    selectedPostId,
    posts,
  } = props;

  return (
    <div className="container">
      <h2 className="title text-center">
        ALL Posts
      </h2>
      {posts.map(post => (
        <div className="card mb-4" key={post.id}>
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <NavLink
              to={`/posts/${post.id}`}
              className={classNames(
                'me-2',
                // 'btn',
                'btn btn-outline-success',
                { 'btn btn-outline-success': selectedPostId === post.id },
              )}
              onClick={() => {
                if (selectedPostId === post.id) {
                  changePostId(0);
                } else {
                  changePostId(post.id);
                }
              }}
            >
              {selectedPostId === post.id ? 'Close' : 'Open'}
            </NavLink>

            <NavLink
              to={`/update_post/${post.id}`}
              className="btn btn-outline-warning me-2"
            >
              Update
            </NavLink>

            <button
              type="button"
              className="btn btn-outline-danger me-2"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>

      ))}
    </div>
  );
};
