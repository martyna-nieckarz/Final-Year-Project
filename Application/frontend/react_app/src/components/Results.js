import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import * as ServerRequests from '../store/ServerRequests';

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
  table: {
   minWidth: '650',
 },
  cardContent: {
    flexGrow: 1,
  },
  tableContent: {
   paddingTop: '20px',
   paddingBottom: '180px',
   maxWidth: '60%',
   margin: 'auto',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function createData(username, imageid, analysisResult, timeDate) {
   return { username, imageid, analysisResult, timeDate };
 }
 
 const rows = [
   //createData(usernameData),
 ];

export default function Results(props) {
    const classes = useStyles();

    // ServerRequests.getUserDetails().then((response) => {
    //     console.log("Result: ", response)
    //     var username = response.data.username
    //     console.log("Result 1: ", username)
    //     //{this.state.resultData}
    // }).catch((error) => {
    //     console.log(error)
    // });

    return (
        <React.Fragment>
        <CssBaseline />
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Your Previous Analysis Results
                </Typography>
                <Typography variant="h4" align="center" color="textSecondary" paragraph>
                View your previous analysis results here.
                </Typography>
            </Container>
            </div>
        <div className={classes.tableContent}>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell align="center">Image ID</TableCell>
                    <TableCell align="center">Analysis Result</TableCell>
                    <TableCell align="center">Time and Date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell align="center">{row.imageid}</TableCell>
                    <TableCell align="center">{row.analysisResult}</TableCell>
                    <TableCell align="center">{row.timeDate}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>   
        </main>
        </React.Fragment>
    );
}
