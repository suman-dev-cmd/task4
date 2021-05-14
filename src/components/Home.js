import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import {get} from '../utils/service'
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
    // const [imageslice,setImageslice] = useState([]);
    // const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);
    // const [loading, setLoading] = useState(false);
    // const [imagelength,setImagelenght] = useState(0)
    const [open, setOpen] = useState(true);


    useEffect(() => {   
        console.log(page)
        console.log(limit)
         get(`/v2/list?page=${page}&limit=${limit}`)
         .then(res=>{
             console.log(res.data)
             const data1 = image
             const data2 = res.data
             const data3 = [...data1,...data2]
             setImage(data3)
             setTimeout(()=>{
             setOpen(false)
             },2000)

            //  setImagelenght(res.data.length)
            //  const slice = res.data.slice(offset,offset+perpage)
            //  setImageslice(slice)
         })
         .catch(err=>{
             console.log(err)
         })
    },[page])
  
    const loadMore = () => {
    
      const nextItem = page + 1 
    //   const nextlimit = limit + 8
        setPage(nextItem)
        // setLimit(nextlimit)
        setOpen(true)
    };
  
    return (
      <Grid container className={classes.root} spacing={10}>
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
                <center>
                    <Button variant="contained" color="primary" onClick={loadMore}>
                        Load More
                    </Button>
                </center>
            
                
       </Grid>
      </Grid>
    );
}

export default Home
