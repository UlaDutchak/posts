import React, { useEffect, useState } from 'react';
import { addComment, getPostDetails } from '../../api/api';
import { Loader } from '../Loader/Loader';
import { NewCommentForm } from '../NewCommentForm/NewCommenentForm';

interface Props {
  selectedPostId: number;
}

export const PostDetails: React.FC<Props> = (props) => {
  const { selectedPostId } = props;
  const [post, setPost] = useState({} as Post | null);
  const [isCommentsVisible, setIsCommentVisible] = useState(true);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);

    getPostDetails(selectedPostId)
      .then(response => {
        setPost(response as Post);
        setLoader(false);
      })
      .catch(reject => {
        setPost(null);
        throw new Error(reject);
      });
  }, [selectedPostId]);

  const addNewComment = (newComment: Partial<Comment>) => {
    addComment(newComment)
      .then(() => {
        getPostDetails(selectedPostId);
        setLoader(true);
        setLoader(false);
      });
  };

  const hideTriggerComments = () => {
    setIsCommentVisible(!isCommentsVisible);
  };

  if (loader) {
    return (
      <Loader />
    );
  }

  return (
    <div className="container">
      <h2>Post details:</h2>

      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.body}</p>
        </div>
        <ul className="list-group list-group-flush">
          {isCommentsVisible && (
            <>
              {post?.comments?.map(comment => (
                <li
                  className="list-group-item"
                  key={comment.id}
                >
                  <p className="ps-2">{comment.body}</p>
                </li>
              ))}
            </>
          )}
        </ul>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-info mb-4"
            onClick={() => hideTriggerComments()}
          >
            {isCommentsVisible ? 'Hide ' : 'Show '}
            {`${post?.comments?.length} comments`}
          </button>
        </div>
      </div>

      <NewCommentForm
        postId={selectedPostId}
        addNewComment={addNewComment}
      />
    </div>
  );
};
