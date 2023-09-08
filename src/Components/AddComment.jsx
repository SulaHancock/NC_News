// import { useState } from "react";
// import { postComment } from "../apiCalls";
// import { useParams } from "react-router-dom";

// /*
// 1. create a form 
// - id='new_comment" - does this mean the text added now has an id? whats onChange about?
// - capture comment via onSubmit(calls handleSubmit function)
// 2. handleSubmit function 
// - event.preventDefault() - prevents refresh 
// - update UI (optimistic rendering) - how?
// - PostComment via api call - Patch or Post? (will refresh all new comments when refreshed)
// do always need a .then for api call?
// - setNewComment("") to empty form comment box
// */
// function AddComment(/*datafromform*/){
//   const [newComment, setNewComment] = useState("");
//   const {article_id} = useParams();
// //need params for article_id?

//   const handleSubmit = (event)=>{
//     event.preventDefault(); 
//     //update UI with new comment first - do this when rest is working first 
//     postComment({ article_id, text:newComment })//why text part?
//     .catch((err)=>{
//       setErr('Something has gone wrong, please try to submit your comment later')//sends new comment to db, sends back full body (comments?)
//     //if successful, page should refresh will all comments inc newest at top - how?
//     setNewComment("")

//   })}
  
//   return (
//     <>
//     <form className="user_comment-form" onSubmit={handleSubmit}>
//     <label htmlFor="newComment"> Leave a comment </label>
//     <textarea
//     id="newcomment"//name for inputted text?
//     value={newComment}
//     onChange={(e) => setNewComment(e.target.value)}//what does this do?
//     ></textarea>
//     <button className="comment_submit_button">Submit comment</button>
// </form>
//   </>
//   )
// }

// export default AddComment;


// /*"POST /api/articles/:article_id/comments": {
// "description": "adds comment for given article_id",
// "queries": [],
// "exampleResponse": { "username": "butter_bridge", "body":  "Here I am posting something I'm not supposed to!" }
// },*/