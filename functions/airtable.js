const Airtable = require("airtable")

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  process.env.GATSBY_AIRTABLE_BASE
)
const table = base(process.env.GATSBY_AIRTABLE_NAME)
module.exports = { table }
