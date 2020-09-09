import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import SideBar from "../Component/SideBar";
import AboutMain from "../Component/AboutMain";

const AboutPage = () => (
<Fragment>
        <Grid container>
        <Grid item lg={1}></Grid>
        <Grid item lg={3}>
            <SideBar />
        </Grid>

        <Grid item lg={7}>
            <AboutMain />
        </Grid>
        </Grid>
</Fragment>
);

export default  AboutPage