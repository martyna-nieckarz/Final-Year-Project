import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Home(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to MySkin
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              Have a skin lesion you're worried about? 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              In just a few seconds find out about the risk of skin cancer
            </Typography>
            {props.isAuthenticated ? (
              null
            ) : (
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button href="/login" variant="contained" color="primary">
                      Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href="/register" variant="outlined" color="primary">
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md" align="center">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/UgzTooxvIKM"
                    title="Card Image"
                  />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Get Informed
                      </Typography>
                      <Typography>
                        Learn more about skin cancer and ways to prevent it
                      </Typography>
                      <br></br>
                      <Button href="/learn" variant="contained" color="primary">
                      Click
                    </Button>
                    </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/KYUiTYOaE9M"
                    title="homeImg1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Perform Analysis
                    </Typography>
                    <Typography>
                      Upload a skin lesion image and have it analysed for skin cancer
                    </Typography>
                    <br></br>
                      <Button href="/analysis" variant="contained" color="primary">
                      Click
                    </Button>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/vTL_qy03D1I"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      My Profile
                    </Typography>
                    <Typography>
                      Access your profile and view your previous analysis results
                    </Typography>
                    <br></br>
                      <Button href="/profile" variant="contained" color="primary">
                      Click
                    </Button>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
