import React, { useState } from "react";
import Post from "./post";
export default function Search(props) {
  const [curPosts, setCurPosts] = useState(props.posts);
  const [userInput, setUserInput] = useState("");
  const changeInput = (event) => {
    setUserInput(event.target.value);
    setCurPosts(
      props.posts.filter((post) => {
        if (post.frontmatter.title.includes(userInput)) {
          return true;
        }
        return false;
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        className="border-b mt-5 text-sm"
        value={userInput}
        onChange={changeInput}
      ></input>
      <div className="w-page space-y-3 pt-5">
        {curPosts.map((post) => {
          return (
            <Post
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
              slug={post.slug}
            ></Post>
          );
        })}{" "}
      </div>
    </div>
  );
}
