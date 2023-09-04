import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "../apiCalls";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles()  // api call function 
    .then((response) => response.json())
    .then((body) => {
      setArticles(body.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>LOADING....</p>;
  } else {
    return (
      <div>
        {articles.map((article) => (
          <div key={article.id}>
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
        ))}
      </div>
    );
  }
};

export default ArticleList;

