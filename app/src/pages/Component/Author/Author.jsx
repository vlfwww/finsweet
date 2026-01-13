import style from "./Author.module.scss";
import tw from '../../../../public/tw.png';
import fb from '../../../../public/fb.png';
import ig from '../../../../public/ig.png';
import lk from '../../../../public/lk.png';
import { Link } from "react-router-dom";
function Author(obj){
    return(
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <img src={obj.img} alt="author" />
            </div>
            <p className={style.name}>{obj.name}</p>
            <p className={style.role}>{obj.role}</p>
            <div className={style.socials}>
                <Link to=''><img src={fb} alt="facebook" /></Link>
                <Link to=''><img src={tw} alt="twitter" /></Link>
                <Link to=''><img src={ig} alt="instagram" /></Link>
                <Link to=''><img src={lk} alt="linkedin" /></Link>
            </div>
        </div>
    )
}
export default Author;