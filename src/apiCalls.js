import axios from "axios" 

const BASE_URL = "https://sulas-news.onrender.com/api";
//api path that works for all articles: https://sulas-news.onrender.com/api/articles

       export function fetchAllArticles() {
       return axios.get(`${BASE_URL}/articles`)
       .then((response)=>{//add error handling in here?
        console.log("response is here", response)
       return response.data.articles
       });
       };
