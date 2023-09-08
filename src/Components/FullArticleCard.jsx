import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../apiCalls'
import ArticleVote from './ArticleVote';


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
        <section className="full_article_card">
          <header className="articleCard_header">
         <h3 className="article_title">{article.title} </h3>
          <h5 className="article_author">{article.author}</h5>
          <p className='article_topic'>{article.topic}</p>   
          </header>
          <img className="article_image" src={article.article_img_url} alt={article.title}></img>
          <p className="article_body">{article.body}</p>
        <p className="article_comments">Comments {article.comments}</p>
        <ArticleVote />
      </section>

      )}
    }
     


export default FullArticleCard

