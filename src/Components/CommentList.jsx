import { useEffect, useState } from "react";
import { fetchCommentsById } from "../apiCalls";
import CommentCard from './CommentCard'
import { useParams } from "react-router-dom";
import { postComment } from "../apiCalls";
//includeds ability to add comments and read other comments

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();



 useEffect(() => { 
    setIsLoading(true);
    fetchCommentsById(article_id).then((comments) => { 
    setComments(comments);
    setIsLoading(false);
    });
  }, []);

  const handleSubmit = (event)=>{
    event.preventDefault(); 
    setNewComment("")
    //optimistically render comment card - how?
    postComment(article_id, { username:"jessjelly" , body:newComment })
  
   }
  if (isLoading) {
    return <p>LOADING....</p>;
  } 
  else { return (
<>
    <form className="add_comment_form" onSubmit={handleSubmit}>
    <label htmlFor="newComment"> Leave a comment </label>
    <textarea className="newcomment"
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}//what does this do?
    ></textarea>
    <button className="comment_submit_button">Submit comment</button>
</form>
      <section className="comment_list">
        {comments.map((comment) => { //how to make sure coming back in date order? 
      return ( 
        <div key={comment.comment_id}>
            <CommentCard 
commentAuthor={comment.author}
commentBody={comment.body}
commentDate={comment.created_at}
commentVotes={comment.votes}
authorId={comment.article_id}
  />
</div>
      )
      })}
        </section>
        </>
  )}}
 
 export default CommentList;