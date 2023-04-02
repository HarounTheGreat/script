import "./comments.css";
import Comment from "../comment/comment";
import React, { useState } from "react";
function Comments({ trump }) {
  return (
    <div className="comments">
      {trump.map((one_comment) => {
        return <Comment key={one_comment.N} {...one_comment}></Comment>;
      })}
    </div>
  );
}
export default Comments;
