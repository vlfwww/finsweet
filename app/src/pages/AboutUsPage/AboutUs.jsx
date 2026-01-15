import style from "./AboutUs.module.scss";
import Header from "../Component/Header/Header";
import Join from "../Component/JoinComponent/Join";
import Footer from "../Component/Footer/Footer";
import blogImg from '/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png';
import teamImg from '/ground-group-growth-hands-461049.png';
import authors from "../../data/authors.json";
import Author from "../Component/Author/Author";
function AboutUs() {
  return (
    <div className={style.bigMainWrapper}>
      <Header />
      <main>
        <section className={style.preview}>
          <div className={style.flexWrapper}>
            <div className={style.leftSide}>
              <p className={style.title}>ABOUT US</p>
              <p className={style.mainText}>
                We are a team of content writers who share their learnings
              </p>
            </div>
            <p className={style.rightSide}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <section className={style.mainPoints}>
          <div className={style.numbers}>
            <div className={style.left}>
              <p className={style.num}>12+</p>
              <p className={style.text}>Blogs Published</p>
            </div>
            <div className={style.center}>
              <p className={style.num}>18K+</p>
              <p className={style.text}>Views on Finsweet</p>
            </div>
            <div className={style.right}>
              <p className={style.num}>30K+</p>
              <p className={style.text}>Total active Users</p>
            </div>
          </div>
          <div className={style.lines}>
            <div className={style.purple}></div>
            <div className={style.yellow}></div>
          </div>
        </section>
        <section className={style.missionVision}>
          <div className={style.left}>
            <p className={style.title}>Our mision</p>
            <p className={style.mainText}>Creating valuable content for creatives all around the world</p>
            <p className={style.additionalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
          <div className={style.right}>
            <p className={style.title}>Our Vision</p>
            <p className={style.mainText}>A platform that empowers individuals to improve</p>
            <p className={style.additionalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
        </section>
        <section className={style.team}>
          <div className={style.left}>
            <p className={style.title}>Our team of creatives</p>
            <p className={style.mainInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p className={style.additionalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
          <div className={style.right}>
            <img src={teamImg} alt="teamImg" />
          </div>
        </section>
        <section className={style.blog}>
          <div className={style.left}>
            <img src={blogImg} alt="blogImg" />
          </div>
          <div className={style.right}>
            <p className={style.title}>Why we started this Blog</p>
            <p className={style.mainInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p className={style.additionalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </section>
        <section className={style.authorsWrapper}>
        <p className={style.title}>List of Authors</p>
        <div className={style.flexWrapper}>
          {authors.map((author) => <Author key={author.id} img={author.img} name={author.name} role={author.role}/>)}
        </div>
      </section>
      </main>
      <Join />
      <Footer />
    </div>
  );
}
export default AboutUs;
