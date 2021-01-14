import React, { Fragment } from "react";
import { AppBar, Toolbar, makeStyles, Tabs, Tab, Hidden } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Tabs>
          <Hidden smDown>

            <Tab  
            className={classes.MainTab} 
            label="2nd Officer" 
            component={Link}
            to='/about'/>
          </Hidden>
          </Tabs>
          <Tabs className={classes.iconTabs}>
            <Tab
              className={classes.iconTab}
              label="About"
              component={Link}
              to='/about'
            />
            <Tab
              className={classes.iconTab}
              label="Contact"
              component={Link}
              to='/contact'
            />
            <Tab
              className={classes.iconTab}
              label="Certificate"
              component={Link}
              to='/certificate'
            />
          </Tabs>
        </Toolbar>
      </AppBar>

      <div className={classes.ToolbarMargin} />
    </Fragment>
  );
};
export default Navbar;

const useStyles = makeStyles((theme) => ({
  ToolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "",
    },
  },
  iconTabs: {
    marginLeft: "auto",
    padding: 0,
  },
  MainTab: {
    fontSize: "1.4rem",
    fontFamily: "Abril Fatface, cursive",
  },
}));
