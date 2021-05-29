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
        <button className="">
          <GatsbyImage
            image={images[i]}
            alt={name}
            className="w-14 h-14  lg:w-20 lg:h-20 bg-white border border-gray-300"
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
    <section className="w-full lg:w-3/5 mb-10 lg:mb-0 flex flex-col justify-center">
      <Slider {...settings}>
        {images.map((image, i) => (
          <GatsbyImage
            key={i}
            image={image}
            alt={name}
            className="w-full h-full"
          />
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
