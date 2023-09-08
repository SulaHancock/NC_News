import { useState } from "react";
import { postComment } from "../apiCalls";
import { useParams } from "react-router-dom";

// /*
// 1. create a form - DONE
// - capture comment via onSubmit(calls handleSubmit function) - DONE
// 2. handleSubmit function 
// - event.preventDefault() - prevents refresh - DONE
// - update UI (optimistic rendering) - how? 
// - PostComment to db via api call - DONE
// - error handle api not working - 
// - setNewComment("") to empty form comment box - 
// - all new comments updated on refresh - DONE
// */
function AddComment(/*datafromform*/){
  const [newComment, setNewComment] = useState("");
  const {article_id} = useParams();


  const handleSubmit = (event)=>{
    event.preventDefault(); 
//     //update UI with new comment first - do this when rest is working 
    postComment(article_id, { username:"jessjelly" , body:newComment })/*sends new comment and username to db via article_id*/
    setNewComment("")//clears newComment state so it's ready for new comment to be added
   }

  
  return (
    <>
    <form className="user_comment-form" onSubmit={handleSubmit}>
    <label htmlFor="newComment"> Leave a comment </label>
    <textarea className="newcomment"
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}//what does this do?
    ></textarea>
    <button className="comment_submit_button">Submit comment</button>
</form>
  </>
  )
}

export default AddComment;


// /*"POST /api/articles/:article_id/comments": {
// "description": "adds comment for given article_id",
// "queries": [],
// "exampleResponse": { "username": "butter_bridge", "body":  "Here I am posting something I'm not supposed to!" }
// },*/