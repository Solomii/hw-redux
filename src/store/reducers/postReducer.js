const initialState = {
  posts: [
    {id: 1, title: 'Creative ', content: 'Colorful, on-brand, and most importantly visually familiar, this graphic is an excellent example of how to use design as visual shorthand. Before even reading the caption or the image text, the audience knows this post is full of resources.'},
    {id: 2, title: 'Content ', content: 'Timely content still needs to be useful content. Instead of making a blanket statement about “unprecedented times” without providing any value, HubSpot took the time to listen to what their audience needed, develop resources, and deliver those resources in a helpful, human-focused way.'},
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        posts: [action.post, ...state.posts],
      };
    case "DELETE_POST":
      const newPost = state.posts.filter((post) => post.id !== action.id);
      return {
        posts: newPost,
      };
    case "EDIT_POST":
     return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.post,
          };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postReducer;