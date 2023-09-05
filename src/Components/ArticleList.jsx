import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchAllArticles }  from "../apiCalls";



//TUESDAY - Think I've done axios correctly, similar to Lee's space code, but not rendering - need to NC help for advice

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((articles) => { 
      setArticles(articles);
      console.log(articles)
      setIsLoading(false);
    });
  }, []);

  if (isLoading === true) {
    return <p>LOADING....</p>;
  } 
  else { return (
      <div>
        {articles.map((article) => {
      return ( //for future - could put link box here, around card so all clickable
      <div>
            <ArticleCard
              articleTitle={article.title}
              articleAuthor={article.author}
              articleTopic={article.topic}
              articleCreated={article.created_at}
              articleVotes={article.votes}
              articleCommentCount={article.comment_count}
              articleImg={article.article_img_url}
            />
          </div>
        )
      })}
        </div>
  )}
}
 

export default ArticleList;