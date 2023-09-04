 const fetchAllArticles = () => {
    fetch("https://sulas-news.onrender.com/api/articles") //make into function 
      .then((response) => response.json())
      .then((body) => {
        setArticles(body.articles);
      })}

export default fetchAllArticles;

