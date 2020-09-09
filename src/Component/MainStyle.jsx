const { makeStyles } = require("@material-ui/core");

const arcWhiteBlue = "#2196F3";
const arcOrange = "#FFC107";
const arcGrey = "#868686";

export default  makeStyles((theme) => ({
    edu:{
        marginTop: 30,
        color: arcWhiteBlue,
        display: 'block',
        marginLeft: '5rem',
        fontSize: '2.4rem',
        marginBottom: '1rem'

    },
    title:{
        marginLeft: '5rem',
        fontSize: '1.7rem',
        color:arcOrange
        
        
    },
    span:{
        marginLeft: '0.6rem',
        color:arcOrange,
        fontFamily: 'Open Sans Condensed, sans-serif',
        fontSize: '1.2rem',
    },
    sub:{
        marginLeft: '6rem',
        width: '40rem',
        color:arcGrey,
        [theme.breakpoints.down("sm")]: {
        width: '30rem'
        },
        [theme.breakpoints.down("xs")]: {
            width: '22rem'
        },
    },
    links:{
        marginLeft: '10rem',
        marginTop: '2rem',
 
    },
    link1:{
        color:arcWhiteBlue,
        '&:hover':{
            color:arcOrange,
        }
    },
    link2:{
        marginLeft: '15rem',
        color:arcWhiteBlue,
        '&:hover':{
            color:arcOrange,
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: '5rem',
        },
},
}));