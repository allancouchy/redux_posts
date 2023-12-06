import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import styles from "./Posts.module.css";
import TimePost from "./TimePost";
import ReactionBtn from "./ReactionBtn";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  // sort more or less recent posts
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className={styles.textbox}>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimePost timestamp={post.date} />
      </p>
      <ReactionBtn post={post} />
    </article>
  ));

  return (
    <div>
      <h1>Liste de commentaire</h1>
      {renderedPosts}
    </div>
  );
};

export default Posts;
