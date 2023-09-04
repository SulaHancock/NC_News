import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from './ArticleCard'


//tuesday - trying to make api call into a function - look at email with git responses and use Axios

const ArticleList = () => {
  const [articles, setArticles] = useState([]); //state to hold what comes back from api
  const [isLoading, setIsLoading] = useState(false); //state to wait for api to respond so we can run mapping when api data is back

  useEffect(() => {
    //to get all articles from api
    setIsLoading(true);
    fetch("https://sulas-news.onrender.com/api/articles") //make into function 
      .then((response) => response.json())
      .then((body) => {
        setArticles(body.articles);
        setIsLoading(false);
      });
      

  }, []); 



   if(isLoading===true){
    return <p>
      LOADING....
    </p>
   }
   else{ return(
    <div>
     
      {articles.map((article) => {
        return (
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
        
          );
      })}
    </div>)
   }
}

export default ArticleList;