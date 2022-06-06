const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
require("dotenv").config();
//middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@genius.r5hwg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  (await client.connect())
    ? console.log("connected to the database")
    : await client.close();

  const collection = client.db("Machanics").collection("services");
  // post api
  app.post("/api/services", async (req, res) => {
    const service = req.body;
    const result = await collection.insertOne(service);
    res.json(result);
  });

  // get api
  app.get("/api/services", async (req, res) => {
    const result = await collection.find({}).toArray();
    res.json(result);
  });

  // get single service
  app.get("/api/services/:id", async (req, res) => {
    const result = await collection.findOne({ _id: ObjectId(req.params.id) });
    res.json(result);
  });



}
run().catch(console.dir);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
