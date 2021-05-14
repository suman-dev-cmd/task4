import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
const Slider = ({item}) => {
    return (
        <>
          <Carousel
           fullHeightHover={false}    
           autoPlay={true}
           interval="4000"
           animation="slide"
           className='caro'
          >
            {
                item.map( (obj, i) => <img src={obj.download_url} className="silder"/> )
            }
          </Carousel>  
        </>
    )
}

export default Slider
