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
    paddingBottom: '30px',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    //paddingBottom: theme.spacing(8),
    paddingBottom: '120px',
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

export default function Profile(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                Welcome to Your Profile
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
                View your details, previous analysis results and change your password here.
            </Typography>
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
                    image="https://source.unsplash.com/jiVeo0i1EB4"
                    title="Card Image"
                  />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        View Profile Details
                      </Typography>
                      <Typography>
                        View your profile deatails such as name and email
                      </Typography>
                      <br></br>
                      <Button href="/profile/details" variant="contained" color="primary">
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
                    image="https://source.unsplash.com/jLjfAWwHdB8"
                    title="homeImg1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Previous Results
                    </Typography>
                    <Typography>
                      View your previous skin lesion analysis results
                    </Typography>
                    <br></br>
                      <Button href="/profile/results" variant="contained" color="primary">
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
                    image="https://source.unsplash.com/ah-HeguOe9k"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Change Password
                    </Typography>
                    <Typography>
                      Here you can change your password if you wish to do so
                    </Typography>
                    <br></br>
                      <Button href="/profile/update_password" variant="contained" color="primary">
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
