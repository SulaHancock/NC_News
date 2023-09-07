import CommentList from './CommentsList'
import FullArticleCard from './FullArticleCard'



const ArticleWithComments = ()=>{
    return (
        <div className="single_article_page">
<FullArticleCard />
<CommentList />
</div>
    )
    }

export default ArticleWithComments 