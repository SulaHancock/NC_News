import React from "react";

const ArticleCard = (props) => {
 return (
        <section className="articleCardBox">
   <div> 
     <h3 className="article_title">{props.articleTitle} </h3>
     <h5>{props.articleAuthor}</h5>
     <p className='topic'>{props.articleTopic}</p>   
     <p className="article_created">{props.articleCreated} </p>
     <p className="article_id">{props.article_id}</p>
   </div>
   <img src={props.articleImg} alt={props.articleTitle}></img>
   <p className="votes"> Votes: </p>
   <p className="article_comments">{props.articleVotes} Comments: {props.articleCommentCount}</p>
   
</section>
)}

  export default ArticleCard;




 
