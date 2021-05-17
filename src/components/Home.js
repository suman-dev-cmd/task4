import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import {get} from '../utils/service';
import Slider from './slider'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'black',
    },
    paper: {
      height: 180,
      width: 250,
      marginTop:'15px'
    },
    control: {
      padding: theme.spacing(10),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        // backgroundColor:'black'
      },
  }));
const Home = () => {
    const [spacing, setSpacing] = useState(8);
    const classes = useStyles();
    const [image,setImage] = useState([]);
    const [banner,setBanner] = useState([]);
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(true);
    useEffect(() => {   
        get(`/v2/list?page=1&limit=3`)
        .then(res=>{
            setBanner(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
         get(`/v2/list?page=${page}&limit=8`)
         .then(res=>{
             const data1 = image
             console.log(data1)
             const data2 = res.data
             const data3 = [...data1,...data2]
             setImage(data3)
             setTimeout(()=>{
             setOpen(false)
             },2000)
         })
         .catch(err=>{
             console.log(err)
         })
        
    },[page])
    window.onscroll = function() {
      var d = document.documentElement;
      var offset =document.documentElement.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
    
      if (offset >= height) {
        const nextItem = page + 1 
        //   const nextlimit = limit + 8
            setPage(nextItem)
            // setLimit(nextlimit)
            setOpen(true)
      }
    };
  
    // const loadMore = () => {
    
    //   const nextItem = page + 1 
    // //   const nextlimit = limit + 8
    //     setPage(nextItem)
    //     // setLimit(nextlimit)
    //     setOpen(true)
    // };
  
    return (
      <>
      <Grid container className={classes.root} spacing={10}>
       <Slider item={banner}/>

        <Backdrop className={classes.backdrop} open={open} >
            <CircularProgress color="inherit" />
        </Backdrop>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {
                image.map.length !== 0?
                image.map((value,i) => (
                    <Grid key={i} item>
                      {/* <Paper className={classes.paper} /> */}
                      <img src={value.download_url} className={classes.paper}/>
                    </Grid>
                  ))
                :
                null

            }
            
          </Grid>
        </Grid>
        <Grid item xs={12} className='loadmore'>
                {/* <center>
                    <Button variant="contained" color="primary" onClick={loadMore}>
                        Load More
                    </Button>
                </center> */}
            
                
       </Grid>
      </Grid>
      </>
    );
}

export default Home
