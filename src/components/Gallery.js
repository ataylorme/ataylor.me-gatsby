import React from 'react';
import Img from 'gatsby-image'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Gallery = ({ images }) => {
  return (
    <Carousel
      arrows
      className="my-2"
    >

      {images.map((img, i) => {
        if (!img.src) {
          if (process.env.NODE_ENV !== 'production') {
            console.error(`This image is missing "src", you probably messed up the path to it: ${img}`)
            return (
              <React.Fragment>
                Missing Image {i} Source
              </React.Fragment>
            )
          } else {
            return null
          }
        }
        return (
          <React.Fragment key={i}>
            <Img
              className="w-full block rounded shadow-md"
              fluid={img.src.full.fluid}
            />
          </React.Fragment>
        )
      })}
    </Carousel>
  )
}
export default Gallery