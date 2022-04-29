import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { Container, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  wrapper: {
    marginTop: 50,
    padding:20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    margin:10
  }

}));


export const EditPost = () => {
  const classes = useStyle();
  const { id } = useParams();
   const [post, setPost] = useState({
    id: 1,
    title: '',
    content: ''
  });
  const posts = useSelector(state => state.posts);
  const currentPosts = posts.find(post => post.id === parseInt(id));
  
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };

 
  return (
    <Container className={classes.wrapper}>
      {
        currentPosts ? (
         <>
      <Typography variant="h2">
        Edit Post {id}
      </Typography>
   <form noValidate autoComplete="off"  >
        <TextField
        className={classes.field}  
        type="text"
        value={post.title}
        onChange={handleChange}
        variant="outlined"
        label="Write Title Post"
        color="primary"
        name="title"
        fullWidth
        required  
      />
        <TextField
        className={classes.field}  
        variant="outlined"
        label="Write post"
        value={post.content}
        onChange={handleChange}
        color="primary"
        name="content"
        type="text"
        fullWidth
        multiline
        rows={4}
        required
        />
        <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
      >
        Update post
        </Button> 
        <Button
        className={classes.button}
        component={Link} to="/"
        type="submit"
        variant="contained"
        color="primary"
      >
       Cansel
       </Button> 
            </form> 
            </> 
        )
          : (
        <Typography variant="h2">
        Post with id {id} not exists
      </Typography>  
     )}
   
</Container>
  )
}
