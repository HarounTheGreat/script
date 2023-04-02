import "./comment.css";
import React, { useState } from "react";

function Comment({
  id,
  N,
  comment,
  year,
  hour_z_time,
  comment_type,
  Language,
}) {
  const [readMore, setReadMore] = useState(false);
  var operator = "netural";
  if (comment_type === "P") {
    operator = "positive";
  } else if (comment_type === "N") {
    operator = "negative";
  } else {
    operator = "netural";
  }

  return (
    <div className="box">
      <div className="item-1">{N}</div>
      <div className={operator}>
        <div className="item-2">
          {/* <p>{readMore ? comment : `${comment.substring(0, 200)}...`}</p> */}
          <p>{affiche(readMore, comment)}</p>
          {comment.length > 200 && (
            <button
              className="btn"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
        <div className="item-3">{year[0] + "-" + year[1] + "-" + year[2]}</div>
      </div>
    </div>
  );
}

export default Comment;

const Read = (readMore, comment) => {
  return readMore ? comment : `${comment.substring(0, 200)}...`;
};

const affiche = (readMore, comment) => {
  if (readMore) {
    return comment;
  } else {
    if (comment.length > 200) {
      return `${comment.substring(0, 200)}...`;
    } else {
      return `${comment.substring(0, 200)}`;
    }
  }
};
