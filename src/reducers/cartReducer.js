import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes"

const initialState = {
  loading: false,
  error: null,
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add item to cart
    case ADD_TO_CART:
      // Check if we already have one of this item in cart
      if (state.cart.find(item => item.id === action.product.id)) {
        // If we do, map the cart and increase the quantity of the specified item
        return {
          ...state,
          cart: state.cart.map(product => {
            if (product.id === action.product.id) {
              return { ...product, quantity: product.quantity + 1 }
            } else {
              return product
            }
          }),
        }
      } else {
        // If the item isnt already in the cart, add it
        return { ...state, cart: [...state.cart, action.product] }
      }

    // Remove item from cart
    case REMOVE_FROM_CART:
      // Check if we have more than 1 of this item in the cart
      if (
        state.cart.find(
          item => item.id === action.product.id && item.quantity > 1
        )
      ) {
        // If we have more than 1, decrease the quantity by 1
        return {
          ...state,
          cart: state.cart.map(product => {
            if (product.id === action.product.id) {
              return { ...product, quantity: product.quantity - 1 }
            } else {
              return product
            }
          }),
        }
      } else {
        // If we only have 1 of the item in the cart, remove it
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.product.id),
        }
      }

    default:
      return state
  }
}