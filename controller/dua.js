const { client } = require("../connection/dbConnect");

const categoriesCollection = client.db("dua").collection("categories");
const duaCollection = client.db("dua").collection("duas");
const subCategoriesCollection = client.db("dua").collection("sub-categories");

const getCategory = async (req, res) => {
  const result = await categoriesCollection.find().toArray();
  res.send(result);
};

const getDuas = async (req, res) => {
  const result = await duaCollection.find().toArray();
  res.send(result);
};

const getSubCategory = async (req, res) => {
  const result = await subCategoriesCollection.find().toArray();
  res.send(result);
};

const getSingleDua = async (req, res) => {
  const cat_id = parseInt(req.params.cat_id);
  const subcat_id = parseInt(req.params.subcat_id);
  const result = await duaCollection.find({ cat_id, subcat_id }).toArray();
  res.send(result);
};

module.exports = { getCategory, getDuas, getSubCategory, getSingleDua };
