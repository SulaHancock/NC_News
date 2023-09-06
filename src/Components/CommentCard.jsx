import React from "react";

const CommentCard = (props) => {
  return (
    <article className="comment_card">
      <h3 className="comment_author">{props.commentAuthor}</h3>
      <p className="comment_body">{props.commentBody}</p>
      <footer className ="comment_footer">
        <time className="comment_date">{props.commentDate}</time>
        <p className="comment_votes">Comment votes: {props.commentVotes}</p>
      </footer>
    </article>
  );
};

export default CommentCard;
