import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

import styles from "./Posts.module.css";

const AddPost = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const handleSend = () => {
    dispatch(add(content, userId));
    setContent("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <form className={styles.form}>
      <select id="author" value={userId} onChange={onAuthorChanged}>
        <option value={""}></option>
        {usersOptions}
      </select>
      <label htmlFor="comment">Ajouter un nouveau commentaire :</label>
      <textarea
        name="comment"
        id="comment"
        value={content}
        onChange={onContentChanged}
        className={styles.textarea}
      />
      <button
        type="button"
        className={styles.button}
        onClick={handleSend}
      >
        Envoyer
      </button>
    </form>
  );
};

export default AddPost;
