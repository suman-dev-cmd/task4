import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   footer:{backgroundColor:'#3f51b5',height:"50px",width:"105%",marginTop:"40px"},
   footerText:{marginTop:'5px',color:'white'}
  }));
const Footer = () => {
    const classes = useStyles();
    return (
        <div  className={classes.footer}>
            <center>
                <span className={classes.footerText}>
                     @sumanj@capitalnumbers.com#2021
                </span>
            </center>
    
        
        </div>
    )
}

export default Footer
