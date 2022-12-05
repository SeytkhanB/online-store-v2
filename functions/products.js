import Airtable from "airtable-node";
import dotenv from "dotenv";
dotenv.config();

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_API_KEY })
  .base(process.env.VITE_AIRTABLE_BASE)
  .table(process.env.VITE_AIRTABLE_TABLE);

export const handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
      } = fields;

      const { url } = images[0];

      return {
        id,
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image: url,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log("error is: ", error);
    return {
      statusCode: 500,
      body: "success: false, msg: there was an error!",
    };
  }
};
