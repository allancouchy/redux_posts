import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    content: "J'apprends une nouvelle langue de programmation",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      rocket: 0,
      dislike: 0,
    },
  },
  {
    id: "2",
    content: "C'est vraiment super !",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      rocket: 0,
      dislike: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content, userId) {
        return {
          payload: {
            id: nanoid(),
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              like: 0,
              wow: 0,
              rocket: 0,
              dislike: 0,
            },
          },
        };
      },
    },
    react(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { add, react } = postsSlice.actions;

export default postsSlice.reducer;
