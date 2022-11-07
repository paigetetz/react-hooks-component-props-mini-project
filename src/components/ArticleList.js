import Article from './Article';

function ArticleList({posts}){

// const articleArray = posts.map((article) => {
//     return <Article 
//     key = {article.id}
//     article = {article}
//     />
// })
return( 
    <main>

        {posts.map((post) => <Article key = {post.id} post = {post}/>)}
    
        {/* {articleArray} */}
    </main>
)
}
export default ArticleList;