import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Brightness1Icon from '@material-ui/icons/Brightness1';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.toolbarTitle}>
            <IconButton aria-label="circle" href="/"  className={classes.toolbarTitle}>
              <Brightness1Icon style={{ color: "2b5abe" }} />
            </IconButton>
          </Typography>
          <nav>
            <Button color="default" href="/">Home Page</Button>
            {props.isAuthenticated ? <Button color="default" href="/analysis">Analysis</Button> : null}        
            {props.isAuthenticated ? <Button color="default" href="/learn">Get Informed</Button> : null}      
            {props.isAuthenticated ? <Button color="default" href="/profile">My Profile</Button> : null}
          </nav>
          {props.isAuthenticated ? <Button variant="outlined" color="default" onClick={() => props.logout()}>Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

