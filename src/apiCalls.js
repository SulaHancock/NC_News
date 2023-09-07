import axios from "axios" 


const BASE_URL = "https://sulas-news.onrender.com/api";


       export function fetchAllArticles() {
       return axios.get(`${BASE_URL}/articles`)
       .then((response)=>{
       return response.data.articles
       });
       };

       export function fetchArticleById(article_id) {
        return axios.get(`${BASE_URL}/articles/${article_id}`)
          .then((article)=>{
        return article.data.article
          })
        }
          
        export function fetchCommentsById(article_id) {
          return axios.get(`${BASE_URL}/articles/${article_id}/comments`) 
          .then((comments)=>{
          return comments.data

          });
          };

         export function addVoteToApi(article_id){ 
          axios.patch(`${BASE_URL}/articles/${article_id}`, {inc_votes: 1})
            .then((response)=>{
              setArticleVotes(response.data.votes)
            })
          }

          export function removeVoteFromApi(article_id){ 
            axios.patch(`${BASE_URL}/articles/${article_id}`, {inc_votes: -1})
              .then((response)=>{
                setArticleVotes(response.data.votes)
              })
            }