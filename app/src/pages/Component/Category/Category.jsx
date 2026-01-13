import style from './Category.module.scss';
function Category(obj){
    return (
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <img src={obj.img} alt="categoryImg" /> 
            </div>
            <p className={style.title}>{obj.title}</p>
            <p className={style.info}>{obj.text}</p>
        </div>
    )
}
export default Category;