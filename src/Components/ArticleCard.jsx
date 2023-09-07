import React from "react";

const ArticleCard = (props) => {
 return (
        <article className="article_card">

     <h3 className="article_mini_title">{props.articleTitle} </h3>
     <img className="article_mini_image" src={props.articleImg} alt={props.articleTitle}></img>
     <h5 className="author_mini_card">{props.articleAuthor}</h5>
     <p className='topic_mini_card'>{props.articleTopic}</p>   
     <time className="article_mini_created">{props.articleCreated} </time>
   <p className="article_mini_votes"> Votes: {props.articleVotes} </p>
   <p className="article_mini_comments"> Comments: {props.articleCommentCount}</p>
   
</article>
)}

  export default ArticleCard;




 
