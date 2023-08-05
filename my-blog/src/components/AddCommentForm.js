import React, { useState } from "react";
import useUser from "../hooks/UseUser";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
    console.log(body);
  };
  return (
    <div id="add-comment-form">
      <h3>Add a Comment:</h3>
      {user && <p>You are posting as {user.email}</p>}

      <textarea
        rows="4"
        cols="50"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      />

      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
};
export default AddCommentForm;
