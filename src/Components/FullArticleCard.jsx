import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../apiCalls'
import IndividualArticleCard from './IndividualArticleCard';

function FullArticleCard(){
    const [article, setArticle] = useState({})//[] or {} as only bringing one back?
    const [isLoading, setIsLoading] = useState(true);
    const { articleTitle } = useParams()

    useEffect(()=>{
     setIsLoading(true);
     fetchArticleById(article_id)
     .then((article)=>{
     setArticle(article)
        setIsLoading(false);
})
    },[articleTitle]);
    if (isLoading === true) {
        return <p>LOADING....</p>;
      } 
      else { return (
          <section>
            {articles.map((article) => {
          return ( 
                <IndividualArticleCard
                  articleTitle={article.title}
                  articleAuthor={article.author}
                  articleTopic={article.topic}
                  artilceBody={article.body}//how to get this?
                  articleCreated={article.created_at}
                  articleVotes={article.votes}
                  articleCommentCount={article.comment_count}
                  articleImg={article.article_img_url}
                />
          )
          })}
            </section>
      )}
    }
     

export default FullArticleCard;

