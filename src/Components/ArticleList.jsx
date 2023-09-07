import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchAllArticles }  from "../apiCalls";
import { Link } from 'react-router-dom'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((articles) => { 
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>LOADING....</p>;
  } 
  else { return (
      <section className='behind_comment_card'>
        {articles.map((article) => {
      return ( 
        <Link to={`/articles/${article.article_id}`} 
        key={article.article_id}>
            <ArticleCard
              articleTitle={article.title}
              articleAuthor={article.author}
              articleTopic={article.topic}
              articleCreated={article.created_at}
              articleVotes={article.votes}
              articleCommentCount={article.comment_count}
              articleImg={article.article_img_url}
            />
        </Link>
      )

      })}

        </section>
       
  )}

}
 

export default ArticleList;