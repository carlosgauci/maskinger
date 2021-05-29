import React from "react"
import { Link } from "gatsby"
import { BsChevronRight } from "react-icons/bs"
import PropTypes from "prop-types"

const Breadcrumbs = ({ name }) => {
  return (
    <section className="container flex items-center gap-2 md:gap-4 py-4">
      <Link to="/" className="underline">
        Shop
      </Link>
      <BsChevronRight className="text-xs" />
      <p className="truncate">{name}</p>
    </section>
  )
}

Breadcrumbs.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Breadcrumbs
