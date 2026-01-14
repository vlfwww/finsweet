import posts from "../../data/posts.json";
import authors from "../../data/authors.json";
import { useParams } from "react-router-dom";
import style from "./BlogPostPage.module.scss";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Join from "../Component/JoinComponent/Join";
import { useEffect } from "react";

function BlogPostPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = posts.find((p) => p.id === Number(id));
  
  if (!post) return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Пост не найден</h2>;

  const author = authors.find((a) => a.id === post.authorId);

  return (
    <div className={style.bigWrapper}>
      <Header />
      <main className={style.mainContent}>
        <section className={style.preview}>
          <div className={style.topPart}>
           
            <img src={author?.img} alt={author?.name} />
            <div className={style.right}>
              <p className={style.name}>{author?.name}</p>
              <p className={style.postDate}>Posted on {post.date}</p>
            </div>
          </div>
          
          <h1 className={style.title}>{post.title}</h1>
          
          <div className={style.bottomPart}>
           
            <img src={post.categoryImg || "/img/icons/startup.svg"} alt="categoryIcon" />
            <p>{post.category_tag}</p>
          </div>
        </section>

        <div className={style.imgWrapper}>
          <img src={post.img} alt="Post Main" />
        </div>

        <section className={style.mainInfo}>
          {post.content.map((item, index) => {
            if (item.type === "heading") {
              return <h2 key={index} className={style.heading}>{item.text}</h2>;
            }
            if (item.type === "paragraph") {
              return <p key={index} className={style.text}>{item.text}</p>;
            }
            if (item.type === "list") {
              return (
                <ul key={index} className={style.list}>
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </section>
      </main>
      <Join />
      <Footer />
    </div>
  );
}

export default BlogPostPage;