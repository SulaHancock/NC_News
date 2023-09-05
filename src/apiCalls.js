import axios from "axios" 
//need to import something so have access to info for parametric endpoints?

const BASE_URL = "https://sulas-news.onrender.com/api";


       export function fetchAllArticles() {
       return axios.get(`${BASE_URL}/articles`)
       .then((response)=>{
       return response.data.articles
       });
       };

       export function fetchArticleById(article_id) {
        return axios.get(`${BASE_URL}/articles/${article_id}`)
          .then((response)=>{
        return response.data.articles
          })
        }
          