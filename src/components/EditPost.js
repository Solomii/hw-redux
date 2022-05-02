import React, { useEffect, useState } from "react";

import { editPost } from "../store/actions/postAction";

import { Link, useParams, useNavigate  } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Container, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts);
  const currentPosts = posts.find(post => post.id === parseInt(id));
  
    useEffect(() => {
      setTitle(currentPosts.title);
      setContent(currentPosts.content);
    }, [currentPosts]);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();  
      const data= {
      id: parseInt(id),
      title,
      content,
    }
    
    dispatch(editPost(data))
    navigate("/");
  };

  return (
    <Container className={classes.wrapper}>
      {
        currentPosts ? (
         <>
      <Typography variant="h2">
        Edit Post {id}
      </Typography>
   <form noValidate autoComplete="off" onSubmit={handleSubmit}  >
        <TextField
        className={classes.field}  
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}        
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
