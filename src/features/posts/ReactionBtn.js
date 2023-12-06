import { useDispatch } from "react-redux";
import { react } from "./postsSlice";

const reactionEmojis = {
  like: "👍",
  wow: "😮",
  rocket: "🚀",
  dislike: "👎",
};

const ReactionBtn = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => (
      <button
        key={name}
        type="button"
        onClick={() => dispatch(react({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionBtn;
