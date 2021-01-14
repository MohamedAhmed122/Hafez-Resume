import React, { Fragment } from "react";

import { Grid, Typography, Container, Hidden } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import useStyles from "./AboutStyle";
import { Link } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";


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
                <span className={classes.span}> Phone number:</span> +2010605086803
                </Typography>
                <Typography variant="subtitle1" className={classes.sub}>
                <span className={classes.span}> E-mail:</span> mstxebec93@gmail.com
                </Typography>
                <Typography variant="h4" className={classes.main}>
                contact me through social media
                </Typography>
            </Container>
            </Grid>
            </Grid>
            <Hidden smDown>

            <Grid
            container
            
            spacing={2}
            className={classes.socialContainer}
            >
            <Grid
                item
                component={"a"}
                href='https://www.facebook.com/navigator99/'
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
                href="https://api.whatsapp.com/send?phone=+2010605086803"
                rel="noopener noreferrer"
                target="_blank"
                fontSize="large"
                className={classes.social}
            >
                
                <WhatsAppIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid
                component={"a"}
                href="mailto:mstxebec93@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                fontSize="large"
                className={classes.social}
                item
                > <MailIcon fontSize="large" className={classes.icon} /></Grid>
            </Grid>
            </Hidden>
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