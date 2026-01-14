import style from './Post.module.scss';
function Post(obj){
    return (
        <div className={style.wrapper}>
            <div className={style.leftSide}>
                <img src={obj.img} alt="Image"/>
            </div>
            <div className={style.rightSide}>
                <p className={style.category}>{obj.category}</p>
                <p className={style.title}>{obj.title}</p>
                <p className={style.description}>{obj.description}</p>
            </div>
        </div>
    )
}
export default Post;