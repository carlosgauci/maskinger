import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_NAV,
  EMPTY_CART,
} from "../constants/actionTypes"

export const addToCart = product => ({
  type: ADD_TO_CART,
  product,
})

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product,
})

export const toggleNav = () => ({
  type: TOGGLE_NAV,
})

export const emptyCart = () => ({
  type: EMPTY_CART,
})
