import React from "react"
import Layout from "./src/components/Layout"
import "./src/styles/global.css"
import { createStore, compose } from "redux"
import { Provider } from "react-redux"
import { cartReducer } from "./src/reducers/cartReducer"

// Redux store
const store = createStore(cartReducer)

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <Layout {...props} location={props.location}>
        {element}
      </Layout>
    </Provider>
  )
}
