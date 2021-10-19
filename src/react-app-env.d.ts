/// <reference types="react-scripts" />
interface Post {
  id: number;
  title: string;
  body: string;
  comments?: Comment[]
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Comment {
  postId: number;
  id: number;
  body: string;
}