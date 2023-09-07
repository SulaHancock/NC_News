import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../apiCalls";


const ArticleVoteButtons = () => {
  const [articleVotes, setArticleVotes] = useState(0); /*what to set as initially? - will user see 0 briefly before useEffect works?*/
  const { article_id } = useParams(); /*how to get article_votes via params?*/

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticleVotes(article.votes);
    });
  }, [article_id]);

  const increaseVotes = () => {
    setArticleVotes((articleVotes) => articleVotes + 1);
  };

  const decreaseVotes = () => {
    setArticleVotes((articleVotes) => articleVotes - 1);
  };

  return (
    <section className="article_vote_buttons">
        <p className="article_vote_count">{articleVotes}</p>
      <button onClick={increaseVotes}>+</button>
      <button onClick={decreaseVotes}>-</button>
    </section>
  );
};

export default ArticleVoteButtons;
