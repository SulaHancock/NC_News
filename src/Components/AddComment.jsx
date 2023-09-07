import { useState } from "react";
import { useParams } from "react-router-dom";


function AddComment(){
  const [userComment, setUserComment] = useState("")
  const { article_id } = useParams()
  /*
  - create layout of form - done draft
  - get input into into userComment state
  - optimistically render userComment at top
  - send to api (no need to get back as will do that on refresh) - make sure comments always come back in newest date orde
  */
  useEffect(()=>{
  addUserComment(article_id)



    fetchArticleById(article_id)
    .then((article)=>{
    setArticle(article)
  })}

  return (
    <>
    <form className="user_comment-form">
<div className="add_comment_box">
<label className="user_comment_box" htmlFor='item'> Write something in here </label>
<input 
value = {userComment}
onChange={event => setUserComment(event.target.value)}
type="text"
id="user_Comment_input_area"
/>
<button className="user_comments_button">Add Comment</button>
</div>

</form>
</>
  )

  }

export default AddComment;


/*"POST /api/articles/:article_id/comments": {
"description": "adds comment for given article_id",
"queries": [],
"exampleResponse": { "username": "butter_bridge", "body":  "Here I am posting something I'm not supposed to!" }
},*/