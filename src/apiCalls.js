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
              return response.data.votes
            })
          }

          export function removeVoteFromApi(article_id){ 
            axios.patch(`${BASE_URL}/articles/${article_id}`, {inc_votes: -1})
              .then((response)=>{
                return response.data.votes
              })
            }

            export function postComment(article_id, newComment){
              const {username, body} = newComment 
              axios.post(`${BASE_URL}/articles/${article_id}/comments`, {username,body}) 
              .then((response)=>{
                console.log("came back", response)
               return response
              })
            }

