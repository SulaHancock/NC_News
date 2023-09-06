import { useEffect, useState } from "react";
import { fetchCommentsById } from "../apiCalls";
import CommentCard from './CommentCard'
import { useParams } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams()

  useEffect(() => { 
    setIsLoading(true);
    fetchCommentsById(article_id).then((comments) => { 
    setComments(comments);
    setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>LOADING....</p>;
  } 
  else { return (
      <section>
      
        {comments.map((comment) => {
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
  )}
}
 

export default CommentList;