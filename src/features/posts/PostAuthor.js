import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import styles from "./Posts.module.css";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <span className={styles.author}>
      by {author ? author.name : "Auteur inconnu"}
    </span>
  );
};

export default PostAuthor;
