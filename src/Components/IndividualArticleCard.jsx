import React from "react";


const IndividualArticleCard = (props) => {
 return (
        <section className="IndividualArticleCard">
   <div> 
     <h3 className="article_title">{props.articleTitle} </h3>
     <h5>{props.articleAuthor}</h5>
     <p className='topic'>{props.articleTopic}</p>   
     <p className="article_created">{props.articleCreated} </p>
     <p className="article_body">NEED TO ACCESS ARTICLE BODY - HOW?</p>
   </div>
   <img src={props.articleImg} alt={props.articleTitle}></img>
   <p className="votes"> Votes: </p>
   <p className="article_comments">{props.articleVotes} Comments: {props.articleCommentCount}</p>
</section>
)}
//line 12 - how to get actual article content in here?
//add ability to vote on card later

  export default IndividualArticleCard;