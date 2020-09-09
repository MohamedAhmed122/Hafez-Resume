import React, { Fragment } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import useStyles from "./AboutStyle";
import { Link } from "react-router-dom";

const AboutMain = () => {
  const classes = useStyles();
  return (
    <Fragment>
        <Grid container direction="column" style={{ marginTop: "3rem" }}>
            <Grid item>
            <Container>
                <Typography variant="h4" className={classes.main}>
                PERSONAL INFORMATION
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Name:</span> Abdelhafez Ahmed
                Mostatfa Desouky
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Sex:</span> Male
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Military Status:</span> Finished
                my military service
                </Typography>

                <Typography variant="h4" className={classes.main}>
                PERSONAL SKILLS
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Languages: </span> Arabic and
                intermediate English
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Computer skills:</span> Microsoft
                office suit
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Managerial skills: </span>{" "}
                Reliability and punctuality, Completing tasks on time and being{" "}
                <span className={classes.span2}>
                    {" "}
                    punctual are basic abilities, and Leadership.
                </span>
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Communication skills: </span> Good
                body language skills, and good public speaker
                </Typography>
                <div className={classes.links}>
                <Link to="/">
                    {" "}
                    <ArrowBackIosIcon className={classes.link1} fontSize="large" />
                </Link>{" "}
                <Link to="/contact">
                    <ArrowForwardIosIcon
                    className={classes.link2}
                    fontSize="large"
                    />
                </Link>
                </div>
            </Container>
            </Grid>
        </Grid>
    </Fragment>
  );
};
export default AboutMain;
