import { useEffect, useState } from "react";
import { fetchCommentsById } from "../apiCalls";
import CommentCard from './CommentCard'
import { useParams } from "react-router-dom";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams()
  console.log("from commentsList via props", article_id)
  useEffect(() => { 
    setIsLoading(true);
    fetchCommentsById(article_id).then((comments) => { 
      console.log('article_id from CommentList', article_id) 
    setComments(comments);
    setIsLoading(false);
    });
  }, []);

  if (isLoading === true) {
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