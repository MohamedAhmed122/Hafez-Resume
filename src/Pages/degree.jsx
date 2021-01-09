import React, { Fragment } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import SideBar from "../Component/SideBar";
import deg1 from "../assets/1.png";
import deg2 from "../assets/2.png";
import deg3 from "../assets/3.png";
import deg4 from "../assets/4.png";
import deg5 from "../assets/5.png";
import deg6 from "../assets/6.png";
import deg7 from "../assets/7.png";
import deg8 from "../assets/8.png";
import deg9 from "../assets/9.png";
import deg10 from "../assets/10.png";
// import deg12 from "../assets/11.png";
import deg13 from "../assets/12.png";
import deg14 from "../assets/13.png";
import deg15 from "../assets/14.png";
import deg16 from "../assets/15.png";
import deg17 from "../assets/16.png";
import deg18 from "../assets/17.png";
import deg11 from "../assets/18.png";
import deg19 from "../assets/19.png";



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
                <Typography variant='h4' style={{marginLeft: 30,marginTop: '3rem'}}>My Certificates </Typography>
                <Grid item className={classes.imgs}>
                <img className={classes.img} src={deg10} alt="deg1" />
                <img className={classes.img} src={deg11} alt="deg2" />
                <img className={classes.img} src={deg13} alt="deg1" />
                <img className={classes.img} src={deg14} alt="deg2" />

                <img className={classes.img} src={deg15} alt="deg1" />
                <img className={classes.img} src={deg16} alt="deg2" />
                <img className={classes.img} src={deg17} alt="deg1" />
                <img className={classes.img} src={deg18} alt="deg2" />
                <img className={classes.img} src={deg19} alt="deg1" />
                <img className={classes.img} src={deg9} alt="deg2" /> 
                <img className={classes.img} src={deg8} alt="deg1" />
                <img className={classes.img} src={deg7} alt="deg2" />
                <img className={classes.img} src={deg6} alt="deg1" />
                <img className={classes.img} src={deg5} alt="deg2" />
                <img className={classes.img} src={deg4} alt="deg1" />
                <img className={classes.img} src={deg3} alt="deg2" />
                <img className={classes.img} src={deg2} alt="deg1" />
                <img className={classes.img} src={deg1} alt="deg2" />
            
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
        margin: '2rem',
        display:'flex',
        flexWrap:'wrap'
    },
    img:{
        width:650,
        marginLeft: '3rem',
        height:600,
        marginBottom:"3rem",
        [theme.breakpoints.down("xs")]: {
            width:350,
            marginLeft: '1rem',
            height:400,
            marginBottom:"3rem",
        },
        
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
