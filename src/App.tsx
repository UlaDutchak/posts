import React, { useState, useEffect } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getAllPosts } from './api/api';
import { Navigation } from './components/Navigation/Navigation';
import { PostPage } from './components/PostsPage/PostsPage';
import { UpdatePost } from './components/UpdatePost/UpdatePost';
import { NewPosts } from './components/NewPost/NewPost';

export const App: React.FC = () => {
  const [posts, setPosts] = useState([] as Post[]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    getAllPosts()
      .then(response => {
        setPosts(response);
        setLoader(true);
      });
  }, []);

  const setMaxId = () => Math.max(...posts.map(post => post.id));

  return (
    <div className="App">
      <Navigation />
      <Switch>

        <Route path="/posts">
          <PostPage posts={posts} loader={loader} />
        </Route>

        <Route path="/new">
          <NewPosts maxId={setMaxId()} />
        </Route>

        <Route
          path="/update_post/:postId"
          component={UpdatePost}
        />

        <Redirect path="/home" to="/" />

      </Switch>
    </div>
  );
};
