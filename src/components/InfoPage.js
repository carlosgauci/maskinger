import React from "react"
import PropTypes from "prop-types"

const InfoPage = ({ nodes }) => {
  return (
    <section className="container pt-20 pb-8">
      {nodes.map(info => {
        const { heading, text, order } = info.data
        return (
          <section key={order}>
            {heading && (
              <h3 className="mt-8 mb-2 text-2xl md:text-3xl font-heading">
                {heading}
              </h3>
            )}
            <p className="mb-2">{text}</p>
          </section>
        )
      })}
    </section>
  )
}

InfoPage.propTypes = {
  nodes: PropTypes.array.isRequired,
}

export default InfoPage
