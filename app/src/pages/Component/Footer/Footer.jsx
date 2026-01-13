import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import socialWrapper from './img/socialWrapper.png'
function Footer(){
    return(
        <div className={style.mainWrapper}>
            <div className={style.footerWrapper}>
                <div className={style.topPart}>
                    <div className={style.leftSide}>&#123; Firsweet</div>
                    <div className={style.rightSide}>
                    <Link to='/'><div className={style.smallLink}>Home</div></Link>
                    <Link to='/'><div className={style.smallLink}>Blog</div></Link>
                    <Link to='/'><div className={style.smallLink}>About Us</div></Link>
                    <Link to='/'><div className={style.smallLink}>Contact us</div></Link>
                    <Link to='/'><div className={style.smallLink}>Privacy Policy</div></Link>
                </div>
                </div>
                <div className={style.mainPart}>
                    <p>Subscribe to our news letter to get latest updates and news</p>
                    <div className={style.subscribeWrapper}>
                        <input type="text" placeholder="Enter Your Email"/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className={style.bottomPart}>
                    <div className={style.leftSide}>
                        <p>Finstreet 118 2561 Fintown</p>
                        <p>Hello@finsweet.com  020 7993 2905</p>
                    </div>
                    <img src={socialWrapper} alt="socialWrapper"/>
                </div>
            </div>

        </div>
    )
}
export default Footer;