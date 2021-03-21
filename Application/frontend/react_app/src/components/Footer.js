import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Final Year Project - Martyna Nieckarz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '1vh',
    

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    
  },

  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  //   minHeight:'100%', 
  //   position:'relative',
  // },
  // footer: {
  //   padding: theme.spacing(2, 2),
  //   marginTop: 'auto',
  //   backgroundColor:
  //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  //   position: 'absolute',
  //   bottom:'0',
  //   left:'0',
  //   width:'100%',
  //   height:'70px',
  // },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="md" >

          <Typography variant="body1">Skin Cancer Prediction</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}