import style from './Post.module.scss';
function Post(obj){
    return (
        <div className={style.postWrapper}>
            <p>By <span>{obj.name}</span>   l   {obj.date} </p>
            <h1>{obj.title}</h1>
        </div>
    )
}
export default Post;