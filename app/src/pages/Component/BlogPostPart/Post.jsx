import style from './Post.module.scss';
import { Link } from 'react-router-dom';
function Post(obj){
    return (
        <Link to={`/post/${obj.id}`} className={style.wrapper}>
            <div className={style.leftSide}>
                <img src={obj.img} alt="Image"/>
            </div>
            <div className={style.rightSide}>
                <p className={style.category}>{obj.category}</p>
                <p className={style.title}>{obj.title}</p>
                <p className={style.description}>{obj.description}</p>
            </div>
        </Link>
    )
}
export default Post;