import "./App.css";
import { useState } from "react";
import avatar1 from "./assets/images/avatar1.png";
import avatar2 from "./assets/images/avatar2.png";
import {gql, useQuery} from "@apollo/client";

const GET_POSTS = gql`
{
  posts {
    id
    text
    user {
      avatar
      username
    }
  } 
}`;



export const Feed = () =>  {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [postContent, setPostContent] = useState("");

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

  /*const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      text: postContent,
      user: {
        avatar: avatar1,
        username: "Fake user",
      },
    };
    setPosts([newPost, ...posts]);
    setPostContent("");
  };*/

  return (
    <div className="container">
      <div className="postForm">
        <form >
          <textarea
            placeholder="Write your post!"
            value={postContent}
            onChange={handlePostContentChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="feed">
        {data.posts.map((post, i) => (
          <div key={post.id} className="post">
            <div className="header">
              <img src={post.user.avatar} />
              <h2>{post.user.username}</h2>
            </div>
            <p className="content">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


