import React, { Fragment } from "react";
import { AppBar, Toolbar, makeStyles, Tabs, Tab } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from '@material-ui/icons/Mail';

const Navbar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Tabs>
            <Tab className={classes.MainTab} label="Logistic Expert" />
          </Tabs>
          <Tabs className={classes.iconTabs}>
            <Tab
              className={classes.iconTab}
              icon={<InstagramIcon fontSize="large" />}
              aria-label="phone"
            />
            <Tab
              className={classes.iconTab}
              icon={<FacebookIcon fontSize="large" />}
              aria-label="favorite"
            />
            <Tab
              className={classes.iconTab}
              icon={<MailIcon fontSize="large" />}
              aria-label="person"
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
