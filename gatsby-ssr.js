import React from "react"
import Layout from "./src/components/Layout"
import "./src/styles/global.css"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { cartReducer } from "./src/reducers/cartReducer"
import { loadState, saveState } from "./src/utils/localStorage"

// Get state from local storage
const persistedState = loadState()

// Redux store
const store = createStore(cartReducer, persistedState)

// Save to local storage on store change
store.subscribe(() => {
  saveState(store.getState())
})

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <Layout {...props} location={props.location}>
        {element}
      </Layout>
    </Provider>
  )
}
