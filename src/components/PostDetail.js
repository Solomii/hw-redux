import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Typography, Button } from '@material-ui/core';
import { deletePost} from "../store/actions/postAction"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    border: '0.5px solid #b2b2b4',
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
     display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignContent:"centre"
  },
   button: {
    margin:10
  }

});

export const PostDetail = ({ post }) => {
  const classes = useStyles();

   const dispatch = useDispatch();
  return (
    <Container className={classes.container}>
      <Typography
        variant="h4"
        className={classes.field}>
         {post.title}
      </Typography>
      <Typography
        variant="p"
        className={classes.field}>
         {post.content}
      </Typography>
      <Button
        className={classes.button}
        component={Link} to={`/edit/${post.id}`}
        type="submit"
        variant="contained"
        color="primary"
      >
        Edit
      </Button>
      <Button
        className={classes.button}
        onClick={() => dispatch(deletePost(post.id))}
        type="submit"
        variant="contained"
        color="primary"
      >
        Delete
      </Button>
    </Container>
  )
}
