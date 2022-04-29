import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";



import { Container, TextField, Button, Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from "@material-ui/styles";

import { addPost } from "../store/actions/postAction";


const useStyle = makeStyles(() => ({
  wrapper: {
    marginTop: 50,
    padding:20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20
  },

}));

export const AddPost = () => {
  const classes = useStyle();

  const [post, setPost] = useState({
    id: 0,
    title: '',
    content: ''
  });
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post))
    setPost({
      id: uuidv4(),
      title: "",
      content: "",
    });    
  }

  return (
    <Container className={classes.wrapper}>
      <Typography variant="h2">
        Create a New Post
      </Typography>
   <form noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField
        className={classes.field}  
        onChange={handleChange}
        value={post.title}
        type="text"
        variant="outlined"
        label="Write Title Post"
        color="primary"
        name="title"
        fullWidth
        required  
      />
        <TextField
        className={classes.field}  
        onChange={handleChange}
        value={post.content}
        variant="outlined"
        label="Write post"
        color="primary"
        name="content"
        type="text"
        fullWidth
        multiline
        rows={4}
        required
        />
        <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Add
      </Button> 
      </form>    
</Container>
  )
}