import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import SideBar from "../Component/SideBar";
import ContactMain from "../Component/ContactMain";

const ContactPage = () => (
<Fragment>
        <Grid container>
        <Grid item lg={1}></Grid>
        <Grid item lg={3}>
            <SideBar />
        </Grid>

        <Grid item lg={7}>
            <ContactMain />
        </Grid>
        </Grid>
</Fragment>
);

export default  ContactPage