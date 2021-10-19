import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { PostDetails } from '../PostDetails/PostDetails';
import { PostsList } from '../PostsList/PostsList';

interface Props {
  posts: Post[];
  loader: boolean;
}

export const PostPage: React.FC<Props> = (props) => {
  const { posts, loader } = props;
  const [selectedPostID, setSelectedPostID] = useState(0);

  const changePostId = (postId: number) => {
    setSelectedPostID(postId);
  };

  useEffect(() => {

  }, [posts]);

  return (
    <div className="row align-items-start">
      <div className="col">
        {loader ? (
          <>
            {posts.length !== 0
              ? (
                <PostsList
                  changePostId={changePostId}
                  selectedPostId={selectedPostID}
                  posts={posts}
                />
              )
              : <h2>have any posts yet</h2>}
          </>
        )
          : <Loader />}
      </div>

      <Route path="/posts/:postId" exact>
        {selectedPostID !== 0 && (
          <div className="col-lg-5">
            <PostDetails selectedPostId={selectedPostID} />
          </div>
        )}
      </Route>

    </div>
  );
};
