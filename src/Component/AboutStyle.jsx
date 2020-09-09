
const { makeStyles } = require("@material-ui/core");

const arcWhiteBlue = "#2196F3";
const arcOrange = "#FFC107";


export default  makeStyles((theme) => ({
    main:{
        margin: '2rem 0 0 2rem',
        color: arcOrange,
    },
    span:{
        marginLeft: '2rem',
       color:arcWhiteBlue,
    },
    sub:{
        marginTop: '1rem',
        width: '40rem',
        [theme.breakpoints.down("sm")]: {
            width: '30rem',
            textAlign: 'center'

            },
            [theme.breakpoints.down("xs")]: {
                width: '25rem',
                textAlign: 'center'
            },
    },
    span2:{
        marginLeft: '2rem',
        [theme.breakpoints.down("sm")]: {
            marginLeft: '0rem',
            },
            [theme.breakpoints.down("xs")]: {
                marginLeft: '0rem',
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
    socialContainer:{
        marginTop: '2rem',
        marginLeft: '14rem',
        color: arcWhiteBlue,
    },
    social:{
        color: arcWhiteBlue,
        '&:hover':{
            color:arcOrange,
        },
    }
    
}));