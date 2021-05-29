import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaCheckCircle } from "react-icons/fa"

const ProductInfo = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery(query)
  return (
    <ul className="mt-4">
      {nodes.map(item => (
        <li key={item.data.order} className="list-none flex mb-4">
          <FaCheckCircle className="text-primary mr-1 w-6 flex-shrink-0 transform translate-y-1" />
          <p>{item.data.text}</p>
        </li>
      ))}
    </ul>
  )
}

const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Info" }, data: { cat: { eq: "product" } } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        data {
          text
          order
        }
      }
    }
  }
`

export default ProductInfo
