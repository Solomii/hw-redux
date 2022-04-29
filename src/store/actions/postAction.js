export const addPost = (post) => {
  return { type: "ADD_POST", post }
}

export const deletePost = (id) => {
  return { type: "DELETE_POST", id }
}

// export const editPost = (id, post) => {
//   return {
//     type: "EDITE_POST",
//     id,
//     post,
//   }
// }