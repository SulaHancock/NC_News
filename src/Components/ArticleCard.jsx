import React from "react";

const ArticleCard = (props) => {
 return (
        <article className="articleCardBox">
   <div> 
     <h3 className="article_title">{props.articleTitle} </h3>
     <h5>{props.articleAuthor}</h5>
     <p className='topic'>{props.articleTopic}</p>   
     <time className="article_created">{props.articleCreated} </time>
     <p className="article_id">{props.article_id}</p>
   </div>
   <img src={props.articleImg} alt={props.articleTitle}></img>
   <p className="article_votes"> Votes: {props.articleVotes} </p>
   <p className="article_comments"> Comments: {props.articleCommentCount}</p>
   
</article>
)}

  export default ArticleCard;




 
