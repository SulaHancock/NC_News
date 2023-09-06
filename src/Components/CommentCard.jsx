import React from "react";

const CommentCard = (props) => {
 return (
        <section className="comment_card">
<p className="comment_author">{props.commentAuthor}</p>
<p className="comment_body">{props.commentBody}</p>
<p className="comment_date">{props.commentDate}</p>
<p className="commentVotes">{props.commentVotes}</p>
      
</section>
)}

  export default CommentCard;