import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
    paddingBottom: theme.spacing(13),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'left',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Details(props) {
  const classes = useStyles();

  //var pageTitle = `{ onAuth.username }`

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Profile Details
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              View your profile details here.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md" align="center">
          {/* End hero unit */}
          <Grid>
            {cards.map((card) => (
              <Grid item key={card} xs={6}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6">
                        Username:
                      </Typography>
                      <Typography variant="h6">
                        Email: 
                      </Typography>
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
