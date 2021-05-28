import React from "react"
import PropTypes from "prop-types"

const Button = ({ text, fullWidth }) => {
  return (
    <button
      className={`bg-primary text-white py-3 ${fullWidth ? "w-full" : "w-60"}`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
}

export default Button
