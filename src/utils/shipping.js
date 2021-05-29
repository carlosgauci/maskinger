export const shipping = cart => {
  // Shipping costs - 4.50 for first item and 1 for each additional item
  // Get the amount of items in cart
  const cartQuantity = cart.reduce(
    (prev, current) => prev + current.quantity,
    0
  )

  // Calculate shipping costs
  const total = cart.length ? cartQuantity * 100 + 350 : 0

  return total
}
