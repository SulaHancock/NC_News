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

          // Q7 export function FetchArticleVotesByID(article_id) {
          //   return axios.get(`${BASE_URL}/articles/${article_id}/votes`) /*will this work? do a fetchArticlesById instead?*/
          //   .then((articles)=>{
          //     console.log("votes-->", articles.data)
          //     return articles.data
            
          //   })
          // }