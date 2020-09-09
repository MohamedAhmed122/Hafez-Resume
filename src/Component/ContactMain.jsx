import React, { Fragment } from "react";

import { Grid, Typography, Container } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import useStyles from "./AboutStyle";
import { Link } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";


const ContactMain = () => {
    const classes = useStyles();
  return (
    <Fragment>
        <Grid container direction="column" style={{ marginTop: "3rem" }}>
            <Grid item>
            <Container>
                <Typography variant="h4" className={classes.main}>
                Let's get personal
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> Phone number:</span> +201003021307
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> E-mail:</span> hafezahmed0095@gmail.com
                </Typography>
                <Typography variant="h4" className={classes.main}>
                contact me through social media
                </Typography>
            </Container>
            </Grid>
            </Grid>
            <Grid
            container
            
            spacing={2}
            className={classes.socialContainer}
            >
            <Grid
                item
                component={"a"}
                href='https://www.facebook.com/hafez.ahmed.167'
                rel="noopener noreferrer"
                target="_blank"
                fontSize="large"
                className={classes.social}
            >
                <FacebookIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid
                item
                component={"a"}
                href="https://api.whatsapp.com/send?phone=+201003021307"
                rel="noopener noreferrer"
                target="_blank"
                fontSize="large"
                className={classes.social}
            >
                
                <WhatsAppIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid
                item
                component={"a"}
                href='https://www.instagram.com/abdelhafez_008/'
                rel="noopener noreferrer"
                target="_blank"
                fontSize="large"
                className={classes.social}
            >
                <InstagramIcon fontSize="large" className={classes.icon} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item>
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
            </Grid>
        </Grid>
       
    </Fragment>
  );
};
export default ContactMain