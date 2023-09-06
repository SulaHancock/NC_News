import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../apiCalls'


function FullArticleCard(){
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams()

    useEffect(()=>{
     setIsLoading(true);
     fetchArticleById(article_id)
     .then((article)=>{
     setArticle(article)
        setIsLoading(false);
})
    },[article_id]);
    if (isLoading === true) {
        return <p>LOADING....</p>;
      } 
      else { return (
        <section className="Full_Article_Card">
         <h3 className="article_title">{article.title} </h3>
          <h5>{article.author}</h5>
          <p className='topic'>{article.topic}</p>   
          <p className="article_body">{article.body}</p>
        <img src={article.article_img_url} alt={article.title}></img>
        <p className="votes"> Votes: </p>
        <p className="article_votes">{article.votes}</p>


      </section>

      )}
    }
     


export default FullArticleCard

