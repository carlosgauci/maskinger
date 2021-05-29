import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { buttonVariants } from "../framer/variants"

const Button = ({ text, fullWidth, click }) => {
  return (
    <motion.button
      className={`bg-primary text-white py-3 focus:outline-none ${
        fullWidth ? "w-full" : "w-52"
      }`}
      onClick={click || null}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {text}
    </motion.button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  click: PropTypes.func,
}

export default Button
