import React, { Fragment } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import SideBar from "../Component/SideBar";
import deg1 from "../assets/deg1.png";
import deg2 from "../assets/deg2.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";


const DegreePage = () => {
    const classes=  useStyles()
  return (
    <Fragment>
        <Grid container>
            <Grid item lg={1}></Grid>
            <Grid item lg={3}>
            <SideBar />
            </Grid>
            <Grid item lg={7}>
            <Grid container direction="column">
                <Typography variant='h4' style={{marginLeft: 30,}}>My Certificates </Typography>
                <Grid item className={classes.imgs}>
                <img className={classes.img} src={deg1} alt="deg1" />
                <img className={classes.img} src={deg2} alt="deg2" />
                </Grid>
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
        </Grid>
    </Fragment>
  );
};

export default DegreePage;

const useStyles = makeStyles((theme) => ({
    imgs:{
        marginTop: '2rem'
    },
    img:{
        width:400,
        marginLeft: '1rem',
        height:500,
    },
    links:{
        marginLeft: '10rem',
        marginTop: '2rem',
 
    },
    link1:{
        color:'#2196F3',
        '&:hover':{
            color:'#FFC107',
        }
    },
    link2:{
        marginLeft: '15rem',
        color:'#2196F3',
        '&:hover':{
            color:'#FFC107',
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: '5rem',
        },
},
}));
