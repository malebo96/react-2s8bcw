import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} id="header">
            MALEBO SESHOKA
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label=" E D U C A T I O N"
                variant="outlined"
              />

              <p>Tshwane South Tvet college</p>
              <p>Yangzhou polytechnic college </p>

              <TextField
                id="outlined-basic"
                label="E X P E R I E N C E"
                variant="outlined"
              />
              <p>
                ZBJ.COM(Yangzhou Tengyun Innovative Enterprises Management
                Co.Ltd)
              </p>
              <p>Yangzhou Guomai Communication Development</p>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <form
              className={classes.root}
              id="right"
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-right"
                label="CONTACT ME"
                variant="outlined"
              />
              <p>{<LocationOnIcon />} ADRESS</p>
              <p>
                14969 dokgogo street
                <br />
                ivory park ext 13 <br />
                midrand <br />
                1632
              </p>
              <p>{<emailIcon />}WEB</p>
              <p>seshokamalebo@gmail.com </p>
              <p>{<PhoneIcon />}PHONE</p>
              <p>
                076 8053 470
                <br />
                081 3858 522
              </p>

              <TextField
                id="outlined-right"
                label="PRO SKILLS"
                variant="outlined"
              />

              <p>
                JAVA
                <br />
                HTML, CSS & JAVASCRIPT
                <br />
              </p>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
