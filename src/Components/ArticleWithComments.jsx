import CommentList from './CommentList'
import FullArticleCard from './FullArticleCard'
import AddComment from './addComment'




const ArticleWithComments = ()=>{
    return (
        <div className="single_article_page">
<FullArticleCard />
<AddComment />
<CommentList />
</div>
    )}

export default ArticleWithComments