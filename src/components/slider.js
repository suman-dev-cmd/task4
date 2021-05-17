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
              item.lenght !== 0?
                item.map( (obj, i) => <img src={obj.download_url} className="silder"/> )
              :
              <p>No Image Slider</p>
            }
          </Carousel>  
        </>
    )
}

export default Slider
