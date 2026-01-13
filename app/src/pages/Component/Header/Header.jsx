import style from './Header.module.scss';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <div className={style.mainWrapper}>
            <div className={style.wrapper}>
                <div className={style.leftSide}>&#123; Firsweet</div>
                <div className={style.rightSide}>
                    <Link to='/'><div className={style.smallLink}>Home</div></Link>
                    <Link to='/'><div className={style.smallLink}>Blog</div></Link>
                    <Link to='/'><div className={style.smallLink}>About Us</div></Link>
                    <Link to='/'><div className={style.smallLink}>Contact us</div></Link>
                    <Link to='/'><div className={style.subscribe}>Subscribe</div></Link>
                </div>
            </div>
        </div>
    )
}
export default Header;