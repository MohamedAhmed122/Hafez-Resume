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
            High school in Abou Youssef Private School{" "}
            <span className={classes.span}>2007-2010</span>
            </Typography>
            <br />
            
            <Typography variant="4" className={classes.title}>
            Bachelor Degree
            </Typography>
            <br />
            <br />
            <Typography variant="subtitle2" style={{fontSize: '1.2rem' , color:'black'}} className={classes.sub}>
            Arab Academy for Science Technology & Maritime Transport.
            {/* <span className={classes.span}>2011 – 2016</span> */}
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
              -AWARDING BACHELOR DEGREE WITH (V.GOOD) & IN MARiTIME TRANSPORT  <span className={classes.span}>2011 – 2016</span>
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            GPA: 2.79 Good 
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
              -C.O.C 2nd Officer
            </Typography>    
            <Typography variant="3" className={classes.edu}>
            Maritime Certification
            </Typography>

            <Typography variant="subtitle1" className={classes.sub}>
            Proficiency in Survival crafts and rescue boats other the fort rescue boats
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Ecids simulator (operation level)  
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Prevention and combating of marine pollution
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Advanced fire prevention and fire fighting  
            </Typography>

            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Medical First aid 
            </Typography>

            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Marine radar and automatic radar plotting aids 
            </Typography>

            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Personal safety and social responsibilities 
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Personal Survival techniques and search rescue
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Prevention and Combating of marine pollution
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Proficiency and Combating of marine pollution
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Prevention of security awareness training for sea fares with designated security duties 
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            Bridge Resource Management (BRM) 
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            GMDSS
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.sub}>
            GOC
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
