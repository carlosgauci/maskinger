const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const fetch = require("cross-fetch")

// Get the product list from the api
async function getProducts() {
  const res = await fetch(process.env.API_URL)
  const data = await res.json()
  return data
}

// Get the data for the items in the cart from our inventory list
async function getSelectedProducts(items) {
  const inventory = await getProducts()
  let selected = []
  items.forEach(item => {
    const found = inventory.find(p => p.id === item.id)
    if (found) {
      selected.push({
        ...found,
        quantity: item.quantity,
      })
      console.log(`pushed ${item.name}`)
    }
  })

  return selected
}

// Create product data for stripe checkout
const getLineItems = products => {
  return products.map(product => ({
    name: product.name,
    images: product.image && [product.image],
    amount: product.price,
    currency: "EUR",
    quantity: product.quantity,
  }))
}

// Add shipping cost
const addShipping = products => {
  //   Shipping costs - 4.50 for first item and 1 for each additional item
  const first = 450
  const additional = 100

  // Get the amount of items in cart
  const itemQuantity = products.reduce(
    (prev, current) => prev + current.quantity,
    0
  )

  // Calculate shipping costs
  const total = first + (itemQuantity - 1) * additional

  products.push({
    name: "Shipping",
    price: total,
    quantity: 1,
  })

  console.log(`added ${total} shipping`)
  return products
}

exports.handler = async event => {
  const { items } = JSON.parse(event.body)
  const products = await getSelectedProducts(items)
  const productsWithShipping = addShipping(products)
  const lineItems = getLineItems(productsWithShipping)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: [
        "US",
        "AT",
        "AL",
        "AD",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "GB",
        "DE",
        "GR",
        "HU",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
        "UA",
      ],
    },
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cart`,
    line_items: lineItems,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.GATSBY_STRIPE_PUBLISHABLE_KEY,
    }),
  }
}
