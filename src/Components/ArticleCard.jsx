//Make article cards that will be displayed in ArticleList
//don't need to import state if not declaring state
import React from "react";




const ArticleCard = (props) => {
 return (
        <section className="articleCardBox">
   <div> 
     <h3 claaName="article_title">{props.articleTitle} </h3>
     <h5>{props.articleAuthor}</h5>
     <p className='topic'>{props.articleTopic}</p>   
     <p className="article_created">{props.articleCreated} </p>
   </div>
   <img src={props.articleImg} alt={props.articleTitle}></img>
   <p className="votes"> Votes: </p>
   <p className="article_comments">{props.articleVotes} Comments: {props.articleCommentCount}</p>
   
</section>
)}

  export default ArticleCard;




 
