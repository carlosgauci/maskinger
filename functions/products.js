const { table } = require("./airtable")

exports.handler = async () => {
  try {
    const products = await table.select().firstPage()
    const formattedProducts = products.map(product => ({
      id: product.fields.id,
      name: product.fields.name,
      price: product.fields.price,
      image: product.fields.main_image[0].thumbnails.small.url,
    }))
    return {
      statusCode: 200,
      body: JSON.stringify(formattedProducts),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }
}
