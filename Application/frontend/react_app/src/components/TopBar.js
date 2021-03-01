import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Skin Cancer Prediction
          </Typography>
          <IconButton aria-label="home page" color="inherit" href="/">
            <HomeIcon />
          </IconButton>
          {props.isAuthenticated ? <Button color="inherit" href="/analysis">Perform Analysis</Button> : null}        
          {props.isAuthenticated ? <Button color="inherit" href="/learn">Get Informed</Button> : null}        
          {props.isAuthenticated ? <Button color="inherit" href="/profile">My Profile</Button> : null}        
          {props.isAuthenticated ? <Button color="inherit" href="/update_password">Update Password</Button> : null}
          {props.isAuthenticated ? <Button color="inherit" onClick={() => props.logout()}>Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}