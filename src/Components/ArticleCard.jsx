//Make article cards that will be displayed in ArticleList
//don't need to import state if not declaring state
import React from "react";




const ArticleCard = (props) => {
 return (
        <section className="articleCardBox">
   <div> 
     {props.articleTitle} 
     <p>Author: {props.articleAuthor}</p>   
     <p>Topic:  {props.articleTopic}</p>
     <p>Article Created:{props.articleCreated} </p>
   </div>
   <img src={props.articleImg} alt={props.articleTitle}></img>
   <p> {props.articleVotes} {props.articleCommentCount}</p>
   
</section>
)}

  export default ArticleCard;




 
