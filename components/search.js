import React, { useState } from "react";

export default function Search(props) {
  const [curPosts, setCurPosts] = useState(props.posts);
  const [userInput, setUserInput] = useState("")
  return (
    <div>
      <input type="text" className="border-b mt-5 font-mono" placeholder="Search" value={userInput}></input>
      <div className="w-page space-y-3 pt-5">{curPosts} </div>
    </div>
  );
}
