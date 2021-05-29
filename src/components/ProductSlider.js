import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProductSlider = ({ name, images }) => {
  // Slider settings
  const settings = {
    customPaging: function (i) {
      return (
        <button className="h-20 w-20">
          <GatsbyImage
            image={images[i]}
            alt={name}
            className="w-20 h-20 bg-white border border-gray-300"
          />
        </button>
      )
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="w-3/5">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <GatsbyImage image={image} alt={name} />
          </div>
        ))}
      </Slider>
    </section>
  )
}

ProductSlider.propTypes = {
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductSlider
