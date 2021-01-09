import React, { Fragment } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import UseStyles from "./Styles";
import img from "../assets/Mostafa.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

const sideBar = () => {
  const classes = UseStyles();
  return (
    <Fragment>
      <Grid container direction="column" className={classes.grid}>
        <Grid item>
          <Avatar src={img} alt="Mostafa Ahmed" className={classes.Avatar} />
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.name}>
            {" "}
           Mostafa Ahmed
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.bio}>
            Reliability and punctuality, being punctual are basic abilities, and
            that is how I define myself
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.link}>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/about"
            >
              {" "}
              About Me
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.link}>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/certificate"
            >
              {" "}
              Certificate
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.link}>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/contact"
            >
              Contact Me{" "}
            </Link>
          </Typography>
        </Grid>
        <Grid container style={{marginTop: '1rem'}}>
        <Grid
          component={"a"}
          href='https://www.facebook.com/navigator99/'
          rel="noopener noreferrer"
          target="_blank"
          fontSize="large"
          className={classes.social}
          item
          style={{marginLeft: 14}}
        >
         
          <FacebookIcon className={classes.icon} />{" "}
        </Grid>
        <Grid
          component={"a"}
          href='https://www.instagram.com'
          rel="noopener noreferrer"
          target="_blank"
          fontSize="large"
          className={classes.social}
          item
        >
           <InstagramIcon className={classes.icon} />{" "}
        </Grid>
       
        <Grid
          component={"a"}
          href="https://api.whatsapp.com/send?phone=+2010605086803"
          rel="noopener noreferrer"
          target="_blank"
          fontSize="large"
          className={classes.social}
          item
        >
           <WhatsAppIcon className={classes.icon} />
        </Grid>
        <Grid
          component={"a"}
          href="mailto:mstxebec93@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          fontSize="large"
          className={classes.social}
          item
        > <MailIcon className={classes.icon} /></Grid>
        
      </Grid>
      </Grid>
    </Fragment>
  );
};
export default sideBar;
