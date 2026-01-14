import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Post from "../Component/Post/Post";
import Category from "../Component/Category/Category";
import Author from "../Component/Author/Author";
import Join from "../Component/JoinComponent/Join";

import style from "./MainPage.module.scss";
import { Link } from "react-router-dom";

import posts from "../../data/posts.json";
import categories from "../../data/categories.json";
import authors from "../../data/authors.json";

import postImg from "./img/postImg.png";
import startedImg from "./img/startedImg.png";
import LogoComponent from "./img/LogoComponent.png";
import profilePicture from "./img/profilePicture.png";
function MainPage() {
  return (
    <main>
      <Header />
      <section className={style.mainBigPageWrapper}>
        <div className={style.mainPageWrapper}>
          <p className={style.posted}>
            Posted on <span>startup</span>
          </p>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <p className={style.authorDate}>
            By <span>James West</span> | May 23, 2022{" "}
          </p>
          <p className={style.textInfo}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button>{"Read More >"}</button>
        </div>
      </section>
      <section className={style.postsWrapper}>
        <div className={style.leftSide}>
          <p>Featured Post</p>
          <div className={style.lineWrapper}>
            <img src={postImg} alt="postImg" />
            <p className={style.nameDate}>
              By <span>John Doe</span> l May 23, 2022
            </p>
            <p className={style.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className={style.dopInfo}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button>{"Read More >"}</button>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.flexWrapper}>
            <p>All Posts</p>
            <Link to='/blog'>View All</Link>
          </div>
          {posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              date={post.date}
              title={post.title}
            />
          ))}
        </div>
      </section>
      <section className={style.aboutWrapper}>
        <div className={style.patternLine}>
          <div className={style.yellowPart}></div>
          <div className={style.purplePart}></div>
        </div>
        <div className={style.colorWrapper}>
          <div className={style.wrapper}>
            <div className={style.leftSide}>
              <p className={style.title}>ABOUT US</p>
              <p className={style.mainText}>
                We are a community of content writers who share their learnings
              </p>
              <p className={style.additionInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={style.rightSide}>
              <p className={style.title}>Our mision</p>
              <p className={style.mainText}>
                Creating valuable content for creatives all around the world
              </p>
              <p className={style.additionInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <Link>Read More {">"}</Link>
        </div>
      </section>
      <section className={style.categoryWrapper}>
        <p className={style.title}>Choose A Category</p>
        <div className={style.flexWrapper}>
          {categories.map((category) => (
            <Category
              key={category.id}
              img={category.img}
              title={category.title}
              text={category.text}
            />
          ))}
        </div>
      </section>
      <section className={style.startedWrapper}>
          <div className={style.imgWrapper}>
            <img src={startedImg} alt="startedImg"/>
          </div>
          <div className={style.textWrapper}>
            <p className={style.title}>Why we started </p>
            <p className={style.mainText}>It started out as a simple idea and evolved into our passion</p>
            <p className={style.additionalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button>Discover our story {'>'}</button>
          </div>
      </section>
      <section className={style.authorsWrapper}>
        <p className={style.title}>List of Authors</p>
        <div className={style.flexWrapper}>
          {authors.map((author) => <Author key={author.id} img={author.img} name={author.name} role={author.role}/>)}
        </div>
      </section>
      <div className={style.logoImg}><img src={LogoComponent} alt="LogoComponent" /></div>
      <section className={style.reviews}>
        <div className={style.leftSide}>
          <p className={style.title}>TESTIMONIALS</p>
          <p className={style.mainText}>What people say about our blog</p>
          <p className={style.additionalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className={style.rightSide}>
          <p className={style.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={style.bottomWrapper}>
            <div className={style.personInfo}>
                <img src={profilePicture} alt="profilePicture" />
                <div className={style.textInfo}>
                    <p className={style.name}>Jonathan Vallem</p>
                    <p className={style.sity}>New york, USA</p>
                </div>
            </div>
            <div className={style.navigation}>
                <div className={style.leftArrow}>{'<'}</div>
                <div className={style.rightArrow}>{'>'}</div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.joinUsWrapper}>
          <Join/>
      </section>
      <Footer/>
    </main>
  );
}
export default MainPage;
