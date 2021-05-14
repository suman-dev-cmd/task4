import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
  }));
const Home = () => {
    const [spacing, setSpacing] = useState(8);
    const classes = useStyles();
    const [image,setImage] = useState([]);
    const [imageslice,setImageslice] = useState([]);
    const [offset, setOffset] = useState(0);
    const [perpage, setPerpage] = useState(8);
    const [imagelength,setImagelenght] = useState(0)


    useEffect(() => {   
         get('/v2/list')
         .then(res=>{
             console.log(res.data)
             setImage(res.data)
             setImagelenght(res.data.length)
             const slice = res.data.slice(offset,offset+perpage)
             setImageslice(slice)
         })
         .catch(err=>{
             console.log(err)
         })
    },[])
  
    const loadMore = () => {
      const nextItem = perpage + 8 
      console.log(perpage)
      console.log(imagelength)
      console.log(nextItem)
      
        setPerpage(nextItem)
        const slicemore = image.slice(offset,offset+nextItem)
        setImageslice(slicemore)
      
    };
  
    return (
      <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {imageslice.map((value,i) => (
              <Grid key={i} item>
                {/* <Paper className={classes.paper} /> */}
                <img src={value.download_url} className={classes.paper}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} className='loadmore'>
            {
                perpage <= imagelength ?
                <center>
                    <Button variant="contained" color="primary" onClick={loadMore}>
                        Load More
                    </Button>
                </center>
                :
                null
            }
           
            
       </Grid>
      </Grid>
    );
}

export default Home
