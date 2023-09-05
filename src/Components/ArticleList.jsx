import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchAllArticles }  from "../apiCalls";


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

  if (isLoading === true) {
    return <p>LOADING....</p>;
  } 
  else { return (
      <section>
        {articles.map((article) => {
      return ( 
        <Link to={`/articles/${article_id}`} key={articleTitle}>
            <ArticleCard
              articleTitle={article.title}
              articleId={article.article_id}
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