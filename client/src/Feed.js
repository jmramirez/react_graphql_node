import "./App.css";
import { useState } from "react";
import {gql, useMutation, useQuery} from "@apollo/client";

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

const ADD_POST = gql`
    mutation addPost($post : PostInput!){
        addPost(post: $post){
            id
            text
            user {
                username
                avatar
            }
        }
    }
`;

export const Feed = () =>  {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [postContent, setPostContent] = useState("");
  const [addPost] = useMutation(ADD_POST)

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;


  return (
    <div className="container">
      <div className="postForm">
        <form onSubmit={(e) => {
            e.preventDefault();
            addPost({ variables: {post:{text: postContent}}}).then(() => setPostContent(""))
        }}>
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
              <img src={post.user.avatar} alt="User Avatar" />
              <h2>{post.user.username}</h2>
            </div>
            <p className="content">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


