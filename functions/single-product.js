import Airtable from "airtable-node";
import dotenv from "dotenv";
dotenv.config();

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_API_KEY })
  .base(process.env.VITE_AIRTABLE_BASE)
  .table(process.env.VITE_AIRTABLE_TABLE);

export const handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      let product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      product = { id: product.id, ...product.fields };
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        bosy: "Something went wrong. Server error!",
      };
    }
  }
};
