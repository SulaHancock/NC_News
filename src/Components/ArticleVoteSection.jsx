import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../apiCalls";
import { addVoteToApi } from "../apiCalls";
import { removeVoteFromApi } from "../apiCalls";

/*Next steps:
- how to keep votes on screen?
- How to set initial state to votes from db? */

const ArticleVoteSection = () => {
  const [articleVotes, setArticleVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [err, setErr] = useState(null)
  const { article_id } = useParams(); 


  useEffect(() => {
    fetchArticleById(article_id)
    .then((article) => {
    setArticleVotes(article.votes);
    });
  }, [article_id]);

function increaseVotes(){
    if (!voted){
    setArticleVotes((articleVotes) => articleVotes + 1);
    setErr(null)
    addVoteToApi(article_id)
    .catch((err)=>{
      setErr('Something has gone wrong, please try again later')
    })
    setVoted(true)
    }
    
  };

  function decreaseVotes(){
    if (!voted){
    setArticleVotes((articleVotes) => articleVotes - 1);
    setErr(null)
    removeVoteFromApi(article_id)
    .catch((err)=>{
      setErr('Something has gone wrong, please try again later.')
    })
    setVoted(true)
    }
  };

  return (
    <section className="article_vote_buttons">
      {err ? <p>{err}</p> : null}
        <p className="article_vote_count">Votes: {articleVotes}</p>
        <button className="article_vote_button" onClick={decreaseVotes}>-</button>
      <button className="article_vote_button" onClick={increaseVotes}>+</button>
  
    </section>
  );
};

export default ArticleVoteSection;
