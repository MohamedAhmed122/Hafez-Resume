import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./MainStyle";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Main = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ marginTop: 20 }}>
        <Grid item>
            <Typography variant="3" className={classes.edu} >
            Education
            </Typography>
            <br />
            <Typography variant="4" className={classes.title} >
            High school
            </Typography>
            <Typography variant="subtitle1" className={classes.sub}  style={{fontSize: '1.2rem' , color:'black'}}>
            High school in Abo Youssef Private School{" "}
            <span className={classes.span}>2008-2011</span>
            </Typography>
            <br />
            
            <Typography variant="4" className={classes.title}>
            Bachelor Degree
            </Typography>
            <br />
            <br />
            <Typography variant="subtitle2" style={{fontSize: '1.2rem' , color:'black'}} className={classes.sub}>
            Arab academy for science technology & maritime transport,International
            transport & logistics college. Transport Operation Management section.{" "}
            <span className={classes.span}>2012 – 2016</span>
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Bachelor’s Degree in administration trade logistics and international
            transportation science technology & maritime transport.
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            GPA: 2.7 Good .
            </Typography>
            <Typography variant="3" className={classes.edu}>
            Work Experience
            </Typography>

            <Typography variant="subtitle1" className={classes.sub}>
            I worked at on Time company
            <span className={classes.span}>06/10/2018 – 12/07/2019</span>
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            I have been working At Alex stewart inspection company 
            <span className={classes.span}> since 01/11/2019</span>
            </Typography>
            <div className={classes.links}>
              <Link to="/about">
                {" "}
                <ArrowBackIosIcon className={classes.link1} fontSize="large" />
              </Link>{" "}
              <Link to="/contact">
                <ArrowForwardIosIcon className={classes.link2} fontSize="large" />
              </Link>
        </div>
        </Grid>
    </Grid>
  );
};
export default Main;
