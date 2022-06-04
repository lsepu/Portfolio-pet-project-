import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts} from "../state/features/PostsSlice";
import { IState } from "../state/store";

const AboutMe = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: IState)  => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <div>
      {posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
};

export default AboutMe;
