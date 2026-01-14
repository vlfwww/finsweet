import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import style from "./BlogPage.module.scss";
import preview from "./img/preview.png";
import BlogPostPart from "../Component/BlogPostPart/Post";
import posts from "../../data/posts.json";
import Category from "../Component/Category/Category";
import categories from "../../data/categories.json";
import Join from "../Component/JoinComponent/Join";

function BlogPage() {
  return (
    <main>
      <Header />
      <section className={style.preview}>
        <div className={style.leftSide}>
          <p className={style.title}>Featured Post</p>
          <p className={style.mainText}>
            Step-by-step guide to choosing great font pairs
          </p>
          <p className={style.nameDate}>
            By <span>John Doe</span> l May 23, 2022{" "}
          </p>
          <p className={style.additionalText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button>Read More {">"}</button>
        </div>
        <div className={style.rightSide}>
          <img src={preview} alt="preview" />
        </div>
      </section>
      <section className={style.postsList}>
        <div className={style.title}>All posts</div>
        <div className={style.wrapper}>
          {posts.map((post) => (
            <BlogPostPart
              key={post.id}
              id={post.id}
              img={post.img}
              category={post.category}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
        <div className={style.buttons}>
          <button>{"<"} Prev </button>
          <button>Next {">"}</button>
        </div>
      </section>
      <section className={style.category}>
        <p className={style.title}>All Categories</p>
        <div className={style.wrapper}>
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
      <section className={style.joinUsWrapper}>
        <Join />
      </section>
      <Footer />
    </main>
  );
}
export default BlogPage;
