import PostAuthor from "./PostAuthor";
import TimePost from "./TimePost";
import ReactionBtn from "./ReactionBtn";
import styles from "./Posts.module.css";

const PostExcerpt = ({ post }) => {
  return (
    <article className={styles.textbox}>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimePost timestamp={post.date} />
      </p>
      <ReactionBtn post={post} />
    </article>
  );
};

export default PostExcerpt;
