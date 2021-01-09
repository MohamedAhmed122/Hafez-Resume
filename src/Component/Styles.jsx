const { makeStyles } = require("@material-ui/core");

const arcWhiteBlue = "#2196F3";


export default  makeStyles((theme) => ({
   grid:{
       height: 600,
       position:'fixed',
       borderRight: '1px solid  #2196F3',
       width :380,
       
        [theme.breakpoints.down("xs")]: {
            borderBottom: '1px solid  #2196F3',
            width:360,
            marginLeft: '4rem',
            borderRight: '0 solid  #2196F3',
            height: 500,
            position:'relative'
        },
   } ,
   Avatar:{
    height: 110,
    width: 110,
    textAlign: 'center',
    marginLeft: '5rem'
   },
   name:{
    marginTop: '2rem',
    marginLeft: '4rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: arcWhiteBlue
   },
   bio:{
    marginLeft: '4rem',
    width: '17rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: '1.4rem',
    // color: arcWhiteBlue,
    fontFamily: 'Open Sans Condensed, sans-serif'
  
   },
   link:{
    fontSize: '1rem',
    fontWeight: 200,
    marginLeft: '4rem',
    borderBottom: '2px solid  white',
    width: '5.5rem',
    marginTop: '1rem',
    cursor: 'pointer',
    '&:hover':{
        color: '#FFC107',
        borderBottom: '2px solid  #FFC107',
        width: '5.5rem',
        paddingBottom: 2
    }
   },
   icons:{
    marginLeft: '2rem',
    marginTop: '2rem'
   },
   icon:{
    marginLeft: '1rem',
    color: '#2196F3',
    height: 35,
    width: 35,
    cursor: 'pointer',
    '&:hover':{
        color: '#FFC107',
        
    }
   }
}));