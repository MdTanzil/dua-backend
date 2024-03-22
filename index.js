const express = require("express");
require("dotenv").config();
const app = express();
const port = 5000;

const {
  getCategory,
  getDuas,
  getSubCategory,
  getSingleDua,
} = require("./controller/dua");
const { client } = require("./connection/dbConnect");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api/v1/categories", getCategory);
app.get("/api/v1/dua", getDuas);
app.get("/api/v1/sub-category", getSubCategory);
app.get("/api/v1/category/:cat_id/sub_cat/:subcat_id", getSingleDua);
